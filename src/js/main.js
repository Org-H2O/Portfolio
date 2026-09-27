/* Entry point — wires all modules together. */

import { gsap, ScrollTrigger, Lenis } from "./lib.js";
import { initSmoothScroll } from "./smooth.js";
import { initCursor } from "./cursor.js";
import { initIntro } from "./intro.js";
import { initWork } from "./work.js";
import { initLightbox } from "./lightbox.js";
import { initI18n } from "./i18n.js";

gsap.registerPlugin(ScrollTrigger);

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

const lenis = initSmoothScroll({ gsap, ScrollTrigger, Lenis, reduced });
initCursor({ gsap });
initLightbox({ lenis });
initI18n({ ScrollTrigger }); // before intro/work — text must be final before measuring

if (!reduced) {
  // intro tweens the hero SVG name — home page only
  if (document.getElementById("nameSvg")) initIntro({ gsap });
  initWork({ gsap, ScrollTrigger });
}

// same-page anchors ride Lenis; subpage nav links (../index.html#…) stay native
if (lenis) {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el);
    });
  });
}
