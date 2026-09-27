/* Entry point — wires all modules together. */

import { gsap, ScrollTrigger, Lenis } from "./lib.js";
import { initSmoothScroll } from "./smooth.js";
import { initCursor } from "./cursor.js";
import { initIntro } from "./intro.js";
import { initWork } from "./work.js";
import { initLightbox } from "./lightbox.js";

gsap.registerPlugin(ScrollTrigger);

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

const lenis = initSmoothScroll({ gsap, ScrollTrigger, Lenis, reduced });
initCursor({ gsap });
initLightbox({ lenis });

if (!reduced) {
  // intro tweens the hero SVG name — home page only
  if (document.getElementById("nameSvg")) initIntro({ gsap });
  initWork({ gsap, ScrollTrigger });
}
