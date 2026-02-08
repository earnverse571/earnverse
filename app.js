let tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe?.user;

document.getElementById("user").innerText =
  user ? 👤 ${user.first_name} : "Welcome Guest";

let clicks = localStorage.getItem("clicks") || 0;

function limitCheck(){
  if(clicks >= 5){
    document.getElementById("msg").innerText =
      "❌ Daily limit reached!";
    return false;
  }
  clicks++;
  localStorage.setItem("clicks", clicks);
  return true;
}

function openMonetag(){
  if(!limitCheck()) return;
  window.open("https://YOUR_MONETAG_DIRECT_LINK", "_blank");
}

function openAdsterra(){
  if(!limitCheck()) return;
  window.open("https://YOUR_ADSTERRA_DIRECT_LINK", "_blank");
}
