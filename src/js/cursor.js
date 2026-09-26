/* Custom cursor: orange dot with difference blending.
   Three states: idle dot, hollow ring over links/buttons,
   big ring over the hero name — where it also drives the SVG
   clip-path so the filled name turns into its orange outline.

   Magnetic behavior: within SNAP_RADIUS of a clickable element the
   circle locks onto it, and a click fired slightly outside the
   element is forwarded to it — so clicks land without precise aim
   (the visible dot intentionally lags the real pointer). */

const DOT_SIZE = 12;    // px, idle cursor
const LINK_SIZE = 56;   // px, over links & buttons
const RING_SIZE = 260;  // px, diameter over the hero name
const SNAP_RADIUS = 36; // px halo around clickables
const SNAP_CENTER_MAX = 200; // snap to center below this size, edge above

export function initCursor({ gsap }) {
  const cursor = document.getElementById("cursor");
  const svg = document.getElementById("nameSvg");
  const hole = document.getElementById("holeCircle");

  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

  // the dot works on every page — the hero SVG parts are home-page only
  if (!finePointer || !cursor) {
    if (cursor) cursor.style.display = "none";
    return;
  }

  let tx = innerWidth / 2, ty = innerHeight / 2; // target (mouse)
  let cx = tx, cy = ty;                          // current (lerped)
  let size = DOT_SIZE;                           // current circle diameter
  let overName = false;

  // each candidate: the clickable plus the element the circle centers on
  // (nav links: the label span, not the whole anchor incl. its number)
  const clickables = Array.from(document.querySelectorAll("a, button"))
    .map((el) => ({ el, at: el.querySelector("[data-snap]") || el }));
  let snapEl = null;         // element currently snapped to
  let hotEl = null;          // element carrying the .is-snapped state
  let snapDist = Infinity;   // mouse distance to it (0 = pointer is on it)
  let snapX = 0, snapY = 0;  // point the circle locks onto

  const pt = svg ? svg.createSVGPoint() : null;

  addEventListener("pointermove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
  }, { passive: true });

  if (svg) {
    svg.addEventListener("pointerenter", () => { overName = true; });
    svg.addEventListener("pointerleave", () => { overName = false; });
  }

  const updateSnap = () => {
    let found = null;
    let best = Infinity;

    for (const { el, at } of clickables) {
      const r = at.getBoundingClientRect();
      if (!r.width && !r.height) continue;

      // closest point of the target to the mouse
      const nx = Math.max(r.left, Math.min(tx, r.right));
      const ny = Math.max(r.top, Math.min(ty, r.bottom));
      const d = Math.hypot(tx - nx, ty - ny);

      if (d < best) {
        best = d;
        found = { el, nx, ny, rect: r };
      }
    }

    if (found && best <= SNAP_RADIUS) {
      snapEl = found.el;
      snapDist = best;
      if (Math.max(found.rect.width, found.rect.height) < SNAP_CENTER_MAX) {
        snapX = found.rect.left + found.rect.width / 2; // small: dead center
        snapY = found.rect.top + found.rect.height / 2;
      } else {
        snapX = found.nx;                               // big: nearest edge
        snapY = found.ny;
      }
    } else {
      snapEl = null;
      snapDist = Infinity;
    }

    // hover state follows the snap, not the invisible pointer
    if (snapEl !== hotEl) {
      if (hotEl) hotEl.classList.remove("is-snapped");
      if (snapEl) snapEl.classList.add("is-snapped");
      hotEl = snapEl;
    }
  };

  // click fired near (but not on) the snapped element activates it
  document.addEventListener("click", (e) => {
    if (!snapEl || snapDist === 0) return;
    if (e.target.closest && e.target.closest("a, button")) return;
    snapEl.click();
  });

  const tick = () => {
    updateSnap();

    const gx = snapEl ? snapX : tx;
    const gy = snapEl ? snapY : ty;
    cx += (gx - cx) * 0.18;
    cy += (gy - cy) * 0.18;

    const target = overName ? RING_SIZE : snapEl ? LINK_SIZE : DOT_SIZE;
    size += (target - size) * 0.14;

    cursor.style.width = size + "px";
    cursor.style.height = size + "px";
    cursor.style.transform =
      "translate(" + cx + "px, " + cy + "px) translate(-50%, -50%)";

    cursor.classList.toggle("is-ring", overName);
    cursor.classList.toggle("is-link", !overName && !!snapEl);

    // map screen position -> SVG user units so the clip circle
    // sits exactly under the cursor ring at any viewport size
    if (svg && hole) {
      const m = svg.getScreenCTM();
      if (m) {
        pt.x = cx;
        pt.y = cy;
        const p = pt.matrixTransform(m.inverse());
        hole.setAttribute("cx", p.x);
        hole.setAttribute("cy", p.y);
        hole.setAttribute("r", Math.max(0, (size / 2) / m.a));
      }
    }
  };

  gsap.ticker.add(tick);
}
