// Подключаем библиотеку для работы с Telegram API в переменную
//process.env.NTBA_FIX_319 = 1;
require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
  res.end('')
});
const TelegramBot = require('node-telegram-bot-api');
//const mongoose = require('mongoose')
const config = require('./config')
const helper = require('./helper')
//const database = require('../database.json')
//const user = require('./models/user.model')
//const article = require('./models/article.model')
//const saveUser = require('./messageService')
const schedule = require("node-schedule")



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


var port = process.env.PORT || 5000;


// bot.on('message', msg => {
//   console.log('Workig ...')
// })

bot.on("polling_error", (m) => console.log(m));




// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //
// TODO ОТПРАВКА СООБЩЕНИЯ В 1 ДЕНЬ + 1 УРОК
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


// ! отправка воторого сообщения через 20 c
const time23 = new Date(Date.now() + 20000);
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
  console.log(time23)
  console.log('Второе сообщение после приветствия отправлено успешно!');
});



// ! отправка третьего сообщения через 40 c
const time24 = new Date(Date.now() + 40000);
var j = schedule.scheduleJob(time24, function () {

  bot.sendMessage(chatId, `<b>Правила прохождения марафона:</b>


✔️Выполнять ежедневные практики и задания вовремя!

✔️Не распространять практики и материалы марафона третьим лицам — они предоставлены лично ТЕБЕ для ТВОЕГО расширения и роста!!! 

После прохождения марафона ты сможешь поделиться впечатлениями и результатами с родными и близкими, порекомендовать им наш марафон к самостоятельному прохождению  — это очень даже приветствуется 🤗, но марафон ты проходишь один!

✔️Выполняй задания марафона последовательно и вдумчиво, полностью погружаясь в процесс — выделяй ровно один день на выполнение одного задания именно этого дня — ну нужно никуда спешить, но и не стоит сильно задерживаться — мы помним, что все-таки у нас марафон, практические задания необходимо выполнять каждый день!

Доступ к марафону бессрочный — ты всегда можешь вернуться к заданиям, повторить для себя необходимые практики и медитации. Но сейчас наша задача  — это комплексная перезагрузка сознания, поэтому рекомендуем выполнять задания друг за другом в течение 7 дней, а наш чат тебе в этом поможет! 

Все материалы марафона размещены на сайте space-meditation.com в твоём личном кабинете, там же ты найдёшь все ежедневные задания и практики

Сейчас ты можешь перейти к выполнению первого урока.

Можешь приступить к нему сегодня, либо же начать своё путешествие в мир изобилия и процветания, начиная с завтрашнего дня! 


Желаем тебе приятного прохождения марафона! 😊
`, {
    parse_mode: "HTML",
    disable_web_page_preview: false,
    
  });
  console.log('Третье сообщение после приветствия отправлено успешно!');
});







// /////////////////////////////////////////////////////////// //
// TODO ОТПРАВКА СООБЩЕНИЙ УТРОМ
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
// var url = [
//   'https://woodev.ru/downloads/range-shipping-cost',
//   'https://woodev.ru/downloads/range-shipping-cost',
//   'https://woodev.ru/downloads/range-shipping-cost'
// ];
let i = 0;

//? В какое время присылать сообщения УТРОМ
const time = { hour: 11, minutes: 30}
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
  console.log('Сообщение утром отправлено успешно!');
});

// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //




// /////////////////////////////////////////////////////////// //
// TODO ОТПРАВКА СООБЩЕНИЙ В ОБЕД
// /////////////////////////////////////////////////////////// //
var messages2 = [
// ? 1 сообщение 1 дня в обед
`<b>Как дела, герой?</b>

Удалось ли выполнить все задания? 

Мы ни в коем случае не торопим тебя — ты можешь выполнять задания в удобном для тебя темпе, главное — это глубинная проработка своих установок и своего мышления.

Изменится мышление — изменится жизнь! 

Просмотри все задания урока, а также не забудь скачать наш специальный челлендж и сделать тест в конце дня!

А вечером тебя ждёт кое-что очень приятное 😏🎁🎁🎊🎉👈🏼 до встречи! `,

// ? 2 сообщение 2 дня в обед
`<b>А вот и ещё один СЮРПРИЗ для тебя 🎁🎉😊</b>

Мы решили познакомиться с тобой поближе, и приготовили для тебя нечто интересное…

Это ВИДЕО с нашего нового курса «Финансовый поток изобилия», в котором Элан делится своим опытом прохождения пути к финансовой и изобильной жизни! 🙌🏼🙌🏼🙌🏼

В какой бы точке ты сейчас не находился, ты всегда всё можешь изменить, требуется всего лишь начать делать шаги навстречу своей мечте! К тому же, вместе идти веселее и легче — когда ты видишь, что у других людей получилось обрести своё счастье и гармонию, значит, 100% получится и у тебя! 

Смотри видео и заряжайся мотивацией и вдохновением 😊❤️❤️`,

// ? 3 сообщение 3 дня в обед
`<b>Ещё один ПОДАРОК для тебя 😍</b>

Сегодня мы говорим о финансовом расширении, наверное, ты уже ознакомился с материалами сегодняшнего урока. 

Но мы решили приготовить для тебя ещё одну практику, которая поможет тебе научиться грамотно взаимодействовать с деньгами и привлекать их в свою жизнь, она называется ФИНАНСОВЫЙ ПЛАН 📝

Представь, что Вселенная, Бог готовы дать тебе столько денег, сколько ты захочешь, ты можешь выбрать для себя любую жизнь и достаток и получить это!

Но вот, сколько именно ты хочешь? Сколько денег  требуется тебе для комфортной жизни и удовлетворения всех своих потребностей? 

Ты скажешь: «Миллион рублей»! 

Хорошо! Но знаешь ли ты, зачем он тебе? Куда конкретно ты вложишь эти деньги? Может, купишь себе смартфон, машину, желаемое обучение или съездишь в путешествие —  а что дальше?

Сможешь ли ты грамотно распорядиться этими деньгами, чтобы хватило и на желания, и на финансовую подушку, и на базовые расходы, чтобы снова не уйти в ноль и не растратить все попусту? 

Чтобы ответить на эти вопросы, необходимо составить финансовый план, в котором ты конкретно пропишешь все  статьи расходов: сколько ты готов вкладывать денег в ту или иную сферу жизни и какая сумма дохода тебе необходима, чтобы получить то качество жизни, которое именно ТЫ хочешь иметь! 

Кому-то достаточно 100 000 рублей на счастливую, изобильную жизнь, кому-то 500 000, а кому-то миллион и более. Все зависит от индивидуальных потребностей каждого человека и масштабности его вложений в этот мир. 

<em>Итак, упражнение: 

1.	Составь свой финансовый план на месяц (два месяца, год, как тебе будет удобно считать). Подробно пропиши каждую статью расходов/вложений — это может быть питание, одежда, оплата жилья, посещение кафе/ресторанов, отдых, фонды на обучение, уход за собой и так далее — все свои фонды, подушки безопасности и даже самые мелкие траты.

Важно!!! Писать необходимо не исходя из того количества денег, которое уже у тебя имеется, а исходя из того качества жизни, которое ты хочешь иметь. Используй воображение и финансовое расширение ✨

2.	Посчитай общую сумму, сколько у тебя вышло — это и будет примерно тот доход, который обеспечит тебе твою желаемую реальность 💫

3.	А теперь подумай: </em>

Каким человеком тебе требуется быть, что требуется делать, как требуется думать, чувствовать себя, вести себя, чтобы позволить для себя такое качество жизни?

Может, стоит поменять привычное мировоззрение и начать позволять себе лучшее? Поменять привычки, мысли, начать действовать по-другому.

Вместо Макдональдса сходить в ресторан, позволить себе такси вместо общественного транспорта, купить себе джинсы чуть дороже обычного 🔝

Важно делать это УЖЕ СЕЙЧАС, плавно расширяя своё позволение. Так Вселенная поймёт, что ты действительно готов позволить себе все самое лучшее, и будет давать тебе соответствующие возможности, в том числе и финансовые 😊

Составляй финансовые планы регулярно, анализируя текущий уровень дохода и желаемый, практикуя тем самым финансовое расширение 🙌🏼

И помни: Вселенная любит конкретику! Особенно в цифрах 😉

Во Благо 🤍`,


// ? 4 сообщение 4 дня в обед
`<b>Рубрика ВДОХНОВЕНИЕ </b>

Вчера мы рассказали тебе о нашем новом курсе «Финансовый поток изобилия», представили тебе его описание, формат и те результаты, которые ты можешь получить, если и дальше решишься выйти на путь трансформации и развития ✨

Но всегда самое главное — это реальные истории реальных людей, которые уже прошли этот путь и могут поделиться своими успехами с другими, вдохновив их на изменения ⭐️

Мы собрали для тебя несколько отзывов тех, кто был участником нашей трансформационной программы 👫🏼

Мы так рады и счастливы, что мы помогаем людям создавать реальность их мечты! Надеемся, скоро и ты сможешь рассказать всем свою историю преображений и успеха 😊🙌🏼💫
`,


// ? 5 сообщение 5 дня в обед
`<b>Одно из твоих желаний исполнится ПРЯМО СЕЙЧАС! </b>

Если ты искренне хочешь идти дальше в расширение и богатство и достигать сверх-результатов вместе с нами — мы готовы исполнить твоё желание здесь и сейчас 😊🎉🎉

Ведь ты можешь купить наш курс «Финансовый поток изобилия» СО СКИДКОЙ 50%!*

*скидка распространяется на тарифы «самостоятельное прохождение» и «сопровождение в группе»

💫 При регистрации на сайте мы активировали твой купон, который позволяет тебе получить скидку на прохождение «Финансового потока изобилия»! 💫

Это поистине наполненный курс, мы вложили в него большое количество знаний, практик, материалов и опыта 🙏🏼

Мы вложили в него Любовь и наше заветное желание — чтобы каждый человек на Земле стал счастливым и изобильным! 

Он несёт собой огромную ценность и трансформации, и мы готовы сделать его доступным для большого количества людей 🤍

Поэтому, если ты искренне хочешь жить счастливую изобильную жизнь, — используй эту возможность и наш тебе подарок 😊 

С программой курса ты всегда можешь ознакомиться по ссылке: https://space-meditation.com/product/denezhnoe-izobilie/

Твоё изобилие уже началось!`,


// ? 6 сообщение 6 дня в обед
`<b>РЕЧЬ БОГАТОГО ЧЕЛОВЕКА </b>

В сегодняшнем уроке мы уже говорили о том, что богатые люди даже говорят по-особенному ✨

В основном по делу 😄 

Богатый человек — это прежде всего наполненный человек, и все его действия, мысли и слова наполнены интересом, он знает ценность своего времени и своих ресурсов.

Важно быть наполненным не только финансово, но и внутренне, духовно наполненным, так как теперь в нашем мире эти две сферы прямо взаимосвязаны друг с другом 💫

На курсе и в чате мы не раз повторяли: «чем больше отдаёшь — тем больше получаешь»!



А теперь немного о словах… 

Слова оказывают прямое влияние на нашу жизнь, они, так же как и мысли, создают нашу реальность. 

Каждое слово, каждая фраза несут собой определённый энергетический заряд, сигнал в Космос 🌌

Поэтому богатый человек ВСЕГДА следит за тем, что он говорит, какие слова произносит в мир.

❌ Исключи из своего лексикона все слова и фразы, типа «бедность», «нищета», «это для меня слишком дорого», «я не могу это себе позволить», «у меня нет денег», «у меня не хватает денег», «я не могу» и другие подобные высказывания

Отныне это всё для нас слова-паразиты, которые лишают нас ресурса и запускают деструктивные программы 🙅🏻‍♀️

✨ Используй в своём лексиконе выражения:

💰Богатство, здоровье, изобилие, благополучие;
💰Деньги, приходите;
💰У меня всегда есть деньги, я обеспечен;
💰Я денежный магнит;
💰Я позволяю себе все самое лучшее, роскошь — для меня; 
💰У меня все получается

и так далее.

Это похоже на те аффирмации, которые мы давали тебе на первом уроке марафона.

И помни, богатство есть у того, кто его излучает! 

С Любовью, во Благо 🤍`,

// ? 7 сообщение 7 дня в обед
`7 сообщение`
];
let e = 0;

// ? В какое время присылать сообщения В ОБЕД
const time2 = { hour: 12}
var j = schedule.scheduleJob(time2, function () {
  bot.sendMessage(chatId, messages2[e], {
    parse_mode: "HTML",
    disable_web_page_preview: false,
    // reply_markup: {
    //   inline_keyboard: [
    //     [
    //       {
    //         text: "👉 Перейти на страницу урока 👈",
    //         url: url[e]
    //       }
    //     ]
    //   ]
    // }
  });
  e++;
  console.log('Сообщение в обед отправлено успешно!');
});

// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //




// /////////////////////////////////////////////////////////// //
// TODO ОТПРАВКА СООБЩЕНИЙ ВЕЧЕРОМ
// /////////////////////////////////////////////////////////// //
var messages3 = [
// ? 1 день вечер
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

Удачи тебе, герой! Увидимся завтра на втором дне нашего марафона 😊🎉`,

// ? 2 день вечер
`2 вечер`,

// ? 3 день вечер
`3 вечер`,

// ? 4 день вечер
`<b>Дорогой друг, мы рады, что ты все ещё здесь, с нами, трудишься на благо своего изобилия и процветания 🙌🏼</b>

Мы хотели напомнить тебе, что помимо заданий дня необходимо выполнять те упражнения, которые ты уже получил в прошлых уроках! 

✔️ Регулярно повторяй аффирмации из предыдущих уроков, помни про важность медитаций и практик!

Поначалу мозг может сопротивляться изменениям, может настигнуть лень и апатия — но важно уметь правильно себя мотивировать и не сдаваться!

Не требуется заставлять себя что-то делать — мы не разделяем методов насилия над собой 🙅🏻‍♀️

Необходимо лишь уметь договариваться с самим собой и найти ту внутреннюю мотивацию, которая будет вдохновлять именно тебя ✨

Ты можешь рисовать яркие картины желаемого в голове, смотреть на людей, которые уже живут успешной жизнью, искать картинки в интернете — и от этого заряжаться энергией на действие.

Именно энергия вдохновения и искреннего желания — самая сильная движущая сила на Земле! Наше сердце, горящее мечтой 🕊

Поэтому вдохновляй себя, ищи свои способы мотивации, подбирай свой темп и режим выполнения практик — главное, это ДЕЛАТЬ каждый день.

✔️Пополняй финансовую подушку, выполняй медитации, перечитывай наши чек-листы, программируй себя на успех аффирмациями 

И помни: ты уже богат, потому что родился здесь. Мы лишь помогаем тебе вспомнить об этом 🤍

До встречи на шестом дне марафона! 😌✨`,


// ? 5 день вечер
`<b>Дорогой друг, мы рады, что ты все ещё здесь, с нами, трудишься на благо своего изобилия и процветания 🙌🏼</b>

Мы хотели напомнить тебе, что помимо заданий дня необходимо выполнять те упражнения, которые ты уже получил в прошлых уроках! 

✔️ Регулярно повторяй аффирмации из предыдущих уроков, помни про важность медитаций и практик!

Поначалу мозг может сопротивляться изменениям, может настигнуть лень и апатия — но важно уметь правильно себя мотивировать и не сдаваться!

Не требуется заставлять себя что-то делать — мы не разделяем методов насилия над собой 🙅🏻‍♀️

Необходимо лишь уметь договариваться с самим собой и найти ту внутреннюю мотивацию, которая будет вдохновлять именно тебя ✨

Ты можешь рисовать яркие картины желаемого в голове, смотреть на людей, которые уже живут успешной жизнью, искать картинки в интернете — и от этого заряжаться энергией на действие.

Именно энергия вдохновения и искреннего желания — самая сильная движущая сила на Земле! Наше сердце, горящее мечтой 🕊

Поэтому вдохновляй себя, ищи свои способы мотивации, подбирай свой темп и режим выполнения практик — главное, это ДЕЛАТЬ каждый день.

✔️Пополняй финансовую подушку, выполняй медитации, перечитывай наши чек-листы, программируй себя на успех аффирмациями 

И помни: ты уже богат, потому что родился здесь. Мы лишь помогаем тебе вспомнить об этом 🤍

До встречи на шестом дне марафона! 😌✨`,


// ? 6 день вечер
`<b>Ты большой молодец, герой! </b>

Мы рады тому, что ты так успешно проходишь марафон, каждый день выполняешь задания и практики.

Поверь, за эти шесть дней твоё мышление и восприятие реальности уже изменилось, а отношения с деньгами вышли на новый уровень 🔝

Ты много сделал для своих трансформаций, а значит, получишь от Вселенной в разы больше! 

Завтра нас ждёт заключительный день марафона, и мы приготовили для тебя ещё один БОНУС 🎁🎁🎁

Вселенная щедра, щедры и мы, поэтому снова и снова готовы дарить тебе подарки и изобилие 😊

Но не забывай, что прежде всего всё зависит от тебя. Ты — Творец своей судьбы, а значит, только ты способен создать для себя желаемый достаток, изобилие и благополучие 🤍

✔️ Поэтому не забывай повторять аффирмации, выполнять медитации и практики предыдущих уроков, пополнять финансовую подушку, использовать чек-листы и упражнения, которые мы давали дополнительно в этом чате 🙌🏼


Завтра нас ждёт супер-день! 💫💫👏🏼🤟🏼✨

До встречи 😊👋🏼`,


// ? 7 день вечер
`Вот и подошёл к концу наш <em>Марафон «Золотая лестница изобилия (1 ступень)»</em> 💐💐💐

✔️ За эти 7 дней мы выявили те негативные программы и ограничения, которые мешали нам быть богатыми и изобильными, погрузились в энергию финансового благополучия, улучшили наши отношения с деньгами и вышли на новый уровень мышления и осознанности! 💰

Это было прекрасное путешествие в мир изобилия и процветания 💫

Все материалы марафона остаются с тобой НАВСЕГДА — в любой момент ты можешь вернуться к урокам и выполнить необходимую практику, медитацию, упражнение.

Мы надеемся, что твоя жизнь не останется прежней после нашего совместного труда! 🤍

👉🏼👉🏼И если ты все-таки решился дальше идти в развитие и процветание, хочешь получить РЕАЛЬНОЕ ИЗОБИЛИЕ, прокачать тему финансов и богатства на 100%, выйти из всех ограничений, открыть для себя совершенно новый уровень дохода и благополучия и изменить свою судьбу навсегда — мы ждём тебя на нашем мега-трансформационном курсе «Финансовый поток изобилия» ✨✨🪄💰💰💰🙌🏼🙌🏼

ССЫЛКА НА ТРАНСФОРМАЦИОННЫЙ КУРС: https://space-meditation.com/product/denezhnoe-izobilie/

А также мы всегда рады видеть тебя на других проектах на нашем сайте space-meditation.com 🤗


И на открытом ютуб-канале «Исцеляющие медитации» 🌌💫 https://youtube.com/c/%D0%98%D1%81%D1%86%D0%B5%D0%BB%D1%8F%D1%8E%D1%89%D0%B8%D0%B5%D0%9C%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8

До встречи, герой!  🥳🥳🤍`


];
let d = 0;

// ? В какое время присылать сообщения ВЕЧЕРОМ
const time3 = { hour: 12, minutes: 30 }
var j = schedule.scheduleJob(time3, function () {
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
  console.log('Сообщение вечером отправлено успешно!');
});

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
// function sendArticlesByQuery(chatId, query) {
//   Article.find(query).then(articles => {
//     const html = articles.map((a, i) => {
//       return `${a.name}
//       ${a.Description}`
//     }).join()

//     bot.sendMessage(chatId, html, {
//       parse_mode: 'HTML'
//     })
//   })
// }



// function getClientInfo(message) {
//     return {
//         firstName: message.from.first_name,
//         lastName: message.from.last_name,
//         telegramId: message.hasOwnProperty('chat') ? message.chat.id : message.from.id
//     };
// }
