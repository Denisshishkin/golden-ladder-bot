// Подключаем библиотеку для работы с Telegram API в переменную
process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
const mongoose = require('mongoose')
const config = require('./config')
const helper = require('./helper')
const database = require('../database.json')
const user = require('./models/user.model')
const article = require('./models/article.model')
const saveUser = require('./messageService')
const schedule = require("node-schedule")



helper.logStart()


// Подключение к БД
mongoose.connect(config.DB_URL, {
  //useMongoClient: true
  useNewUrlParser: true,
  useUnifiedTopology: true
  //useFindAndModify: false
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err))


// Модели
const Article = mongoose.model('Article')
const User = mongoose.model('User')

//database.article.forEach(f => new Article(f).save().catch(e => console.log(e)))


// Логика бота
// ====================================================

const bot = new TelegramBot(config.TOKEN, {
  polling: true
});


// bot.on('message', msg => {
//   console.log('Workig ...')
// })

bot.on("polling_error", (m) => console.log(m));




// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //
// ОТПРАВКА СООБЩЕНИЯ В 1 ДЕНЬ + 1 УРОК
// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //
bot.onText(/\/start/, msg => {

  const chatId = helper.getChatId(msg)

  console.log(msg)


  User.findOne({telegramId: msg.from.id}, function(err, existingUser) {
    if(existingUser == null) { // Если юзера нет в Бд
      const user = new User({
        telegramId: msg.from.id,
        firstName: msg.from.first_name,
        lastName: msg.from.last_name,
        userName: msg.chat.username
      })
      // Сохраняю его в бд
      user.save().then(() => console.log('Юзер сохранен в БД'))

      // Отсылаю приветствие по id в БД
      //sendArticlesByQuery(chatId, [0])
      Article.find({name: "<strong>Приветствую вас, ${msg.from.first_name}! 🎉</strong>"}).then(articles => {
        const html = articles.map((a, i) => {
          return `${a.name}
          ${a.Description}`
        }).join()

        bot.sendMessage(chatId, html, {
          parse_mode: 'HTML'
        })
      })
      console.log('Приветствие отправленно!')


      // /////////////////////////////////////////////////////////// //
      // ОТПРАВКА СООБЩЕНИЙ УТРОМ
      // /////////////////////////////////////////////////////////// //
      var messages = [
        '1',
        '2',
        '3'
      ];
      var url = [
        'https://woodev.ru/downloads/range-shipping-cost',
        'https://woodev.ru/downloads/range-shipping-cost',
        'https://woodev.ru/downloads/range-shipping-cost'
      ];
      let i = 0;

      // В какое время присылать сообщения УТРОМ
      const time = {second: 11}
      var j = schedule.scheduleJob(time, function() {
        bot.sendMessage(chatId, messages[i], {
          parse_mode: "HTML",
          disable_web_page_preview: false,
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "👉 Перейти на страницу урока 👈",
                  url: url[i]
                }
              ]
            ]
          }
        });
        i++;
      });
      console.log('Сообщение утром отправлено успешно!');
      // /////////////////////////////////////////////////////////// //
      // /////////////////////////////////////////////////////////// //




      // /////////////////////////////////////////////////////////// //
      // ОТПРАВКА СООБЩЕНИЙ В ОБЕД
      // /////////////////////////////////////////////////////////// //
      var messages2 = [
        '1-обед',
        '2-обед',
        '3-обед'
      ];
      let e = 0;

      // В какое время присылать сообщения В ОБЕД
      const time2 = {second: 12}
      var j2 = schedule.scheduleJob(time2, function() {
        bot.sendMessage(chatId, messages2[e], {
          parse_mode: "HTML",
          disable_web_page_preview: false,
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "👉 Перейти на страницу урока 👈",
                  url: url[e]
                }
              ]
            ]
          }
        });
        e++;
      });
      console.log('Сообщение в обед отправлено успешно!');
      // /////////////////////////////////////////////////////////// //
      // /////////////////////////////////////////////////////////// //




      // /////////////////////////////////////////////////////////// //
      // ОТПРАВКА СООБЩЕНИЙ ВЕЧЕРОМ
      // /////////////////////////////////////////////////////////// //
      var messages3 = [
        '1-вечер',
        '2-вечер',
        '3-вечер'
      ];
      let d = 0;

      // В какое время присылать сообщения ВЕЧЕРОМ
      const time3 = {second: 13}
      var j3 = schedule.scheduleJob(time3, function() {
        bot.sendMessage(chatId, messages3[d], {
          parse_mode: "HTML",
          disable_web_page_preview: false,
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "👉 Перейти на страницу урока 👈",
                  url: url[d]
                }
              ]
            ]
          }
        });
        d++;
      });
      console.log('Сообщение вечером отправлено успешно!');
      // /////////////////////////////////////////////////////////// //
      // /////////////////////////////////////////////////////////// //



    }
    else
    { // Если он уже есть в Бд
      console.log('Юзер уже есть в БД')

      // Обновляю его данные
      user.updateOne(
        { firstName: msg.from.first_name },
        { lastName: msg.from.last_name },
        { userName: msg.chat.username }
        // { languageCode: msg.from.language_code }
      ).then(() => console.log('Юзер обновлен в БД'))

      // Отправляю сообщение что он уже в системе
      bot.sendMessage(chatId, 'Вы уже в системе');
    }
  })

});
// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //









// Функция отправки сообщений с бд (Articles)
function sendArticlesByQuery(chatId, query) {
  Article.find(query).then(articles => {
    const html = articles.map((a, i) => {
      return `${a.name}
      ${a.Description}`
    }).join()

    bot.sendMessage(chatId, html, {
      parse_mode: 'HTML'
    })
  })
}



// function getClientInfo(message) {
//     return {
//         firstName: message.from.first_name,
//         lastName: message.from.last_name,
//         telegramId: message.hasOwnProperty('chat') ? message.chat.id : message.from.id
//     };
// }
