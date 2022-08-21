const express = require("express");
const app = express();
const path = require("path");

const PORT = 8000;

app.use(express.json());
app.use(express.static(__dirname));
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
    // --- Ошибка 404 страница

    return res.json("Неверный ID");
  }

  res.render("price", {
    obj: result,
  });
});

app.use("/", (req, res) => {
  res.render("main", {
    prices: arr,
  });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
