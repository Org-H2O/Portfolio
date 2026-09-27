/* Tiny i18n: data-i18n attributes + this dictionary, no build step.
   Toggle persists in localStorage; ScrollTrigger re-measures after a swap
   because longer French strings change the pinned track's width. */

const DICT = {
  en: {
    "nav.work": "Work",
    "nav.voice": "Voice",
    "nav.about": "About",
    "nav.contact": "Contact",

    "hero.k1": "UX/UI Designer",
    "hero.k2": "Voice Over Artist",
    "hero.k3": "3D Designer",
    "hero.scroll": "Scroll to explore ",

    "mq.ux": "UX/UI Design",
    "mq.voice": "Voice Over",
    "mq.3d": "3D Design",
    "mq.art": "Art Direction",

    "work.title": "Selected <span class='o'>Work</span>",
    "f.all": "All",
    "f.ux": "UX",
    "f.ui": "UI",
    "f.graphic": "Graphic",
    "f.d3": "3D",

    "p1.tags": "UX/UI ● Concept ● Landing",
    "p1.cat": "UX/UI",
    "p2.tags": "Graphic ● Print ● Editorial",
    "p2.cat": "Graphic",

    "voice.title": "Voice <span class='o'>Over</span>",
    "voice.lead": "[ Placeholder — one line on her voice: tone, range, what she reads. ]",
    "v1.title": "Commercial demo",
    "v1.tags": "[ Tags — brands, tone, language ]",
    "v2.title": "Narration demo",
    "v2.tags": "[ Tags — documentary, e-learning ]",
    "v3.title": "Character demo",
    "v3.tags": "[ Tags — animation, games ]",
    "voice.soon": "Coming soon",

    "about.title": "About",
    "about.p1":
      "Hajar studies UX/UI design at Cité des Métiers et des Compétences (CMC). " +
      "During her internship at International School El Jadida, she took three " +
      "mobile apps and a web app from user research and wireframes to a design " +
      "system and full UI in Figma.",
    "about.p2":
      "3D and voice are part of the same practice. She models and textures " +
      "scenes in Blender, trains interns on 3D basics, and hosted the two-day " +
      "Arabic radio broadcast at the first CMC RSK forum in Rabat.",
    "about.f1l": "Study",
    "about.f1v": "UX/UI Design, CMC RSK",
    "about.f2l": "Languages",
    "about.f2v": "Arabic ● French ● Turkish ● English",
    "about.f3l": "Toolkit",
    "about.f3v": "Figma ● Blender ● Catia",
    "about.cv": "Download CV",

    "c.kicker": "Have a project in mind?",
    "c.title": "Let's make<br /><span class='o'>something</span>",

    "foot.top": "Back to top",

    "back.label": "More case studies coming soon",
    "back.link": "Back to all work ",

    "rec.k1": "UX/UI Design",
    "rec.k2": "Concept",
    "rec.m1": "Role — <b>UX/UI Designer</b>",
    "rec.m2": "Scope — <b>Landing &amp; Product UI</b>",
    "rec.m3": "Platform — <b>Web + Mobile</b>",
    "rec.lead":
      "Recettes Mondiales is a concept for a recipe discovery app: " +
      "taste-tested dishes from 195 countries and cultures. Hajar designed " +
      "the landing page, hero to footer.",
    "rec.f1l": "Role",
    "rec.f1v": "UX/UI Design",
    "rec.f2l": "Deliverables",
    "rec.f2v": "Landing page &amp; UI",
    "rec.f3l": "Status",
    "rec.f3v": "Concept",
    "rec.f4l": "Palette",
    "rec.f4v": "Cream &amp; orange",
    "rec.f5l": "Year",
    "rec.h2": "Three steps<br /><span class='o'>to any cuisine</span>",
    "rec.copy":
      "The landing explains the product in three cards: discover " +
      "taste-tested recipes from 195 countries and cultures, save them " +
      "to a personal cookbook, and share your own family recipes with " +
      "other cooks.",
    "rec.cap1": "Landing hero",
    "rec.cap2": "World Flavors feed",
    "rec.cap3": "How it works",
    "rec.cap4": "Testimonial &amp; closing CTA",

    "po.k1": "Graphic Design",
    "po.k2": "Posters &amp; Covers",
    "po.m1": "Role — <b>Graphic Designer</b>",
    "po.m2": "Scope — <b>Key art &amp; campaigns</b>",
    "po.m3": "Formats — <b>Print &amp; social</b>",
    "po.lead":
      "Poster, key-art and album-cover design for client campaigns " +
      "and personal studies: a school program for Skylight Academy, " +
      "a Ramadan food drive, a film one-sheet, album art and an " +
      "editorial cover study.",
    "po.f1l": "Role",
    "po.f1v": "Graphic Design",
    "po.f2l": "Deliverables",
    "po.f2v": "Posters, key art, album covers",
    "po.f3l": "Clients",
    "po.f3v": "Skylight Academy &amp; associations",
    "po.f4l": "Year",
    "po.g1": "Key Art &amp; Covers",
    "po.g2": "Album Art",
    "po.g3": "Client Campaigns",
    "po.g4": "Skylight Academy",
    "po.cap1": "Before the Door Closed — film key art",
    "po.cap2": "VOGUE cover study",
    "po.cap3": "Apathetic Beauty",
    "po.cap4": "Surviving Silence",
    "po.cap5": "NAJM — Simple &amp; Powerful",
    "po.cap6": "Hit Me Hard and Soft — cover study",
    "po.cap7": "Butterflies — event artwork",
    "po.cap8": "Ramadan food drive",
    "po.cap9": "Activités parascolaires",
    "po.cap10": "Cours de soutien",
    "po.cap11": "Mathématiques",
    "po.cap12": "Soutien scolaire — primaire",
    "cat.editorial": "Editorial",
    "cat.poster": "Poster",
  },

  fr: {
    "nav.work": "Projets",
    "nav.voice": "Voix off",
    "nav.about": "À propos",
    "nav.contact": "Contact",

    "hero.k1": "Designer UX/UI",
    "hero.k2": "Artiste voix off",
    "hero.k3": "Designer 3D",
    "hero.scroll": "Faites défiler ",

    "mq.ux": "Design UX/UI",
    "mq.voice": "Voix off",
    "mq.3d": "Design 3D",
    "mq.art": "Direction artistique",

    "work.title": "Travaux <span class='o'>sélectionnés</span>",
    "f.all": "Tous",
    "f.ux": "UX",
    "f.ui": "UI",
    "f.graphic": "Graphisme",
    "f.d3": "3D",

    "p1.tags": "UX/UI ● Concept ● Landing",
    "p1.cat": "UX/UI",
    "p2.tags": "Graphisme ● Print ● Éditorial",
    "p2.cat": "Graphisme",

    "voice.title": "Voix <span class='o'>off</span>",
    "voice.lead": "[ Placeholder — une ligne sur sa voix : ton, registre, ce qu'elle lit. ]",
    "v1.title": "Démo commerciale",
    "v1.tags": "[ Mots-clés — marques, ton, langue ]",
    "v2.title": "Démo narration",
    "v2.tags": "[ Mots-clés — documentaire, e-learning ]",
    "v3.title": "Démo personnages",
    "v3.tags": "[ Mots-clés — animation, jeux vidéo ]",
    "voice.soon": "Bientôt",

    "about.title": "À propos",
    "about.p1":
      "Hajar étudie le design UX/UI à la Cité des Métiers et des Compétences (CMC). " +
      "Durant son stage à l'International School El Jadida, elle a mené trois " +
      "applications mobiles et une application web de la recherche utilisateur " +
      "et des wireframes jusqu'au design system et à l'interface complète sur Figma.",
    "about.p2":
      "La 3D et la voix off s'inscrivent dans la même pratique. Elle modélise et " +
      "texture des scènes sur Blender, forme des stagiaires aux bases de la 3D, " +
      "et a animé l'émission radio en arabe pendant deux jours lors de la " +
      "première édition du forum CMC RSK à Rabat.",
    "about.f1l": "Formation",
    "about.f1v": "Design UX/UI, CMC RSK",
    "about.f2l": "Langues",
    "about.f2v": "Arabe ● Français ● Turc ● Anglais",
    "about.f3l": "Outils",
    "about.f3v": "Figma ● Blender ● Catia",
    "about.cv": "Télécharger le CV",

    "c.kicker": "Un projet en tête ?",
    "c.title": "Créons<br /><span class='o'>quelque chose</span>",

    "foot.top": "Haut de page",

    "back.label": "D'autres études de cas arrivent bientôt",
    "back.link": "Retour aux projets ",

    "rec.k1": "Design UX/UI",
    "rec.k2": "Concept",
    "rec.m1": "Rôle — <b>Designer UX/UI</b>",
    "rec.m2": "Périmètre — <b>Landing &amp; UI produit</b>",
    "rec.m3": "Plateforme — <b>Web + Mobile</b>",
    "rec.lead":
      "Recettes Mondiales est un concept d'application de découverte de " +
      "recettes : des plats goûtés et approuvés venus de 195 pays et " +
      "cultures. Hajar a conçu la landing page, du hero au footer.",
    "rec.f1l": "Rôle",
    "rec.f1v": "Design UX/UI",
    "rec.f2l": "Livrables",
    "rec.f2v": "Landing page &amp; UI",
    "rec.f3l": "Statut",
    "rec.f3v": "Concept",
    "rec.f4l": "Palette",
    "rec.f4v": "Crème &amp; orange",
    "rec.f5l": "Année",
    "rec.h2": "Trois étapes<br /><span class='o'>vers toutes les cuisines</span>",
    "rec.copy":
      "La landing explique le produit en trois cartes : découvrir des " +
      "recettes goûtées et approuvées venant de 195 pays et cultures, les " +
      "enregistrer dans son livre de cuisine personnel, et partager ses " +
      "propres recettes de famille avec d'autres cuisiniers.",
    "rec.cap1": "Hero de la landing",
    "rec.cap2": "Flux World Flavors",
    "rec.cap3": "Comment ça marche",
    "rec.cap4": "Témoignage &amp; CTA de clôture",

    "po.k1": "Design graphique",
    "po.k2": "Affiches &amp; pochettes",
    "po.m1": "Rôle — <b>Designer graphique</b>",
    "po.m2": "Périmètre — <b>Key art &amp; campagnes</b>",
    "po.m3": "Formats — <b>Print &amp; réseaux sociaux</b>",
    "po.lead":
      "Affiches, key art et pochettes d'album pour des campagnes clients " +
      "et des études personnelles : un programme scolaire pour Skylight " +
      "Academy, une collecte alimentaire de Ramadan, une affiche de film, " +
      "des pochettes d'album et une étude de couverture éditoriale.",
    "po.f1l": "Rôle",
    "po.f1v": "Design graphique",
    "po.f2l": "Livrables",
    "po.f2v": "Affiches, key art, pochettes d'album",
    "po.f3l": "Clients",
    "po.f3v": "Skylight Academy &amp; associations",
    "po.f4l": "Année",
    "po.g1": "Key art &amp; covers",
    "po.g2": "Pochettes d'album",
    "po.g3": "Campagnes clients",
    "po.g4": "Skylight Academy",
    "po.cap1": "« Before the Door Closed » — key art du film",
    "po.cap2": "Étude de couverture VOGUE",
    "po.cap3": "Apathetic Beauty",
    "po.cap4": "Surviving Silence",
    "po.cap5": "NAJM — Simple &amp; Powerful",
    "po.cap6": "« Hit Me Hard and Soft » — étude de pochette",
    "po.cap7": "« Butterflies » — visuel d'événement",
    "po.cap8": "Collecte alimentaire Ramadan",
    "po.cap9": "Activités parascolaires",
    "po.cap10": "Cours de soutien",
    "po.cap11": "Mathématiques",
    "po.cap12": "Soutien scolaire — primaire",
    "cat.editorial": "Éditorial",
    "cat.poster": "Affiche",
  },
};

let lang = "en";
try {
  lang = localStorage.getItem("hh-lang") || "en";
  if (!DICT[lang]) lang = "en";
} catch {
  lang = "en";
}

function apply() {
  document.documentElement.lang = lang;
  const dict = DICT[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll(".lang-toggle [data-l]").forEach((s) => {
    s.classList.toggle("on", s.dataset.l === lang);
  });
}

export function initI18n({ ScrollTrigger } = {}) {
  apply();

  const btn = document.getElementById("langToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    lang = lang === "en" ? "fr" : "en";
    try {
      localStorage.setItem("hh-lang", lang);
    } catch {
      /* private mode etc. — toggle still works for the session */
    }
    apply();
    // text swap changes track widths → re-measure pins
    if (ScrollTrigger) ScrollTrigger.refresh();
  });
}
