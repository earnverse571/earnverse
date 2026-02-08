const tg = Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe?.user;
document.getElementById("user").innerText =
  user ? "👤 " + user.first_name : "Guest";

const uid = user?.id || "guest";
const api = "https://YOUR_WORKER_URL";

let bal = Number(localStorage.getItem("bal")) || 0;
document.getElementById("bal").innerText = bal.toFixed(2);

document.getElementById("ref").value =
  https://t.me/YOUR_BOT?start=${uid};

async function earn(type){
  const r = await fetch(${api}?uid=${uid}&type=${type});
  const d = await r.json();
  if(!d.ok){
    document.getElementById("msg").innerText = d.msg;
    return;
  }
  window.open(d.link,"_blank");
  setTimeout(()=>{
    bal += d.reward;
    localStorage.setItem("bal",bal);
    document.getElementById("bal").innerText = bal.toFixed(2);
  },10000);
}
