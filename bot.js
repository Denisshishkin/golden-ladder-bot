// Подключаем библиотеку для работы с Telegram API в переменную
const TelegramBot = require("node-telegram-bot-api");
const fs = require("fs");
const schedule = require("node-schedule");

// Устанавливаем токен, который выдавал нам бот
const token = "1924440805:AAEvebAe8Rj3c7oqyyxkw0CVLM4fKJIBqzk";
console.log("Bot has been started...");
bot.on("polling_error", (m) => console.log(m));
// Включить опрос сервера. Бот должен обращаться к серверу Telegram, чтобы получать актуальную информацию
// Подробнее: https://core.telegram.org/bots/api#getupdates
const bot = new TelegramBot(token, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
});


let job;


// Ссылки для каждого урока
var url = [

  'https://space-meditation.com/courses/otkrytie-denezhnogo-potoka-chat-gruppa/lessons/%e2%9e%9c-nazhmite-chtoby-otkryt-modul-1-pereprogrammirovanie-soznaniya-na-izobilie/topic/urok-2-prityazhenie-i-realizacziya-uspeha-ot-livandy-3-zakona-bogatstva/',

  'https://space-meditation.com/courses/otkrytie-denezhnogo-potoka-chat-gruppa/lessons/%e2%9e%9c-nazhmite-chtoby-otkryt-modul-1-pereprogrammirovanie-soznaniya-na-izobilie/topic/urok-3-kak-prityanut-dengi-v-vashu-zhizn/',

  'https://space-meditation.com/courses/otkrytie-denezhnogo-potoka-chat-gruppa/lessons/%e2%9e%9c-nazhmite-chtoby-otkryt-modul-1-pereprogrammirovanie-soznaniya-na-izobilie/topic/urok-4-universalnye-czennosti-zhizni-2/',

  'https://space-meditation.com/courses/otkrytie-denezhnogo-potoka-chat-gruppa/lessons/%e2%9e%9c-nazhmite-chtoby-otkryt-modul-1-pereprogrammirovanie-soznaniya-na-izobilie/topic/urok-5-vsyo-vo-blago-vsyo-k-dengam/',

  'https://space-meditation.com/courses/otkrytie-denezhnogo-potoka-chat-gruppa/lessons/%e2%9e%9c-nazhmite-chtoby-otkryt-modul-1-pereprogrammirovanie-soznaniya-na-izobilie/topic/urok-6-vsya-pravda-o-denezhnoj-sisteme/',

  'https://space-meditation.com/courses/otkrytie-denezhnogo-potoka-chat-gruppa/lessons/%e2%9e%9c-nazhmite-chtoby-otkryt-modul-1-pereprogrammirovanie-soznaniya-na-izobilie/topic/urok-7-vebinar-shagi-k-izobiliyu-i-bogatstvu/',

  'https://space-meditation.com/courses/otkrytie-denezhnogo-potoka-chat-gruppa/lessons/%e2%9e%9c-nazhmite-chtoby-otkryt-modul-1-pereprogrammirovanie-soznaniya-na-izobilie/topic/urok-8-zakreplyaem-1j-modul/',

  'https://space-meditation.com/courses/otkrytie-denezhnogo-potoka-chat-gruppa/lessons/modul-2-izbavlenie-ot-strahov-i-programm-perekryvayushhih-potok-bogatstva/topic/urok-1-znakomstvo-s-soboj/',

  'https://space-meditation.com/courses/otkrytie-denezhnogo-potoka-chat-gruppa/lessons/modul-2-izbavlenie-ot-strahov-i-programm-perekryvayushhih-potok-bogatstva/topic/urok-2-formirovanie-sozidayushhego-okruzheniya/',

  'https://space-meditation.com/courses/otkrytie-denezhnogo-potoka-chat-gruppa/lessons/modul-2-izbavlenie-ot-strahov-i-programm-perekryvayushhih-potok-bogatstva/topic/urok-3-rabota-s-denezhnymi-programmami/',

  'https://space-meditation.com/courses/otkrytie-denezhnogo-potoka-chat-gruppa/lessons/modul-2-izbavlenie-ot-strahov-i-programm-perekryvayushhih-potok-bogatstva/topic/urok-4-vidy-strahov/'
];







// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //
// ОТПРАВКА СООБЩЕНИЯ В 1 ДЕНЬ + 1 УРОК
// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //
bot.onText(/\/start/, msg => {
  const html = `
// <a href="https://space-meditation.com/wp-content/uploads/2021/01/nachalo.jpg">&#8205;</a>
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

А пока что, герой, предлагаем тебе ознакомиться с программой нашего марафона ⬇️`;

  bot.sendMessage(msg.chat.id, html, {
    parse_mode: "HTML"
  });

  //time
  // setInterval(function() {
  //   var hour = new Date().getHours();
  //   if (hour >= 10 && hour < 11) {
  //     bot.sendMessage(msg.chat.id, "время");
  //     console.log("time");
  //   }
  // }, 1000 * 60);

  setTimeout(() => {
    const html = `
📗 <i>Модуль - 1  |  Урок - 1</i>

<b><ins>Мой путь развития</ins></b>


<i>Примерное время на выполнение:</i>

🎥 видео – 20 минут;
📝 задания – 30 минут;


В первом уроке вас ждет видео, в котором Я расскажу вам о своем пути развития. После просмотра первого видео вам нужно будет ответить на следующие вопросы:
Задание:
1. Зачем я пришел(а) на этот курс? 🤔
2. Какова моя цель? 🎯
3. Что я хочу получить во время и после курса? 💵

В течение дня вы сможете поработать со своей ленью по методике <b>"Принцип 1 минуты"</b>, ознакомиться с которой можно в уроке первого дня.
И не забудьте выполнить с утра очень важное задание урока – написать распорядок своего дня. Подробная методика написания содержится на странице курса.`;
    bot.sendMessage(msg.chat.id, html, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Перейти на страницу урока",
              url:
              "https://space-meditation.com/courses/otkrytie-denezhnogo-potoka-chat-gruppa/lessons/➜-nazhmite-chtoby-otkryt-modul-1-pereprogrammirovanie-soznaniya-na-izobilie/topic/urok-1-moj-put-razvitiya"
            }
          ]
        ]
      }
    });
  }, 0); // Задержка в с перед показом сообщения
});
// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //




// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //
// ОТПРАВКА СООБЩЕНИЙ УТРОМ
// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //

bot.onText(/\/start/, message => {
var messages = [

// МОДУЛЬ 1 Урок 2 УТРО
`📗 <i>Модуль - 1  |  Урок - 2</i>

<b><ins>Притяжение и реализация успеха - 3 закона богатства!</ins></b>


<i>Примерное время на выполнение:</i>

🎥 видео – 45 минут;
📝 задания – 30 минут;
🧘‍♂️ медитация – 30 минут;


Сегодняшнего вы узнаете какие денежные программы преобладают в вашем подсознании.
Обратите внимание на то насколько в вашей жизни сочетаются между собой следующие три фактора: 
1. Насколько вы любите свою деятельность. ❤️
2. Насколько вы уверены в том, что к вам придут большие суммы денег. 💵
3. Насколько ваша деятельность востребована обществом. 🤔

А так же в течение дня обращайте внимание на качества бедности, которые есть внутри вас. 
Обо всем этом вы сможете узнать из сегодняшнего урока.
<a href="https://images.pexels.com/photos/271168/pexels-photo-271168.jpeg?cs=srgb&dl=pexels-pixabay-271168.jpg&fm=jpg">&#8205;</a>
`,


// МОДУЛЬ 1 Урок 3 УТРО
`📗 <i>Модуль - 1  |  Урок - 3</i>

<b><ins>Как притянуть деньги в вашу жизнь</ins></b>


<i>Примерное время на выполнение:</i>

🎥 видео – 17 минут;
📝 задания – 1 час;
🎧 аудиосистема – 7 минут;


В видео сегодняшнего дня мы рассмотрим деньги с трех сторон - с точки зрения энергии, программ и материи.
На наши отношения с деньгами влияют денежные установки. Чтобы вам их сегодня найти нужно:
1. Включить осознанность. Необходимо обращать свое внимание на поведение, которое вам присуще в отношении денег.  ✅
2. Вспомнить события из своей жизни. Можно в медитации 🧘‍♂️ попытаться осознать в каких ситуациях в жизни вы ощущали напряжение относительно денег.
3. Записать в блокноте: Я никогда не буду богатым, потому что…🤨

После осознания денежных установок необходимо их перепрограммировать. Для этого запишите карандашом негативное утверждение относительно денег, а затем со словами  “я освобождаюсь от этого убеждения” сотрите его. После этого необходимо ручкой записать новое убеждение.`,



// МОДУЛЬ 1 Урок 4 УТРО
`📗 <i>Модуль - 1  |  Урок - 4</i>

<b><ins>Универсальные ценности жизни.</ins></b>


<i>Примерное время на выполнение:</i>

🎥 видео – 25 минут;
📝 задания – 30 минут;
🧘‍♂️ медитация – 30 минут;


В видео сегодняшнего дня вы узнаете об универсальных законах вселенной, которые действуют для всех одинаково, независимо от знания о них.
Вас ждут задания:
1. Колесо баланса вашей жизни ☸
2. Испытывать благодарность на протяжении целого дня, чтобы с вами не происходило 🙌`,



// МОДУЛЬ 1 Урок 5 УТРО
`📗 <i>Модуль - 1  |  Урок - 5</i>

<b><ins>Всё во благо, всё к деньгам.</ins></b>


<i>Примерное время на выполнение:</i>

🎥 видео – 2 минуты;
📝 задания – на протяжении всего дня;
🧘‍ медитация – 30 минут;


В этом уроке я поделюсь с вами очень простым лайфхаком. Что бы ни произошло в вашей жизни, любое событие, от мелкого до крупного. Вы узнаете в сегодняшнем уроке.

<b>Настройтесь выполнять эту практику целый день!</b>🙏`,



// МОДУЛЬ 1 Урок 6 УТРО
`📗 <i>Модуль - 1  |  Урок - 6</i>

<b><ins>Вся правда о денежной системе</ins></b>


<i>Примерное время на выполнение:</i>

🎥 видео – 41 минута;
📝 задания – на протяжении всего дня;
🧘‍ медитация – 30 минут;


В фильме, который представлен в этом уроке, вы познакомитесь с историей денег, а также с основными функциями, которые они выполняют.`,



// МОДУЛЬ 1 Урок 7 УТРО
`📗 <i>Модуль - 1  |  Урок - 7</i>

<b><ins>Признайтесь себе в своих слабостях.</ins></b>


<i>Примерное время на выполнение:</i>

🎥 видео – 30 минута;
📝 задания – на протяжении всего дня;
🧘‍ медитация – 30 минут;


При помощи этого урока вы сможете ответить на вопросы – почему вы не можете быть богатым? С какой энергией вы отдаете и получаете деньги? Это небольшое наблюдение, очень сильно изменит ваше отношение к энергии денег.`,



// МОДУЛЬ 1 Урок 8 УТРО
`📗 <i>Модуль - 1  |  Урок - 8</i>

<b><ins>Закрепляем первый модуль</ins></b>


Доброе утро богатый человек!
Готов к сегодняшнему дню?
Как твой настрой? 💪

<i>Примерное время на выполнение:</i>

🎥 видео – 33 минута;
📝 задания – на протяжении всего дня;
🧘‍ медитация – 30 минут;


При помощи этого урока вы сможете понять почему деньги это благо и возможность развиваться.
Жду тебя в нашей академии ☺️`,



// МОДУЛЬ 2 Урок 1 УТРО
`📙 <i>Модуль - 2  |  Урок - 1</i>

<b><ins>Знакомство с собой</ins></b>


<i>Примерное время на выполнение:</i>

🎥 видео – 13 минута;
📝 задания – 20 минут;


Сегодня вы сделаете интересную практику, которая поможет вам собрать знания о себе. 
Поделите лист бумаги на две части. В одном столбце мы будем писать положительные качества, а в другом отрицательные.
Для более подробных инструкций переходите по ссылке..`,



// МОДУЛЬ 2 Урок 2 УТРО
`📙 <i>Модуль - 2  |  Урок - 2</i>

<b><ins>Формирование созидающего окружения.</ins></b>


<i>Примерное время на выполнение:</i>

🎥 видео – 3 минута;
📝 задания – 40 минут;


Для того чтобы выяснить, к какой категории относятся окружающие вас люди, необходимо всех выписать по четырем большим группам:
1. родственники 👨‍👩‍👧‍👦
2. друзья 💃
3. знакомые 🚶‍♂️
4. коллеги 👨‍💻

Затем каждого человека из каждой группы необходимо рассмотреть с точки зрения позитивных и негативных аспектов, которые они привносят в нашу жизнь.
Для более подробных инструкций переходите по ссылке..`,



// МОДУЛЬ 2 Урок 3 УТРО
`📙 <i>Модуль - 2  |  Урок - 3</i>

<b><ins>Работа с денежными программами.</ins></b>


<i>Примерное время на выполнение:</i>

🎥 видео – 23 минута;
📝 задания – 1 час;
🎧 аудиосистема - 24 минуты;


Могу ли я без этого обойтись? 🤔
Для более подробных информации переходите по ссылке..`,



// МОДУЛЬ 2 Урок 4 УТРО
`📙 <i>Модуль - 2  |  Урок - 4</i>

<b><ins>Виды страхов.</ins></b>


Доброе утро🎉 Новый день ☀️Новые эмоции 😄 Новая энергия ⚡️


<i>Примерное время на выполнение:</i>

🎥 видео – 12 минут;
📝 задания – в течение дня;

В этом видео мы рассмотрим основные виды страхов.
Сегодня необходимо разобраться почему вы испытываете страх? Откуда в вас была загружена эта программа? Когда вы думаете о негативном исходе, вы создаёте сильный избыточный потенциал и сливаете в это событие очень много энергии.
Для более подробных инструкций переходите по ссылке..`
];


let i = 0;
let t = 0;

// В какое время присылать сообщения УТРОМ
const time = {second: 11}

var j = schedule.scheduleJob(time, function() {
bot.sendMessage(message.chat.id, messages[i], {
  parse_mode: "HTML",
  disable_web_page_preview: false,
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "Перейти на страницу урока",
          url: url[i]
        }
      ]
    ]
  }
});
i++;
});

console.log('Сообщение утром отправлено успешно!');

});
// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //




// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //
//  ОТПРАВКА СООБЩЕНИЯ В ОБЕД
// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //

bot.onText(/\/start/, message => {
// Сообщения на каждый день
var messages = [

// Модуль 1 Урок 2 ОБЕД
`Уверен, что Вам уже удалось отследить несколько вредоносных денежных программ.

<b>Сейчас выполните пожалуйста следующее задание:</b>

Попробуйте представить и записать на бумаге как вы себя чувствуете, когда вы становитесь богатыми.💰 Параллельно начинайте делать то, что вам нравится и заявляйте о себе миру. Поначалу может быть сложно, так как программы имеют очень плотную энергию, но со временем сложности проходят и вы войдете в фазу изобилия и богатства. 💵
Ваша задача заключается в том, чтобы привлекать деньги в свою жизнь через направление внимания и энергии.


<b>Дополнительные задания:</b>

Важно мышление, как вы мыслите в отношении денег?
Задавайте себе правильные вопросы и честно отвечайте на них, например:

1. Каким человеком придется стать, чтобы преуспеть в деле 🦸‍♂️👩‍🍳👩‍💻👩‍🚀👨‍🎨🧙‍♂️👸🧞‍♂️
2. Какие навыки придется освоить, какие — подтянуть 🏄‍♂️⛹‍♀️🏂
3. Как оптимизировать свою деятельность 🕹
4. Есть ли готовность трудиться ради благополучия своей семьи день и ночь, если потребуется 👨‍👩‍👧
5. Какая сумма после зарплаты будет вложена под процент, отдана на благотворительность, а какая — просто отложится 🤔

Подробнее мы разбираем на странице курса второго урока`,


// Модуль 1 Урок 3 ОБЕД
`Настало время избавиться от негативных программ!👊


<b>Задание:</b>

Следующее упражнение поможет вам избавиться от некоторых страхов в отношении денег. Возьмите блокнот и запишите в нём: самое худшее в деньгах для меня это…🤔
Если вы чувствуете какой-то страх, то вам нужно пройти в него, 😞 не прячась. Прожив этот страх, вы сможете от него избавиться. 😃


<ins>Дополнительные задания:</ins>

Самая эффективная методика избавления от негативных программ называется «Прощение себя», она чистит не просто вашу психику и тело, но и энергетическую оболочку.
В уроке этого дня вы найдете способы избавления от своих страхов.`,


// Модуль 1 Урок 4 ОБЕД
`Как ваша практика благодарности? 🙏

Она сопровождает вас сегодня весь день, или вы уже забыли о ней? 😱
Хочу напомнить вам об удивительной силе аффирмаций, с которой вы познакомились в сегодняшнем видео в уроке. 🎥
Повторяйте аффирмации в течение всего дня, чтобы это вошло в привычку и стало частью вашей жизни.😁👍`,


// Модуль 1 Урок 5 ОБЕД
`Всё во благо, всё к деньгам, и это напоминание тоже. Возьмите ручку✒️ и бумагу📑 и напишите пожалуйста, какие события до обеда случились вам на благо и к деньгам.💰`,


// Модуль 1 Урок 6 ОБЕД
`Сегодня хочу напомнить вам о практике благодарности 🙏 об аффирмациях которые вы уже внедрили в свою жизнь, о любви к себе и миру.

Так же хочу напомнить вам об позитивном мышлении.
Это самый мощный ключ к новой и счастливой жизни.`,


// Модуль 1 Урок 7 ОБЕД
`Приветсыую!

Как настроение? Из сегодняшнего урока вы узнали о методике Волшебная шкатулка.
Используйте эту методику в течении дня.
А так же практику благодарности и волшебные аффирмации 🙏`,


// Модуль 1 Урок 8 ОБЕД
`Надеемся, что практика благодарности и аффирмации сопровождают вас в течение всего дня.
Также напоминаю, что необходимо написать в свой блокнот «Что для вас деньги?»`,


// Модуль 2 Урок 1 ОБЕД
`Углубимся в практику сегодняшнего дня.
Когда вы писали о том, что плохого о вас думает, например, мама, то вы возможно ощущали это как состояние, где-то в вашем теле. Если вы нашли такие зажимы или блоки в своём теле, то вам поможет практика из сегодняшнего урока.`,


// Модуль 2 Урок 2 ОБЕД
`Углубимся в практику сегодняшнего дня.
Сегодня, когда взаимодействуете с людьми, следите за своими ощущениями и эмоциями. 😉Дополняйте свой список по необходимости.`,


// Модуль 2 Урок 3 ОБЕД
`Утром вы поработали со старыми программами и страхами.
Также очень часто встречается установка о том, что деньги - это зло. Необходимо проанализировать откуда взялась эта программа и зачем она вам? 😑
Когда вы осознаете в себе любую негативную программу, необходимо проговорить, что вы отпускаете эту программу, и представить, как она вас покидает.

После этого нужно заменить её на другое, позитивное утверждение. Например, “Я создаю деньги легко” 🤑
Подробности в уроке`,


// Модуль 2 Урок 4 ОБЕД
`Утром вы разобрались с основными страхами. Существуют также фоновые страхи. Это страхи, которые в целом определяют течение вашей жизни. Попробуйте определить какой у вас есть фоновый страх? Кто заложил в вас эту программу страха? 😑 Кто же это? 🤔

Для того, чтобы полностью избавиться от страхов, необходимо постоянно находиться в состоянии любви, потому что они имеют различные вибрационные частоты. 
Подробности в сегодняшнем уроке`

];


let i = 0;
let t = 0;

// В какое время присылать сообщения в ОБЕД
const time = {second: 16}

var j = schedule.scheduleJob(time, function() {
bot.sendMessage(message.chat.id, messages[i], {
  parse_mode: "HTML",
  disable_web_page_preview: false,
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "Перейти на страницу урока",
          url: url[i]
        }
      ]
    ]
  }
});
i++;
});

console.log('Сообщение в обед отправлено успешно!');

});
// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //




// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //
//  ОТПРАВКА СООБЩЕНИЯ В ВЕЧЕРОМ
// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //

bot.onText(/\/start/, message => {
// Сообщения на каждый день
var messages = [

// Модуль 1 Урок 2 ВЕЧЕР
`Добрый вечер! День был очень плодотворным!

Как вам история с красной скрепкой, которая удивила весь мир в уроке курса.
И перед сном переходите к медитации «Золотой ангел». 🧘‍♂️
Помните о том, что правильное отношение, готовность действовать, вера в успех, открытость новому — вот слагаемые, что позволят вам увеличить основной, дополнительный и прочие доходы в несколько раз.💲
Перед сном постоянно повторяйте аффирмацию – Мои доходы постоянно растут!🔝🔝🔝

Поздравляю вас с завершением второго дня и выполнением всех заданий! Завтра вас ждет потрясающий урок о том, как притянуть деньги в вашу жизнь.
Высыпайтесь как следует, вам нужен большой ресурс для преобразования своей жизни!`,


// Модуль 1 Урок 3 ВЕЧЕР
`Добрый вечер! Вы сегодня просто молодец! 🔥🔥🔥

Поздравляю вас с завершением третьего дня и выполнением всех заданий! Завтра вас ждет потрясающий урок об универсальных ценностях жизни. Перед сном постоянно повторяйте аффирмацию – Мое тело свободно от блоков, а мое сознание от негативных программ!
Послушайте пожалуйста аудиосистему в этом уроке`,


// Модуль 1 Урок 4 ВЕЧЕР
`Послушайте медитацию 🧘‍♂️ «Открытие денежного потока» перед сном которая была  дана вам в сегодняшнем уроке.
Также повторяйте аффирмацию – Я люблю и благодарю свой мир! 🙏❤️🌍
Поздравляю вас с завершением четвертого дня и выполнением всех заданий! Завтра вас ждет удивительная практика – все во благо, все к деньгам. 💵💵💵
Отдохните как следует, ваша жизнь является отражением вашей энергии!`,


// Модуль 1 Урок 5 ВЕЧЕР
`Послушайте медитацию открытие денежного потока перед сном.😴
Также повторяйте любимую аффирмацию – Все во благо, все к деньгам! 💵💵💵
Поздравляю вас с завершением пятого дня и выполнением всех заданий! Завтра вас ждет уникальный фильм о денежной системе.
Отдохните как следует, ваш сон приносит вам благо и деньги!`,


// Модуль 1 Урок 6 ВЕЧЕР
`Послушайте медитацию открытие денежного потока перед сном. 🧘‍♂️
Также повторяйте аффирмацию – Деньги созданы для добра!
Поздравляю вас с завершением шестого дня и выполнением всех заданий!

Отдохните как следует, ваш сон 😴 – ваше богатство! 💰`,


// Модуль 1 Урок 7 ВЕЧЕР
`Поздравляю вас с завершением седьмого дня и выполнением всех заданий!

Если вы еще не прослушали медитацию на предназначение из сегодняшнего урока, включите ее перед сном. Вам обязательно присниться что нибудь волшебное!
Также повторяйте аффирмацию – Я люблю деньги!💰Но проговаривайте ее с любовью, с чувством благодарности. Пусть это будут не просто слова! Они должны быть наполнены вашей энергией изобилия.
Завтра вас ждет закрепление полученных знаний по первому модулю.

Высыпайтесь и стройте вашу вселенную!💪`,


// Модуль 1 Урок 8 ВЕЧЕР
`Поздравляю вас с завершением восьмого дня и выполнением всех заданий!

Послушайте медитацию из урока. 🧘‍♂️
Также повторяйте аффирмацию – Деньги приносят радость! Поверьте, когда их у вас будет много, вы сможете ощутить этот поток всем сердцем и всей душой.
Завтра вас ждут второй модуль и новые открытия.

Высыпайтесь и будьте готовы к новым свершениям!`,


// Модуль 2 Урок 1 ВЕЧЕР
`Поздравляю вас с завершением восьмого дня и выполнением всех заданий!

Послушайте медитацию из урока. 🧘‍♂️
Также повторяйте аффирмацию – Деньги приносят радость! Поверьте, когда их у вас будет много, вы сможете ощутить этот поток всем сердцем и всей душой.
Завтра вас ждут второй модуль и новые открытия.

Высыпайтесь и будьте готовы к новым свершениям!`,


// Модуль 2 Урок 2 ВЕЧЕР
`Добрый вечер!

Вы успешно справляетесь с прохождением второго модуля и выполнением всех заданий!
Послушайте сегодня вечером любую понравившуюся медитацию из курса.
Также повторяйте аффирмацию – Мое окружение меня наполняет!
Завтра вас ждет третий урок второго модуля по работе с денежными программами.

Желаем вам хорошего отдыха! Всё только начинается 🤩`,


// Модуль 2 Урок 3 ВЕЧЕР
`Так держать!💪

Сегодня у вас был серьезный шаг в новую реальность!
В <b>медитации «Родовые программы»</b> вы проработали свои родовые установки и сценарии.
Послушайте сегодня вечером также нашу аудиосистему из этого урока «Как создавать новые мысли».

Также повторяйте аффирмацию – Я создаю деньги легко! 💵
Вы успешно справляетесь с прохождением второго модуля и выполнением всех заданий!🎉
Завтра вас ждут четвертый урок второго модуля по видам страхов.
Спокойной ночи, завтра будет прекрасный день!`,


// Модуль 2 Урок 4 ВЕЧЕР
`Выражаю вам свою искреннею благодарность за то, что вы уже зашли так далеко!
Вы поставили себе цель изменить свою жизнь и с каждым днем ваша реальность меняется. Новыми действиями, новым мышлением вы создаете будущее о котором всегда мечтали.

А теперь поблагодарите сами себя потому, что вы успешно справляетесь с прохождением второго модуля и выполнением всех заданий!

Послушайте сегодня вечером также нашу медитацию 🧘‍♂️ «Открытие денежного потока» из нашего курса.

Также повторяйте аффирмацию – Я свободен (свободна) от страхов!
Завтра вас ждет пятый урок второго модуля - Источники разрушающих страхов.

Спокойной ночи, завтра нужно быть в ресурсе! Попробуйсте уснуть сегодня с чувством любви, с расширением своего потока изобилия. Ощущайте себя уже богатым человеком.`,

];


let i = 0;
let t = 0;

// В какое время присылать сообщения ВЕЧЕРОМ
const time = {second: 21}

var j = schedule.scheduleJob(time, function() {
bot.sendMessage(message.chat.id, messages[i], {
  parse_mode: "HTML",
  disable_web_page_preview: false,
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "Перейти на страницу урока",
          url: url[i]
        }
      ]
    ]
  }
});
i++;
});

console.log('Сообщение вечером отправлено успешно!');

});
// /////////////////////////////////////////////////////////// //
// /////////////////////////////////////////////////////////// //



// Конфиг клавиатуры
// const keyboard = [
//   [
//     {
//       text: 'Хочу кота', // текст на кнопке
//       callback_data: 'moreKeks' // данные для обработчика событий
//     }
//   ],
//   [
//     {
//       text: 'Хочу песика',
//       callback_data: 'morePes'
//     }
//   ],
//   [
//     {
//       text: 'Хочу проходить курсы',
//       url: 'https://htmlacademy.ru/courses' //внешняя ссылка
//     }
//   ]
// ];
//
//
// // обработчик события присылания нам любого сообщения
// bot.on('message', (msg) => {
//   console.log(msg)
//   const chatId = msg.chat.id; //получаем идентификатор диалога, чтобы отвечать именно тому пользователю, который нам что-то прислал
//
//   // отправляем сообщение
//   bot.sendMessage(chatId, 'Привет, '+ msg.from.first_name +'! чего хочешь?', { // прикрутим клаву
//         reply_markup: {
//             inline_keyboard: keyboard
//         }
//     });
// });
//
// // обработчик событий нажатий на клавиатуру
// bot.on('callback_query', (query) => {
//     const chatId = query.message.chat.id;
//
//     let img = '';
//
//     if (query.data === 'moreKeks') { // если кот
//         img = 'keks.png';
//     }
//
//     if (query.data === 'morePes') { // если пёс
//         img = 'pes.png';
//     }
//
//     if (img) {
//         bot.sendPhoto(chatId, img, { // прикрутим клаву
//             reply_markup: {
//                 inline_keyboard: keyboard
//             }
//         });
//     } else {
//         bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', { // прикрутим клаву
//             reply_markup: {
//                 inline_keyboard: keyboard
//             }
//         });
//     }
//   });
