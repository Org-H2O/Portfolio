/* Work section: pinned horizontal scrub on desktop, native swipe carousel
   with dots on mobile. Filters rebuild the track in both modes. */

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

  let rebuildDots = null; // set by the mobile context

  const mm = gsap.matchMedia();

  // desktop — pinned viewport, projects scrub horizontally
  mm.add("(min-width: 1024px)", () => {
    // few panels → short/no distance; clamp so the pin never goes negative
    const dist = () => Math.max(0, track.scrollWidth - innerWidth);

    gsap.to(track, {
      x: () => -dist(),
      ease: "none",
      scrollTrigger: {
        trigger: work,
        start: "top top",
        end: () => "+=" + dist(),
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          bar.style.transform = "scaleX(" + self.progress + ")";
          setCount(Math.round(self.progress * (panels.length - 1)) + 1);
        },
      },
    });
  });

  // mobile — native overflow swipe, snap per panel, dots + counter follow scroll
  mm.add("(max-width: 1023px)", () => {
    const dotsWrap = document.getElementById("workDots");
    if (!dotsWrap) return;

    const visible = () => panels.filter((p) => p.style.display !== "none");
    let dots = [];

    const scrollToPanel = (panel) => {
      const r = panel.getBoundingClientRect();
      const t = track.getBoundingClientRect();
      track.scrollTo({
        left:
          track.scrollLeft +
          (r.left - t.left) -
          (track.clientWidth - r.width) / 2,
        behavior: "smooth",
      });
    };

    const buildDots = () => {
      dotsWrap.innerHTML = "";
      dots = visible().map((panel, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", "Go to project " + (i + 1));
        b.addEventListener("click", () => scrollToPanel(panel));
        dotsWrap.appendChild(b);
        return b;
      });
      update();
    };

    // active dot = panel closest to the track's center
    const update = () => {
      const vis = visible();
      const mid = track.getBoundingClientRect().left + track.clientWidth / 2;

      let idx = 0;
      let best = Infinity;
      vis.forEach((panel, i) => {
        const r = panel.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - mid);
        if (d < best) {
          best = d;
          idx = i;
        }
      });

      setCount(idx + 1);
      dots.forEach((d, i) => d.classList.toggle("on", i === idx));

      const max = track.scrollWidth - track.clientWidth;
      bar.style.transform = "scaleX(" + (max > 0 ? track.scrollLeft / max : 0) + ")";
    };

    track.addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    buildDots();
    rebuildDots = buildDots;

    return () => {
      track.removeEventListener("scroll", update);
      removeEventListener("resize", update);
      dotsWrap.innerHTML = "";
      dots = [];
      rebuildDots = null;
    };
  });

  // filters — hide/show panels, then re-measure whichever mode is active
  const buttons = document.querySelectorAll(".filters button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.toggle("on", b === btn));
      const f = btn.dataset.f;
      panels.forEach((p) => {
        p.style.display = (f === "all" || p.dataset.cat === f) ? "" : "none";
      });
      if (rebuildDots) rebuildDots();
      ScrollTrigger.refresh();
    });
  });

  // re-measure once images/fonts have settled
  addEventListener("load", () => ScrollTrigger.refresh());
}
