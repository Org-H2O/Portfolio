/* Voice section — flat audio players. One shared Audio element; starting
   a demo pauses the others. Seek by clicking the progress line. */

export function initVoice() {
  const rows = document.querySelectorAll(".demo--player");
  if (!rows.length) return;

  const audio = new Audio();
  let active = null;

  const fmt = (s) => {
    if (!isFinite(s)) return "0:00";
    s = Math.floor(s);
    return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  };

  const rowTime = (row) => row.querySelector(".demo-time");
  const rowFill = (row) => row.querySelector(".demo-track i");

  audio.addEventListener("loadedmetadata", () => {
    if (!active) return;
    rowTime(active).textContent = "0:00 / " + fmt(audio.duration);
  });

  audio.addEventListener("timeupdate", () => {
    if (!active) return;
    const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    rowFill(active).style.width = pct + "%";
    rowTime(active).textContent = fmt(audio.currentTime) + " / " + fmt(audio.duration);
  });

  audio.addEventListener("ended", () => {
    if (!active) return;
    active.classList.remove("is-playing");
    rowFill(active).style.width = "0%";
    rowTime(active).textContent = "0:00 / " + fmt(audio.duration);
  });

  rows.forEach((row) => {
    const btn = row.querySelector(".demo-play");
    const track = row.querySelector(".demo-track");

    btn.addEventListener("click", () => {
      if (active === row && !audio.paused) {
        audio.pause();
        row.classList.remove("is-playing");
        return;
      }
      if (active !== row) {
        if (active) active.classList.remove("is-playing");
        audio.src = row.dataset.src;
        active = row;
      }
      audio.play();
      row.classList.add("is-playing");
    });

    track.addEventListener("click", (e) => {
      if (active !== row || !audio.duration) return;
      const r = track.getBoundingClientRect();
      audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
    });
  });
}
