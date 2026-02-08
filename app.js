const tg = window.Telegram.WebApp;
tg.ready();

let points = localStorage.getItem("earnverse_points")
  ? parseInt(localStorage.getItem("earnverse_points"))
  : 0;

const pointsEl = document.getElementById("points");
const watchBtn = document.getElementById("watchAdBtn");

pointsEl.innerText = points;

watchBtn.addEventListener("click", () => {
  try {
    show_10584434();

    setTimeout(() => {
      points += 10;
      localStorage.setItem("earnverse_points", points);
      pointsEl.innerText = points;
    }, 3000);

  } catch (e) {
    alert("Ad not available. Try again later.");
  }
});
