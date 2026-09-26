/* Custom cursor: orange dot with difference blending.
   Over the hero name it grows into a ring that drives the SVG
   clip-path — the filled name turns into its orange outline. */

const DOT_SIZE = 12;   // px, idle cursor
const RING_SIZE = 260; // px, diameter over the hero name

export function initCursor({ gsap }) {
  const cursor = document.getElementById("cursor");
  const svg = document.getElementById("nameSvg");
  const hole = document.getElementById("holeCircle");

  const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (!finePointer || !cursor || !svg || !hole) {
    if (cursor) cursor.style.display = "none";
    return;
  }

  let tx = innerWidth / 2, ty = innerHeight / 2; // target (mouse)
  let cx = tx, cy = ty;                          // current (lerped)
  let size = DOT_SIZE;                           // current circle diameter
  let hovering = false;

  const pt = svg.createSVGPoint();

  addEventListener("pointermove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
  }, { passive: true });

  svg.addEventListener("pointerenter", () => {
    hovering = true;
    cursor.classList.add("is-ring");
  });

  svg.addEventListener("pointerleave", () => {
    hovering = false;
    cursor.classList.remove("is-ring");
  });

  const tick = () => {
    cx += (tx - cx) * 0.18;
    cy += (ty - cy) * 0.18;
    size += ((hovering ? RING_SIZE : DOT_SIZE) - size) * 0.14;

    cursor.style.width = size + "px";
    cursor.style.height = size + "px";
    cursor.style.transform =
      "translate(" + cx + "px, " + cy + "px) translate(-50%, -50%)";

    // map screen position -> SVG user units so the clip circle
    // sits exactly under the cursor ring at any viewport size
    const m = svg.getScreenCTM();
    if (m) {
      pt.x = cx;
      pt.y = cy;
      const p = pt.matrixTransform(m.inverse());
      hole.setAttribute("cx", p.x);
      hole.setAttribute("cy", p.y);
      hole.setAttribute("r", Math.max(0, (size / 2) / m.a));
    }
  };

  gsap.ticker.add(tick);
}
