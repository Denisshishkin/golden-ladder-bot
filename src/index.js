// Подключаем библиотеку для работы с Telegram API в переменную
process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');
//const mongoose = require('mongoose')
const config = require('./config')
const helper = require('./helper')
//const database = require('../database.json')
//const user = require('./models/user.model')
//const article = require('./models/article.model')
//const saveUser = require('./messageService')
const schedule = require("node-schedule")

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);

});


helper.logStart()


// Подключение к БД
// mongoose.connect(config.DB_URL, {
//   //useMongoClient: true
//   useNewUrlParser: true,
//   useUnifiedTopology: true
//   //useFindAndModify: false
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log(err))


// Модели
//const Article = mongoose.model('Article')
//const User = mongoose.model('User')

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


  //User.findOne({ telegramId: msg.from.id }, function (err, existingUser) {
    //if (existingUser == null) { // Если юзера нет в Бд
      // const user = new User({
      //   telegramId: msg.from.id,
      //   firstName: msg.from.first_name,
      //   lastName: msg.from.last_name,
      //   userName: msg.chat.username
      // })
      // Сохраняю его в бд
      //user.save().then(() => console.log('Юзер сохранен в БД'))

      // Отсылаю приветствие по id в БД
      //sendArticlesByQuery(chatId, [0])
      //Article.find({name: "<strong>Приветствую вас, ${msg.from.first_name}! 🎉</strong>"}).then(articles => {
      const html = `
<strong>Приветствуем тебя, герой! 🎉</strong>

Почему именно герой? Потому что только отважные, смелые люди решаются на перемены в своей жизни, и этот марафон определённо станет толчком к твоему развитию, росту и благополучию! 

7-ми дневный марафон «Золотая лестница изобилия (1 ступень)» был создан для того, чтобы перепрошить твоё денежное сознание, помочь тебе очиститься от старых, ограничивающих установок и убеждений по поводу денег, расширить твоё финансовое сознание и выйти на новый уровень изобилия и процветания! 

Звучит круто, верно? 😄

Мы приготовили для тебя 7 дней практических заданий и упражнений для изменения твоего мышления и отношений с деньгами. Твоя же задача заключается в том, чтобы ДЕЛАТЬ — выполнять эти упражнения каждый день в течение 7 дней, потому что только мышление и конкретные действия дают результаты! 

Данные практики и упражнения не являются сложными, они требуют всего лишь час твоего времени и концентрации в день — не так уж и много для новой, полной изобилия и радости жизни, верно? 😊

А чтобы помочь тебе на пути трансформации, мы создали этот чат-поддержку, в котором мы будем:

📝Ежедневно напоминать тебе о заданиях на день;
✔️Разъяснять ключевые моменты прохождения марафона;
🤍 Давать тебе мотивацию и рекомендации по выполнению упражнений и поддерживать тебя на пути к изобилию и процветанию🙏🏼🌷!

Ведь вместе идти всегда веселее и приятнее! 🤗

Поверь, за эти 7 дней твои отношения с деньгами точно изменятся в лучшую сторону! 💫💸💸

А если ты захочешь пойти ещё дальше в развитие и расширение и получить ещё больший результат в сфере финансов и изобилия, обрести финансовую свободу,  навсегда распрощаться с негативными установками и убеждениями по поводу денег и начать жить жизнью полной творчества и любви — совсем скоро мы пригласим тебя на наш полный курс-перезагрузку «Финансовый поток изобилия», но об этом чуть позже 🤫

А пока что, герой, в следущем сообщении мы ознакомим тебя с программой нашего марафона`;

      bot.sendMessage(chatId, html, {
        parse_mode: 'HTML',
      })
      //})
      console.log('Приветствие отправленно!')


// ! отправка воторого сообщения через 30 c
const time23 = new Date(Date.now() + 30000);
var j = schedule.scheduleJob(time23, function () {

  bot.sendMessage(chatId, `<b>Программа марафона:</b>


  <em>⭐️ Урок 1. Анализ своей денежной стратегии</em>
  
  На этом уроке ты определишь свою денежную стратегию, а также выявишь причину своего финансового поведения. При помощи заданий ты сможешь сделать первые шаги по изменению финансовой стратегии и укреплению позитивного финансового поведения.
  
  <em>⭐️ Урок 2. Выгрузка установок</em>
  
  В течение второго дня ты поработаешь со своими денежными установками, попробуешь разобраться, что значат для тебя деньги, а также сможешь написать  объяснительную самому себе, почему ты до сих пор не богат.
  
  <em>⭐️ Урок 3. Финансовое расширение</em>
  
  В течение третьего дня ты сможешь осознать свою финансовую емкость и определить финансовые границы. При помощи глубокой медитации мы сможем понять причины твоих внутренних финансовых ограничений и выйти за их пределы. Также ты сможешь осознать, что реализация твоих мечтаний не всегда связана с деньгами.
  
  <em>⭐️ Урок 4. Очищение своей реальности</em>
  
  Практики четвёртого дня помогут тебе оценить состояние своего материального мира с точки зрения окружения, предметов и обстановки. С помощью наших заданий ты сможешь сделать своё окружение максимально гармоничным и комфортным для себя. Также ты познакомишься с уникальной практикой «Всё во благо, всё к деньгам».
  
  <em>⭐️ Урок 5. Позволение себе</em>
  
  На пятом дне марафона ты сможешь осознать, где сам себя ограничиваешь. Ты позволишь себе то, чего никогда не позволял, и увидишь, что материальное богатство не является чем-то недостижимым и эфемерным. Ты войдёшь в состояние обеспеченного человека и насладишься роскошью качественных предметов и вещей
  
  <em>⭐️ Урок 6. Воплощение своих желаний</em>
  
  В этот день мы выполним практику «Хочу — не хочу, могу — не могу», которая поможет тебе структурировать твои желания и выявить имеющиеся ограничения. Ты начнёшь работу над созданием позитивных мыслеформ и формулированием собственных желаний.
  
  <em>⭐️ Урок 7. Я богатый человек</em>
  
  Более подробно об этом уроке ты узнаешь на седьмом дне нашего марафона! 💫 
  
  
  
  На марафоне тебя ждут: 
  
  •7 дней трансформационной работы над собой;
  •Аффирмации для перепрограммирования мозга;
  •2 медитации на привлечение денежного изобилия; 
  •7 практик, меняющих сознание;
  •14 эффективных заданий;
  •Необходимый материал для внедрения новых практик в твою жизнь;
  •Ежедневная поддержка в этом чате; 
  •Бонус в конце марафона! 🎁`, {
    parse_mode: "HTML",
    disable_web_page_preview: false,
    
  });

});
console.log('Второе сообщение после приветствия отправлено успешно!');






// /////////////////////////////////////////////////////////// //
// ОТПРАВКА СООБЩЕНИЙ УТРОМ
// /////////////////////////////////////////////////////////// //
var messages = [

// ? 1 день ообщение утром 
`Приветствуем тебя, герой! 

Вот и наступил первый день нашего марафона — первый день тотальной перепрошивки сознания 🧘🏼💸

Сегодня нас ждёт анализ финансовой стратегии 📝

Знаешь ли ты, что именно твоя стратегия задаёт курс всем твоим отношениям с богатством и финансами? 

Все материалы сегодняшнего урока ты можешь найти у себя в личном кабинете на сайте space-meditation.com.

Очень интересно узнать, какой финансовой стратегии  придерживаешься именно ты!

Также не забудь скачать себе наш специальный финансовый челлендж, поверь, он тебе очень пригодится на пути к богатству и изобилию! 

В конце тебя ждёт тест для лучшего понимания и усвоения материала.

Удачи тебе! 🤍🤍`,


// ? 2 день сообщение утром
`Доброе утро, герой! 

Приветствуем тебя на втором дне марафона «Золотая лестница изобилия (1 ступень)»!

Сегодня нас ждёт работа с нашим мышлением — мы будем выявлять негативные установки по поводу денег и выгружать их.

Задания и практики второго дня ты можешь найти на сайте space-meditation.com в своём личном кабинете.

Выполняй задания не спеша, но и не затягивай с ними — лучше проходить все задания друг за другом каждый день. 

После выполнения заданий выполни тест на закрепление материала 📝

Удачи тебе! ✨`,

// ? 3 день сообщение утром
`Доброе утро☕️

Сегодня мы будем финансово расширяться 😁💰🙌🏼

Тебя ждёт медитация, в которой ты будешь практиковать финансовое расширение и выявлять те блоки и программы, которые мешают тебе чувствовать себя достойным богатства и изобилия.

Также ты определишь ту сумму, которая позволит тебе жить в соответсвии со своими желаниями и потребностями.

Эти и другие задания ждут тебя в твоём личном кабинете на сайте space-meditation.com.

Хорошего дня 😊💃🏻`,


// ? 4 день сообщение утром
`Ура-ура 🎊🎉🎊🎉 Сегодня нас ждёт тотальная чистка! 

Наступил 4 день нашего марафона, а это значит, что пришло время очистить своё внутреннее и внешнее пространство 💫

Когда мы умеем отпускать все старое и отжившее, будь то старые вещи, фото в галерее смартфона, мысли, убеждения или ценности — мы освобождаем место для новых возможностей в нашей жизни! 

Регулярные чистки своего пространства помогают нам освободиться от тяжести прошлого и смело вступить в желаемое будущее 🌅🙌🏼

Этому и посвящены наши сегодняшние практики и задания, которые ты можешь найти на сайте space-meditation.com, как всегда в своём личном кабинете 😉

Пускай изобилие льётся в твоей жизни рекой🌈🌈`,



// ? 5 день сообщение утром
`Готов ли ты стать богатым человеком ПРЯМО СЕЙЧАС? 

Наступил пятый день нашего марафона, а это значит, что мы будем позволять себе ВСЁ, что мы хотим 😃💰💰💰

Мечтал ли ты когда-нибудь о яхте? Собственном домике на берегу моря? Хочешь ли ты носить одежду топовых люксовых брендов, останавливаться в лучших отелях и посещать самые дорогие рестораны? 

Сегодня ты можешь позволить себе любую роскошь! 

Вообще, у Вселенной не существует термина «роскошь» — она готова дать нам все, что мы пожелаем, нам необходимо только разрешить себе принимать эти дары 🙌🏼 

Но! Часто именно с этим у нас и возникают проблемы — с позволением и чувством того, что «я достоин получать блага от Вселенной просто по праву рождения». 💫 Именно это нам и предстоит изменить.

✔️ Мы будем выявлять, какие программы мешают нашим самым смелым желаниям проявляться в нашей реальности. 

Ты сможешь почувствовать себя настоящим королем, окружить себя самыми красивыми, роскошными вещами 👑 Главное, чтобы все твои желания были искренними и шли из Сердца 🤍

Потому что у каждого из нас своё понимание роскоши — кому-то достаточно уютного домика на природе с большими окнами, тёплым камином и близкими людьми рядом 😊✨, а кому-то очень хочется иметь огромный бизнес, частный самолёт и Rolls-Royce 😎💰

Желания должны быть именно твоими, а не навязанными кем-то извне☝🏼☝🏼

👉🏼 Выполни все упражнения и практики сегодняшнего дня!


‼️ Не забывай регулярно выполнять практику «Всё к деньгам» из предыдущего урока !! 

Мы встретимся с тобой вечером и подведём итоги сегодняшнего дня.

Удачи тебе! 😊`,



// ? 6 сообщение устром
`Сегодня мы исполним ВСЕ ТВОИ ЖЕЛАНИЯ и мечты! 💫💫 

Приветствуем тебя, герой! 

Как часто ты чего-то желаешь? Как часто твои желания становятся реальностью? 

Многие люди в нашем мире разучились мечтать и верить в то, что наши мечты могут стать былью☹️

А ведь именно наши мечты, наши желания, те картины, образы и ощущения, которые мы формируем внутри себя каждый день, и создают нашу желаемую реальность 🙌🏼

На самом деле получать желаемое — это очень просто. Нужно лишь фокусироваться на том, чего ты хочешь, и оно быстро воплотится в жизнь.

Однако, существует ряд факторов, которые мешают нам воплощать наши мечты быстро и легко 🤔

Что это за факторы? Как научиться правильно желать и мечтать? Об этом в нашем сегодняшнем уроке №6, который вы найдёте в своём личном кабинете на сайте space-meditation.com.

Также тебя ждёт специальная медитация на формирование новой реальности 🌸

!! Не забывай выполнять практики и медитации из предыдущих дней марафона !!

До скорой встречи!`,



// ? 7 сообщение утром
`Итак, что же  требуется, чтобы стать БОГАТЫМ человеком? 💰💰💰

Такова тема заключительного дня марафона «Золотая лестница изобилия (1 ступень)».

А ведь и правда, богатым человеком не рождаются — им становятся.

Богатство — это определённое состояние человека, которое включает целый комплекс действий, мыслей и чувств. Можно сказать, что это образ жизни.

Долгое время мы изучали эту тему и выяснили, каких именно постулатов придерживаются богатые люди, что позволяет им быть такими, и сегодня хотим поделиться с тобой некоторыми из них:

1)	Богатым человеком может быть каждый, в это надо раз и навсегда поверить.
2)	Богатый человек знает, что Вселенная изобильна и всегда даст ему столько денег, сколько ему потребуется.
3)	Богатый человек умеет сохранять и преумножать свой капитал, уважительно относится к деньгам, ведёт финансовый учёт и стратегию, имеет фонд-подушку.
4)	Богатый человек много инвестирует в себя, в своё обучение и развитие, каждую «трату» рассматривает как вклад в своё благополучие.
5)	Богатый человек позволяет себе все самое лучшее и качественное, легко отпускает деньги, он не жмот.
6)	Богатый человек многое даёт миру — поэтому многое получает.
7)	Богатый человек использует различные практики и дополнительные фишки, такие как медитации, аффирмации, очищение программ, волшебные ритуалы и техники, чтобы расширяться и становиться ещё изобильнее! 🪄 

И, конечно же, богатые люди учились быть богатыми 💰🙌🏼 вкладывая своё время, средства и усилия в свой успех 💫

Поэтому не забудь сделать все задания и практики заключительного дня марафона, которые мы приготовили для тебя сегодня 📝 (как всегда в твоём личном кабинете на сайте space-meditation.com).

А после выполнения теста к уроку №7 на сайте тебе откроется еще один специальный БОНУС 🎁  

Увидимся 😊✨✨`
      ];
      var url = [
        'https://woodev.ru/downloads/range-shipping-cost',
        'https://woodev.ru/downloads/range-shipping-cost',
        'https://woodev.ru/downloads/range-shipping-cost'
      ];
      let i = 0;

      // В какое время присылать сообщения УТРОМ
      const time = { hour: 9, minute: 0}
      var j = schedule.scheduleJob(time, function () {
        bot.sendMessage(chatId, messages[i], {
          parse_mode: "HTML",
          disable_web_page_preview: false,
          // reply_markup: {
          //   inline_keyboard: [
          //     [
          //       {
          //         text: "👉 Перейти на страницу урока 👈",
          //         url: url[i]
          //       }
          //     ]
          //   ]
          // }
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
`<b>Правила прохождения марафона: </b>

✔️Выполнять ежедневные практики и задания вовремя!

✔️Не распространять практики и материалы марафона третьим лицам — они предоставлены лично ТЕБЕ для ТВОЕГО расширения и роста!!! 

После прохождения марафона ты сможешь поделиться впечатлениями и результатами с родными и близкими, порекомендовать им наш марафон к самостоятельному прохождению  — это очень даже приветствуется 🤗, но марафон ты проходишь один!

✔️Выполняй задания марафона последовательно и вдумчиво, полностью погружаясь в процесс — выделяй ровно один день на выполнение одного задания именно этого дня — ну нужно никуда спешить, но и не стоит сильно задерживаться — мы помним, что все-таки у нас марафон, практические задания необходимо выполнять каждый день!

Доступ к марафону бессрочный — ты всегда можешь вернуться к заданиям, повторить для себя необходимые практики и медитации. Но сейчас наша задача  — это комплексная перезагрузка сознания, поэтому рекомендуем выполнять задания друг за другом в течение 7 дней, а наш чат тебе в этом поможет! 

Все материалы марафона размещены на сайте space-meditation.com в твоём личном кабинете, там же ты найдёшь все ежедневные задания и практики

Сейчас ты можешь перейти к выполнению первого урока.

Можешь приступить к нему сегодня, либо же начать своё путешествие в мир изобилия и процветания, начиная с завтрашнего дня! 


Желаем тебе приятного прохождения марафона! 😊
`,

// ? 2 сообщение 2 дня в обед
`Как дела, герой? 

Удалось ли выполнить все задания? 

Мы ни в коем случае не торопим тебя — ты можешь выполнять задания в удобном для тебя темпе, главное — это глубинная проработка своих установок и своего мышления.

Изменится мышление — изменится жизнь! 

Просмотри все задания урока, а также не забудь скачать наш специальный челлендж и сделать тест в конце дня!

А вечером тебя ждёт кое-что очень приятное 😏🎁🎁🎊🎉👈🏼 до встречи! 
`,
      ];
      let e = 0;

      // В какое время присылать сообщения В ОБЕД
      const time2 = { hour:13, minute: 0 }
      var j2 = schedule.scheduleJob(time2, function () {
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
        '',
`Добрый вечер, герой! 

Вот и подошёл к концу первый день нашего марафона, посвящённого денежному изобилию 💸

Сегодня мы узнали, какие финансовые стратегии существуют и какая из них ведёт к успеху📈, а какие являются провальными 👎🏼

Надеемся, ты уже сформировал свою собственную копилку, куда будешь постоянно откладывать 10% от своего дохода! 💰

Ведь богатый человек — это не тот, кто много тратит, а тот, кто умеет сберегать финансы и грамотно выстраивать свою финансовую стратегию 💪🏼

А ещё, в первый же день марафона мы приготовили для тебя ПОДАРОК 😍🎁🎁🎁 Чек-лист «Деньги Нового Времени»💸💸💸💸💸

Мир стремительно меняется, меняется и наше восприятие денег и взаимодействие с ними.

В этом чек-листе мы собрали для тебя основные принципы денег Нового Времени, изучив которые ты сможешь уже сейчас изменить своё мышление и отношение к деньгам, и даже увеличить свой финансовый поток! 

*здесь отдельным сообщением присылаем чек-лист*

*следующее сообщение* 

Удачи тебе, герой! Увидимся завтра на втором дне нашего марафона 😊🎉`
      ];
      let d = 0;

      // В какое время присылать сообщения ВЕЧЕРОМ
      const time3 = { shour: 20, minute: 0 }
      var j3 = schedule.scheduleJob(time3, function () {
        bot.sendMessage(chatId, messages3[d], {
          parse_mode: "HTML",
          disable_web_page_preview: false,
          // reply_markup: {
          //   inline_keyboard: [
          //     [
          //       {
          //         text: "👉 Перейти на страницу урока 👈",
          //         url: url[d]
          //       }
          //     ]
          //   ]
          // }
        });
        d++;
      });
      console.log('Сообщение вечером отправлено успешно!');
      // /////////////////////////////////////////////////////////// //
      // /////////////////////////////////////////////////////////// //



    //}
    // else { // Если он уже есть в Бд
    //   console.log('Юзер уже есть в БД')

    //   // Обновляю его данные
    //   user.updateOne(
    //     { firstName: msg.from.first_name },
    //     { lastName: msg.from.last_name },
    //     { userName: msg.chat.username }
    //     // { languageCode: msg.from.language_code }
    //   ).then(() => console.log('Юзер обновлен в БД'))

    //   // Отправляю сообщение что он уже в системе
    //   bot.sendMessage(chatId, 'Вы уже в системе');
    // }
  //})

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
