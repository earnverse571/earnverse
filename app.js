let points = parseInt(localStorage.getItem("points") || "0");

const pointEl = document.getElementById("points");
const watchBtn = document.getElementById("watchBtn");

pointEl.innerText = points;

// Telegram init
if (window.Telegram?.WebApp) {
  Telegram.WebApp.ready();
  Telegram.WebApp.expand();
}

let adRunning = false;

watchBtn.addEventListener("click", () => {
  if (adRunning) return;

  if (typeof show_10584434 !== "function") {
    alert("Ad not ready. Try again.");
    return;
  }

  adRunning = true;
  watchBtn.disabled = true;

  // Show Monetag Ad
  show_10584434();

  // When user returns from ad
  window.onfocus = () => {
    if (!adRunning) return;

    adRunning = false;
    window.onfocus = null;

    points += 1;
    localStorage.setItem("points", points);
    pointEl.innerText = points;

    alert("✅ You earned 1 point!");
    watchBtn.disabled = false;
  };
});
