const fs = require("fs");
const path = require("path");

const HOME_KEYBOARD = {
  keyboard: [
    [{ text: "«Ansor» supermarketidagi bo'sh ish o'rinlar" }],
    [
      {
        text: "Biz haqimizda 💠",
      },
      {
        text: "Biz bilan bog'lanish 📞",
      },
    ],
  ],
  resize_keyboard: true,
  one_time_keyboard: true,
};
exports.HOME_KEYBOARD = HOME_KEYBOARD;

const cancel = {
  keyboard: [[{ text: "Orqaga" }]],
  resize_keyboard: true,
  one_time_keyboard: true,
};
exports.cancel = cancel;
const yesNo = {
  keyboard: [[{ text: "Ha" }, { text: "Yo'q" }]],
  resize_keyboard: true,
  one_time_keyboard: true,
};

exports.yesNo = yesNo;
// Path: utility/keyboard.js
// compare Category keyboard

const pathUrl = path.join(__dirname, "../data/section.json");
const datas = JSON.parse(fs.readFileSync(pathUrl, "utf-8"));

let arr = [];
for (let i = 0; i < datas.length; i++) {
  if ((i + 1) % 2 == 0 && i != 0) {
    arr.push([{ text: datas[i] }, { text: datas[i - 1] }]);
  }
}

//arr.push([{ text: "Orqaga" }]);
let arrcha = arr.reverse();
const category = {
  keyboard: arrcha,
  resize_keyboard: true,
  one_time_keyboard: true,
};

exports.category = category;

const adminKeyboard = {
  keyboard: [
    [{ text: "«Ansor» supermaketidagi bo'sh ish o'rinlar" }],
    [
      {
        text: "Biz haqimizda 💠",
      },
      {
        text: "Biz bilan bog'lanish 📞",
      },
    ],
    [
      {
        text: "Userlarni ko'rish ",
      },
      {
        text: "Faol userlar",
      },
    ],
    [
      {
        text: "Xabar yuborish",
      },
    ],
  ],
  resize_keyboard: true,
  one_time_keyboard: true,
};

exports.adminKeyboard = adminKeyboard;
