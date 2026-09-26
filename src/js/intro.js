/* Page-load intro: name slides up line by line (both SVG layers
   in sync so the mask stays aligned), then the chrome fades in. */

export function initIntro({ gsap }) {
  gsap.timeline({ defaults: { ease: "power4.out" }, delay: 0.15 })
    .from("#fillGroup text", { attr: { y: "+=150" }, duration: 1.25, stagger: 0.14 }, 0)
    .from("#holeGroup text", { attr: { y: "+=150" }, duration: 1.25, stagger: 0.14 }, 0)
    .from([".nav", ".kicker", ".meta", ".marquee"],
      { y: 18, autoAlpha: 0, duration: 0.9, stagger: 0.07 }, 0.55);
}
