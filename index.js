const { response } = require("express");
const express = require("express");
const app = express();
const path = require("path");

const PORT = 8000;

app.use(express.json());
app.use(express.static(__dirname));
app.set("view engine", "pug");

app.use("/", (req, res) => {
  const arr = [
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
      id: 1,
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

  res.render("main", {
    title: "Мои контакты",
    emailsVisible: true,
    prices: arr,
    phone: "+1234567890",
  });
  //   res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/contact", function (request, response) {
  response.render("contact", {
    title: "Мои контакты",
    emailsVisible: true,
    emails: ["gavgav@mycorp.com", "mioaw@mycorp.com"],
    phone: "+1234567890",
  });
});

app.get("/price", (req, res) => {
  const arr = [
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
      id: 1,
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

  return res.json(arr);
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
