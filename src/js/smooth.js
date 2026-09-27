/* Lenis smooth scroll, driven by GSAP's single ticker.
   One rAF loop + lagSmoothing(0) is what keeps ScrollTrigger
   pins from jittering. */

export function initSmoothScroll({ gsap, ScrollTrigger, Lenis, reduced }) {
  if (reduced || !Lenis) return null;

  const lenis = new Lenis({ autoRaf: false }); // we drive it ourselves
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  return lenis;
}
