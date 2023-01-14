const TelegramBot = require("node-telegram-bot-api");
var moment = require("moment");
moment().format();
require("dotenv").config();
const TOKEN = process.env.TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

// bot.on('message', (message)=>{
//   console.log(message);
//   console.log(message.message_id)
//  console.log(message.chat.id)
//   let chatID = message.from.id
//   bot.sendMessage(chatID,'Hello Soumik')
// });

// NEW USER ADD MASSAGE
bot.on("new_chat_members", (msg) => {
  const newID = msg.new_chat_members;
  console.log(newID);
  bot.sendMessage(
    msg.chat.id,
    `Welcome to our group👋🏿, friend! We're so glad you're here. Whether you're joining us for the first time or you're a regular member, we're excited to have you as part of our community. Let's make new connections, and have some fun together!🤝❤️ .... By Soumik and Shubhra ✌️❤️
    `
    
  );
});

// bot.on("left_chat_member", (msg) => {
//   console.log("hii");
// });
// Chat Permission
// let date = moment().get("hour");
// console.log(date);

// if (date == 22 || date == 00 || date <= 17 || date == 21) {
//   bot.can_send_messages = true;
// }

bot.on("polling_error", console.log);

//
// bot.on("message", (msg) => {
//   const chatId = msg.chat.id;
//   let chatID_UserName = msg.from.id;
//   const messageId = msg.message_id;
//   console.log(msg);
//   let msg_lowerCase = msg.text;
//   let Bad_Word = [
//     "Fuck",
//     "Banta",
//     "Fuck you",
//     "Shit",
//     "Piss off",
//     "Dick head",
//     "Asshole",
//     "Bastard",
//     "Bitch",
//     "Damn",
//     "Son of a bitch",
//     "Mother fucker",
//     "Sister fucker",
//     "Gandu",
//     "Banta",
//     "Khanki",
//     "Pay",
//     "Bockachuda",
//     "F",
//     "Swear",
//     'Fuck off',
//   ];
//   for (let i = 0; i <= Bad_Word.length; i++) {
//     if (msg_lowerCase == Bad_Word[i]) {
//       bot.deleteMessage(chatId, messageId);
//       bot.sendMessage(
//         chatId,
//         `Hello ${chatID_UserName.first_name} 😡,Don't use swear words in this group.`
//       );
//     }
//   }
// });
