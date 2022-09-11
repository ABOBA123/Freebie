const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const expressip = require("express-ip");
app.use(expressip().getIpInfoMiddleware);
const users = require("./files/users.json");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");

const PORT = 8000;
const SECRET_KEY = "test_123";

app.use(express.json());
app.use(express.static(__dirname));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.set("view engine", "pug");

let arr = [
  {
    id: 1,
    title: "DEVELOPMENT",
    change: "Change title",
    Changeprice: "Change price",
    price: "$10",
    list: ["1 Module Javascript", "1 Module Human Resources"],
    isNew: false,
  },
  {
    id: 2,
    title: "IT & SOFTWARE",
    change: "Change title",
    price: "$30",
    Changeprice: "Change price",
    list: [
      "1 Module Javascript",
      "1 Module Human Resources",
      "2 Module Sales Teams",
      "Pack Marketing Skills",
      "5 Module Study Case",
    ],
    isNew: true,
  },
  {
    id: 3,
    title: "BUSINESS",
    change: "Change title",
    price: "$30",
    Changeprice: "Change price",
    list: [
      "1 Module Javascript",
      "1 Module Human Resources",
      "2 Module Sales Teams",
    ],
    isNew: false,
  },
];

let ruarr = [
  {
    id: 1,
    title: "развитие",
    change: "Изменить название",
    price: "600 рублей",
    Changeprice: "Изменить название",
    list: ["1 Модуль Javascript", "1 Модуль Людские ресурсы"],
    isNew: false,
  },
  {
    id: 2,
    title: "ИТ И ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ",
    change: "Изменить название",
    price: "1800рублей",
    Changeprice: "Изменить название",
    list: [
      "1 Модуль Javascript",
      "1 Модуль Человеческих ресурсов",
      "2 Модуля Отделов продаж",
      "Навыки пакетного маркетинга",
      "5 Модульный Учебный кейс",
    ],
    isNew: true,
  },
  {
    id: 3,
    title: "бизнес",
    change: "Изменить название",
    price: "1800рублей",
    Changeprice: "Изменить название",
    list: [
      "1 Модуль Javascript",
      "1 Модуль Человеческих ресурсов",
      "2 Модуля Отделов продаж",
    ],
    isNew: false,
  },
];

app.get("/:id", (req, res) => {
  const { id } = req.params;
  let { lang } = req.query;

  lang = lang || "en";

  let result;

  if (lang === "en") {
    for (let obj of arr) {
      if (obj.id === Number(id)) {
        result = obj;
      }
    }
  } else {
    for (let obj of ruarr) {
      if (obj.id === Number(id)) {
        result = obj;
      }
    }
  }
  if (!result) {
    res.render("Error", {
      title: "Page Not Found - 404",
    });
  }
  if (lang) {
    result.lang = lang;
  }
  res.render("price", {
    obj: result,
  });
});

app.post("/:id", (req, res) => {
  const { id } = req.params;
  const { title, price, isNew, lang } = req.query;

  let result;

  console.log(id, lang);

  if (lang === "ru") {
    for (let obj of ruarr) {
      if (obj.id === Number(id)) {
        obj.title = title;
        obj.price = price;
        // obj.isNew = isNew;
        result = obj;
      }
    }
  } else {
    for (let obj of arr) {
      if (obj.id === Number(id)) {
        obj.title = title;
        obj.price = price;
        // obj.isNew = isNew;
        result = obj;
      }
    }
  }
  if (!result) {
    res.render("Error", {
      title: "Page Not Found - 404",
    });
  }

  return res.json({ id, title, result });
});

app.post("/api/auth/", (req, res) => {
  console.log(req.body);
  let { login, password } = req.query;

  if (login === users.admin.login) {
    if (password === users.admin.password) {
      return res.json(jwt.sign({ login }, SECRET_KEY, { expiresIn: "1h" }));
    }
  }

  return res.json("aa");
});

app.get("/", (req, res) => {
  // console.log(req.ipInfo);

  let { lang } = req.query;

  if (lang === "ru") {
    res.render("main", {
      prices: ruarr,
      title: "Халява",
      lang: "en",
      params: {
        tutorials: "Учебные пособия",
        cases: "Тематические исследования",
        resourses: "Ресурсы",
      },
      firstSlide: {
        improve: "Проверьте свои навыки в практики с кодом",
        create:
          "Создавайте, запускайте и повторяйте новые кампании, не отвлекая команду разработчиков.",
        blackButton: "Начать",
      },
      secondslide: {
        Features: "Наши Функции Специально Для Вас",
        Provide:
          "Мы предоставляем различные специальные особенности для всех вас",
        Best: "Лучшие Преподаватели",
        Flexible: "гибкий",
        ease: "облегчение доступа",
      },
      thirdslide: {
        language: "Язык для создания веб-страниц",
        live: "Начните работать в быстрой, надежной и беспроблемной сети хостинга, которая масштабируется в соответствии с вашим бизнесом одним щелчком мыши и перейдите к кодированию",
        seld: "попробуйте сами",
      },
      fourthslide: {
        Get: "Вставайте и быстро бегите вместе",
        University: "Университет",
        Browse:
          "Просмотрите сотни подробных видеороликов, курсов и руководств, чтобы быстро приступить к работе",
        Showcase: "Витрина",
        inspired:
          "Получите вдохновение от невероятных веб-сайтов, созданных членами сообщества",
        TUTORS: "репетиторы",
        Anthoney: "Энтони Миллс",
      },
      fifthslide: {
        Choose: "Выберите свой пакет",
        provide: "Мы предоставляем различные типы пакетов только для вас",
      },
      sixthslide: {
        FAQs: "Часто задаваемые вопросы",
        I: "01. Могу ли я быстрее найти нужную информацию?",
        Find: "02. Могу ли я быстрее найти нужную информацию?",
        How: "03. Как получить информацию от пользователей?",
        develop: "04. Могу ли я разработать свой веб-сайт без кода?",
        Nulla:
          "Кровати нет, взгляните на позу, сядьте на амета, импердиет сядет на амета сапиена. До каталога установки вашего компьютера и эволюционировал для fermen. Для индикаторов и для жизни любой блокировки, динамических компонентов.",
      },
      besementslide: {
        upgrading:
          "Начните повышать свои навыки бесплатно в течение этого месяца",
        Build:
          "Создайте свой сайт бесплатно и занимайте столько времени, сколько вам нужно",
        Macode: "Макадамия",
      },
    });
  } else {
    res.render("main", {
      prices: arr,
      title: "Freebie",
      lang: "ru",
      params: {
        tutorials: "Tutorials",
        cases: "Case studies",
        resourses: "Resourses",
      },
      firstSlide: {
        improve: "Improve your skills by study width coding",
        create:
          "Create, launch, and iterate on new marketing campaigns without distracting your product team.",
        blackButton: "Get started ",
      },
      secondslide: {
        Features: "Our Features Special For You",
        Provide: "We provide various special features for all of you",
        Best: "Best Tutors",
        Flexible: "Flexible",
        ease: "Easy Access",
      },
      thirdslide: {
        language: "The language for building web pages",
        live: "Go live on a fast, reliable,and hassle-free hosting network that scales with your business with one click and go code!",
        seld: "try it yourself",
      },
      fourthslide: {
        Get: "Get up and running fast together",
        University: "University",
        Browse:
          "Browse hundreds of in-depth videos, courses, and guides to get up and running fast",
        Showcase: "Showcase",
        inspired:
          "Get inspired by the incredible websites built by members of the community",
        TUTORS: "TUTORS",
        Anthoney: "Anthoney Mills",
      },
      fifthslide: {
        Choose: "Choose your package",
        provide: "We provide various types of packages just for you",
      },
      sixthslide: {
        FAQs: "FAQs",
        I: "01. Can I Find the right information faster?",
        Find: "02. Can I Find the right information faster?",
        How: "03. How to get insights from users?",
        develop: "04. Can I develop my website without code?",
        Nulla:
          "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, ac efficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue.",
      },
      besementslide: {
        upgrading: "Start upgrading your skills free for this month",
        Build: "Build your site for free and take as long as you need",
        Macode: "Macode",
      },
    });
  }
});

app.get("/form/admin", (req, res) => {
  res.render("adminForm");
});

app.get("/form/admin/blocks", auth, (req, res) => {
  return res.json("Авторизован");
});
// Создать новый путь для авторизации админа
// Создать новый путь админки с блоками

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
