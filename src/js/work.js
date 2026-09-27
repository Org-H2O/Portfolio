/* Work section: horizontal project track — drag to scroll on desktop,
   native snap swipe with dots on mobile. Filters rebuild the track. */

export function initWork({ gsap, ScrollTrigger }) {
  const work = document.querySelector(".work");
  const track = document.getElementById("workTrack");
  const bar = document.getElementById("workBar");
  const count = document.getElementById("workCount");

  if (!work || !track || !bar) return;

  const panels = gsap.utils.toArray(".panel", track);

  // empty track (projects are added one by one) — nothing to scroll
  if (!panels.length) return;

  const setCount = (i) => {
    if (count) {
      count.textContent =
        String(i).padStart(2, "0") + " / " + String(panels.length).padStart(2, "0");
    }
  };
  setCount(1);

  // progress bar + counter follow the track's scroll position (both modes)
  const update = () => {
    const max = track.scrollWidth - track.clientWidth;
    bar.style.transform = "scaleX(" + (max > 0 ? track.scrollLeft / max : 0) + ")";

    // active index = panel closest to the track's center
    const mid = track.getBoundingClientRect().left + track.clientWidth / 2;
    let idx = 0;
    let best = Infinity;
    panels.forEach((p, i) => {
      if (p.style.display === "none") return;
      const r = p.getBoundingClientRect();
      const d = Math.abs(r.left + r.width / 2 - mid);
      if (d < best) {
        best = d;
        idx = i;
      }
    });
    setCount(idx + 1);

    dots.forEach((d, i) => d.classList.toggle("on", i === idx));
  };

  track.addEventListener("scroll", update, { passive: true });
  addEventListener("resize", update);

  // mobile — snap dots
  const dotsWrap = document.getElementById("workDots");
  let dots = [];

  const visible = () => panels.filter((p) => p.style.display !== "none");

  const buildDots = () => {
    dotsWrap.innerHTML = "";
    dots = visible().map((panel, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Go to project " + (i + 1));
      b.addEventListener("click", () => {
        const r = panel.getBoundingClientRect();
        const t = track.getBoundingClientRect();
        track.scrollTo({
          left:
            track.scrollLeft +
            (r.left - t.left) -
            (track.clientWidth - r.width) / 2,
          behavior: "smooth",
        });
      });
      dotsWrap.appendChild(b);
      return b;
    });
    update();
  };

  // desktop — grab-and-drag with momentum release
  const mm = gsap.matchMedia();
  mm.add("(min-width: 1024px)", () => {
    let down = false;
    let dragged = false;      // this gesture moved the track
    let lastDragEnd = 0;      // timestamp — click events right after a drag are swallowed
    let startX = 0;
    let startLeft = 0;
    let lastX = 0;
    let lastT = 0;
    let velocity = 0;         // px per ms, positive = dragging left
    let rafId = 0;

    const stopMomentum = () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const glide = () => {
      velocity *= 0.94; // friction per frame
      if (Math.abs(velocity) < 0.02) {
        rafId = 0;
        return;
      }
      track.scrollLeft += velocity * 16;
      rafId = requestAnimationFrame(glide);
    };

    const onDown = (e) => {
      if (e.button !== 0) return;
      e.preventDefault(); // no text selection, no native image drag
      stopMomentum();
      down = true;
      dragged = false;
      startX = lastX = e.clientX;
      startLeft = track.scrollLeft;
      lastT = performance.now();
      velocity = 0;
    };

    const onMove = (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!dragged && Math.abs(dx) > 6) {
        dragged = true;
        track.classList.add("is-dragging");
      }
      if (!dragged) return;

      const now = performance.now();
      const dt = now - lastT;
      if (dt > 0) velocity = -(e.clientX - lastX) / dt;
      lastX = e.clientX;
      lastT = now;

      track.scrollLeft = startLeft - dx;
    };

    const onUp = () => {
      if (!down) return;
      down = false;
      if (dragged) {
        lastDragEnd = performance.now();
        if (Math.abs(velocity) > 0.05) rafId = requestAnimationFrame(glide);
      }
      dragged = false;
      track.classList.remove("is-dragging");
    };

    // a drag must never end in a click-through, even if the click fires late
    const onClickCapture = (e) => {
      if (performance.now() - lastDragEnd < 150) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    track.addEventListener("mousedown", onDown);
    addEventListener("mousemove", onMove);
    addEventListener("mouseup", onUp);
    track.addEventListener("click", onClickCapture, true);

    return () => {
      stopMomentum();
      track.removeEventListener("mousedown", onDown);
      removeEventListener("mousemove", onMove);
      removeEventListener("mouseup", onUp);
      track.removeEventListener("click", onClickCapture, true);
      track.classList.remove("is-dragging");
      down = false;
      dragged = false;
    };
  });

  buildDots();
  update();

  // filters — hide/show panels, then rebuild dots + re-measure
  const buttons = document.querySelectorAll(".filters button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.toggle("on", b === btn));
      const f = btn.dataset.f;
      panels.forEach((p) => {
        p.style.display = (f === "all" || p.dataset.cat === f) ? "" : "none";
      });
      buildDots();
      update();
    });
  });

  // re-measure once images/fonts have settled
  addEventListener("load", () => update());
}
