const TOKEN = "7134890614:AAEGEZXYV5aQrtlmwONkxe-IwUeJbk-GhgE";
const CHAT_ID = "-1002058569513";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById("success");

document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();

  let newMessage = `<b>Заявка </b>\n`;
  newMessage += `<b>Имя</b> ${this.name.value}\n`;
  newMessage += `<b>Телефон</b> ${this.phone.value}\n`;
  newMessage += `<b>Email</b> ${this.email.value}\n`;
  newMessage += `<b>Текст</b> ${this.messagge.value}\n`;

  axios.post(URI_API, {
    chat_id: CHAT_ID,
    parse_mode: "html",
    text: newMessage,
  });
});
