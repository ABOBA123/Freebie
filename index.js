const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const expressip = require("express-ip");
app.use(expressip().getIpInfoMiddleware);

const PORT = 8000;

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
    price: "$10",
    list: ["1 Module Javascript", "1 Module Human Resources"],
    isNew: false,
  },
  {
    id: 2,
    title: "IT & SOFTWARE",
    price: "$30",
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
    price: "$30",
    list: [
      "1 Module Javascript",
      "1 Module Human Resources",
      "2 Module Sales Teams",
    ],
    isNew: false,
  },
];

app.get("/:id", (req, res) => {
  const { id } = req.params;

  let result;

  for (let obj of arr) {
    if (obj.id === Number(id)) {
      result = obj;
    }
  }
  if (!result) {
    res.render("Error", {
      title: "Page Not Found - 404",
    });
  }
  res.render("price", {
    obj: result,
  });
});

app.post("/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.query;

  let result;

  for (let obj of arr) {
    if (obj.id === Number(id)) {
      obj.title = title;
      result = obj;
    }
  }
  if (!result) {
    res.render("Error", {
      title: "Page Not Found - 404",
    });
  }

  return res.json({ id, title, result });
});

app.get("/", (req, res) => {
  // console.log(req.ipInfo);

  let { lang } = req.query;

  if (lang === "ru") {
    res.render("main", {
      prices: arr,
      title: "Халява",
      lang: "en",
      params: {
        tutorials: "Обучение",
        cases: "Примеры работ",
        resourses: "Источники",
      },
      firstSlide: {
        improve: "Проверьте свои навыки в практики с кодом",
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
      },
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
