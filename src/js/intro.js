/* Page-load intro: name slides up line by line (both SVG layers
   in sync so the mask stays aligned), then the chrome fades in.
   Also the hero scroll parallax — home page only, like the SVG. */

export function initIntro({ gsap }) {
  const svg = document.getElementById("nameSvg");

  gsap.timeline({
    defaults: { ease: "power4.out" },
    delay: 0.15,
    // once the letters have landed, the svg may paint outside its box
    // and the cursor's black circle may start (it needs both)
    onComplete: () => {
      if (!svg) return;
      svg.style.overflow = "visible";
      svg.dataset.reveal = "on";
    },
  })
    .from("#fillGroup text", { attr: { y: "+=150" }, duration: 1.25, stagger: 0.14 }, 0)
    .from("#holeGroup text", { attr: { y: "+=150" }, duration: 1.25, stagger: 0.14 }, 0)
    .from([".nav", ".kicker", ".meta", ".marquee"],
      { y: 18, autoAlpha: 0, duration: 0.9, stagger: 0.07 }, 0.55);

  // backdrop drifts down while the hero scrolls up = moves slower than
  // the page; .hero's overflow:hidden clips it at the section edge
  gsap.to(".hero-bg", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
  });
}
