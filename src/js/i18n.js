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
    "p3.tags": "UX/UI ● Admin ● Mobile",
    "p3.cat": "UX/UI",
    "p4.tags": "3D ● CATIA ● Blender",
    "p4.cat": "3D",

    "voice.title": "Voice <span class='o'>Over</span>",
    "voice.lead": "Two sides of my voice: dark narration for true crime, and stories for young listeners.",
    "v1.title": "True crime narration",
    "v1.tags": "Elisa Lam case ● Documentary",
    "v2.title": "Educational storytelling",
    "v2.tags": "Ibn Battuta ● Young listeners",
    "v3.title": "Character demo",
    "v3.tags": "[ Tags — animation, games ]",
    "voice.soon": "Coming soon",

    "about.title": "About",
    "about.p1":
      "I studied UX/UI design at Cité des Métiers et des Compétences (CMC). " +
      "During my internship at International School El Jadida, I took three " +
      "mobile apps and a web app from user research and wireframes to a design " +
      "system and full UI in Figma.",
    "about.p2":
      "3D and voice are part of the same practice. I model and texture " +
      "scenes in Blender, train interns on 3D basics, and hosted the two-day " +
      "Arabic radio broadcast at the first CMC RSK forum in Rabat.",
    "about.f1l": "Education",
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

    "wp.k1": "UX/UI Design",
    "wp.k2": "Internship",
    "wp.m1": "Role — <b>UX/UI Designer</b>",
    "wp.m2": "Scope — <b>Parent app &amp; web admin</b>",
    "wp.m3": "Platform — <b>Mobile + Web</b>",
    "wp.lead":
      "WayPoint is a school transportation management system I designed " +
      "during my internship at International School El Jadida: a parent app " +
      "for live pickup tracking, a web admin for the school, and a teacher " +
      "companion — built on one design system.",
    "wp.f1l": "Role",
    "wp.f1v": "UX/UI Design",
    "wp.f2l": "Deliverables",
    "wp.f2v": "Parent app, admin &amp; design system",
    "wp.f3l": "Status",
    "wp.f3v": "Design delivered",
    "wp.f4l": "Palette",
    "wp.f4v": "Blue &amp; white",
    "wp.f5l": "Year",
    "wp.h2a": "The parent<br /><span class=\"o\">app</span>",
    "wp.copyA":
      "Parents open the app to today's schedule, their linked children, " +
      "and one big action: Start Pickup. From there the screen becomes a " +
      "live tracker: distance and ETA update as they get close to the school.",
    "wp.h2b": "How pickup<br /><span class=\"o\">works</span>",
    "wp.copyB":
      "It all runs on the geofence: a parent opens the app, the system " +
      "checks their GPS against the zone around the school, and computes " +
      "the ETA. Under five minutes out, the teacher gets the alert. " +
      "No manual check-in, no lost phone calls.",
    "wp.h2c": "The school<br /><span class=\"o\">side</span>",
    "wp.copyC":
      "The web admin runs the whole school: students, parents, classes, " +
      "schedules and pickup logs. Every pickup becomes a number — total " +
      "count, average duration, fastest and slowest — so the school can " +
      "spot the slow ones. Teachers get a lighter companion app with the " +
      "class list and alerts.",
    "wp.h2d": "One design<br /><span class=\"o\">system</span>",
    "wp.copyD":
      "Every screen, from parent app to admin, comes from the same " +
      "component library: colors, type scale, spacing, forms and cards " +
      "defined once, reused everywhere.",
    "d3.k1": "3D Design",
    "d3.k2": "Modeling",
    "d3.k3": "Training",
    "d3.m1": "Tools — <b>CATIA &amp; Blender</b>",
    "d3.m2": "Focus — <b>Hard-surface modeling</b>",
    "d3.lead":
      "I model in two tools: CATIA for precision parts, Blender for " +
      "anything that needs to feel alive. These are the pieces I keep " +
      "coming back to.",
    "d3.f1l": "Tools",
    "d3.f1v": "CATIA ● Blender",
    "d3.f2l": "Focus",
    "d3.f2v": "Hard-surface modeling",
    "d3.f3l": "Also",
    "d3.f3v": "Training interns on 3D basics",
    "d3.h2a": "CATIA<br /><span class=\"o\">precision</span>",
    "d3.copyA":
      "CATIA is where I learned 3D: exact dimensions, clean sketches, " +
      "parts that could actually be manufactured. A combat knife, a " +
      "quadcopter drone, and a cube study built from one repeated " +
      "profile.",
    "d3.h2b": "Blender<br /><span class=\"o\">character work</span>",
    "d3.copyB":
      "A little ghost, modeled and shaped vertex by vertex in Blender. " +
      "Small piece, but it taught me more about topology than any " +
      "tutorial.",
    "d3.cap1": "Combat knife",
    "d3.cap2": "Nested cube study",
    "d3.cap3": "Quadcopter drone",
    "d3.cap4": "Ghost character",
    "wp.cap1": "Parent home",
    "wp.cap2": "Live pickup mode",
    "wp.cap3": "My children",
    "wp.cap4": "Linking a child",
    "wp.cap5": "Geofence zones",
    "wp.cap6": "Pickup logs dashboard",
    "wp.cap7": "Teacher companion",
    "wp.cap8": "Component sheet",

    "rec.k1": "UX/UI Design",
    "rec.k2": "Concept",
    "rec.m1": "Role — <b>UX/UI Designer</b>",
    "rec.m2": "Scope — <b>Landing &amp; Product UI</b>",
    "rec.m3": "Platform — <b>Web + Mobile</b>",
    "rec.lead":
      "Recettes Mondiales is a concept for a recipe discovery app: " +
      "taste-tested dishes from 195 countries and cultures. I designed " +
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
    "p3.tags": "UX/UI ● Admin ● Mobile",
    "p3.cat": "UX/UI",
    "p4.tags": "3D ● CATIA ● Blender",
    "p4.cat": "3D",

    "voice.title": "Voix <span class='o'>off</span>",
    "voice.lead": "Deux facettes de ma voix : la narration sombre pour le true crime, et des histoires pour le jeune public.",
    "v1.title": "Narration true crime",
    "v1.tags": "L'affaire Elisa Lam ● Documentaire",
    "v2.title": "Conte éducatif",
    "v2.tags": "Ibn Battuta ● Jeune public",
    "v3.title": "Démo personnages",
    "v3.tags": "[ Mots-clés — animation, jeux vidéo ]",
    "voice.soon": "Bientôt",

    "about.title": "À propos",
    "about.p1":
      "J'ai étudié le design UX/UI à la Cité des Métiers et des Compétences (CMC). " +
      "Durant mon stage à l'International School El Jadida, j'ai mené trois " +
      "applications mobiles et une application web de la recherche utilisateur " +
      "et des wireframes jusqu'au design system et à l'interface complète sur Figma.",
    "about.p2":
      "La 3D et la voix off s'inscrivent dans la même pratique. Je modélise et " +
      "texture des scènes sur Blender, je forme des stagiaires aux bases de la 3D, " +
      "et j'ai animé l'émission radio en arabe pendant deux jours lors de la " +
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

    "wp.k1": "Design UX/UI",
    "wp.k2": "Stage",
    "wp.m1": "Rôle — <b>Designer UX/UI</b>",
    "wp.m2": "Périmètre — <b>Appli parents &amp; admin web</b>",
    "wp.m3": "Plateforme — <b>Mobile + Web</b>",
    "wp.lead":
      "WayPoint est un système de gestion du transport scolaire que j'ai " +
      "conçu durant mon stage à l'International School El Jadida : une " +
      "appli parents pour le suivi des ramassages en direct, un admin web " +
      "pour l'école et un compagnon enseignant — le tout sur un seul " +
      "design system.",
    "wp.f1l": "Rôle",
    "wp.f1v": "Design UX/UI",
    "wp.f2l": "Livrables",
    "wp.f2v": "Appli parents, admin &amp; design system",
    "wp.f3l": "Statut",
    "wp.f3v": "Design livré",
    "wp.f4l": "Palette",
    "wp.f4v": "Bleu &amp; blanc",
    "wp.f5l": "Année",
    "wp.h2a": "L'appli<br /><span class=\"o\">parents</span>",
    "wp.copyA":
      "Les parents ouvrent l'appli pour le planning du jour, leurs enfants " +
      "liés, et une seule grande action : Start Pickup. L'écran devient " +
      "alors un suivi en direct : la distance et l'ETA s'actualisent à " +
      "l'approche de l'école.",
    "wp.h2b": "Comment marche<br /><span class=\"o\">le ramassage</span>",
    "wp.copyB":
      "Tout repose sur la géofence : un parent ouvre l'appli, le système " +
      "compare son GPS à la zone autour de l'école et calcule l'ETA. " +
      "À moins de cinq minutes de l'école, l'enseignant reçoit l'alerte. " +
      "Sans pointage manuel, sans appels perdus.",
    "wp.h2c": "Le côté<br /><span class=\"o\">école</span>",
    "wp.copyC":
      "L'admin web pilote toute l'école : élèves, parents, classes, " +
      "plannings et journaux de ramassage. Chaque ramassage devient un " +
      "chiffre — total, durée moyenne, plus rapide, plus lent — pour " +
      "repérer les ramassages les plus lents. Les enseignants reçoivent " +
      "une appli plus légère avec la liste de classe et les alertes.",
    "wp.h2d": "Un seul design<br /><span class=\"o\">system</span>",
    "wp.copyD":
      "Chaque écran, de l'appli parents à l'admin, sort de la même " +
      "bibliothèque de composants : couleurs, échelle typographique, " +
      "espacements, formulaires et cartes définis une fois, réutilisés " +
      "partout.",
    "d3.k1": "Design 3D",
    "d3.k2": "Modélisation",
    "d3.k3": "Formation",
    "d3.m1": "Outils — <b>CATIA &amp; Blender</b>",
    "d3.m2": "Focus — <b>Modélisation hard-surface</b>",
    "d3.lead":
      "Je modélise avec deux outils : CATIA pour les pièces de précision, " +
      "Blender pour tout ce qui doit donner l'impression d'être vivant. " +
      "Voici les pièces auxquelles je reviens toujours.",
    "d3.f1l": "Outils",
    "d3.f1v": "CATIA ● Blender",
    "d3.f2l": "Focus",
    "d3.f2v": "Modélisation hard-surface",
    "d3.f3l": "Aussi",
    "d3.f3v": "Formation des stagiaires aux bases de la 3D",
    "d3.h2a": "CATIA<br /><span class=\"o\">précision</span>",
    "d3.copyA":
      "CATIA, c'est là où j'ai appris la 3D : dimensions exactes, croquis " +
      "propres, des pièces qui pourraient vraiment être fabriquées. Un " +
      "couteau de combat, un drone quadricoptère et une étude de cube " +
      "construite à partir d'un seul profil répété.",
    "d3.h2b": "Blender<br /><span class=\"o\">personnages</span>",
    "d3.copyB":
      "Un petit fantôme, modélisé et façonné sommet par sommet sur Blender. " +
      "Pièce modeste, mais c'est elle qui m'a le plus appris sur la " +
      "topologie — bien plus que n'importe quel tuto.",
    "d3.cap1": "Couteau de combat",
    "d3.cap2": "Étude de cube imbriqué",
    "d3.cap3": "Drone quadricoptère",
    "d3.cap4": "Personnage fantôme",
    "wp.cap1": "Accueil parents",
    "wp.cap2": "Mode ramassage en direct",
    "wp.cap3": "Mes enfants",
    "wp.cap4": "Lier un enfant",
    "wp.cap5": "Zones géofence",
    "wp.cap6": "Journaux de ramassage",
    "wp.cap7": "Compagnon enseignant",
    "wp.cap8": "Planche de composants",

    "rec.k1": "Design UX/UI",
    "rec.k2": "Concept",
    "rec.m1": "Rôle — <b>Designer UX/UI</b>",
    "rec.m2": "Périmètre — <b>Landing &amp; UI produit</b>",
    "rec.m3": "Plateforme — <b>Web + Mobile</b>",
    "rec.lead":
      "Recettes Mondiales est un concept d'application de découverte de " +
      "recettes : des plats goûtés et approuvés venus de 195 pays et " +
      "cultures. J'ai conçu la landing page, du hero au footer.",
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
