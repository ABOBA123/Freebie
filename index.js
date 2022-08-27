const express = require("express");
const app = express();
const path = require("path");
const { Script } = require("vm");

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
//     let div = document.createElement("div");
//     div.innerHTML=`
//     <div class="header">
//     <div class="black-lap mrgin-left-50"><img id="black-lap" class="png" src="/assets/arrow"
//             alt="/assets/_.png"></div>
//     <p id="tutorials" class="tutorials scrolling">tutorials</p>
//     <p id="Case_studies">Case studies</p>
//     <p id="Resourses">Resourses</p>
// </div>`

    return res.json("Eror 404");
    
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
