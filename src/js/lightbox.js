/* Lightbox: click any case-study image for a full-screen preview.
   Click anywhere or press Esc to close; page scroll freezes while open. */

export function initLightbox({ lenis }) {
  const box = document.getElementById("lightbox");
  if (!box) return;

  const img = box.querySelector(".lightbox-img");
  const cap = box.querySelector(".lightbox-cap");
  let open = false;

  const show = (figure) => {
    const source = figure.querySelector(".shot-img");
    if (!source) return;
    img.src = source.src;
    img.alt = source.alt;
    const title = figure.querySelector(".shot-cap span:nth-child(2)");
    cap.textContent = title ? title.textContent : "";
    box.classList.add("is-open");
    open = true;
    document.body.style.overflow = "hidden";
    if (lenis) lenis.stop();
  };

  const hide = () => {
    if (!open) return;
    box.classList.remove("is-open");
    open = false;
    document.body.style.overflow = "";
    if (lenis) lenis.start();
  };

  document.addEventListener("click", (e) => {
    const shot = e.target.closest(".shot");
    if (shot && !open) show(shot);
    else hide();
  });

  addEventListener("keydown", (e) => {
    if (e.key === "Escape") hide();
  });
}
