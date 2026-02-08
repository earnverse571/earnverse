const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot("BOT_TOKEN",{polling:true});

bot.onText(/\/start(.*)/,(msg,match)=>{
  const ref = match[1];
  bot.sendMessage(msg.chat.id,
👋 Welcome!
💸 Open Mini App & Earn

Referral: ${ref || "none"});
});

bot.onText(/\/balance/,msg=>{
  bot.sendMessage(msg.chat.id,
"Balance Mini App এ দেখাবে");
});
