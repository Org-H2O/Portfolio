/* Work section: pinned viewport, projects scrub horizontally,
   category filters rebuild the track, bar + counter track progress. */

export function initWork({ gsap, ScrollTrigger }) {
  const work = document.querySelector(".work");
  const track = document.getElementById("workTrack");
  const bar = document.getElementById("workBar");
  const count = document.getElementById("workCount");

  if (!work || !track || !bar) return;

  const panels = gsap.utils.toArray(".panel", track);

  // empty track (projects are added one by one) — nothing to pin
  if (!panels.length) return;

  const setCount = (i) => {
    if (count) {
      count.textContent =
        String(i).padStart(2, "0") + " / " + String(panels.length).padStart(2, "0");
    }
  };
  setCount(1);

  // one narrow panel (first project) → no horizontal distance, skip the pin
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

  // filters — hide/show panels, then re-measure the pinned distance
  const buttons = document.querySelectorAll(".filters button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.toggle("on", b === btn));
      const f = btn.dataset.f;
      panels.forEach((p) => {
        p.style.display = (f === "all" || p.dataset.cat === f) ? "" : "none";
      });
      ScrollTrigger.refresh();
    });
  });

  // re-measure once images/fonts have settled
  addEventListener("load", () => ScrollTrigger.refresh());
}
