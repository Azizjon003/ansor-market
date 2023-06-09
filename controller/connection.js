const { newWizart } = require("../index.js");
const { HOME_KEYBOARD } = require("../utility/keyboard.js");

newWizart.hears("Biz bilan bog'lanish 📞", async (ctx) => {
  const id = ctx.update.message.from.id;
  const text =
    "<b>📞Biz bilan bog'lanish</b>" +
    "\n <i>Quyidagi raqam orqali </i>" +
    "\n Tel: <code>+998990530075</code>" +
    "\n Telegram: <code>@HRmanager_23</code>";
  ctx.telegram.sendMessage(id, text, {
    parse_mode: "HTML",
    reply_markup: HOME_KEYBOARD,
  });
});
