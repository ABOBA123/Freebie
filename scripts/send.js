function sendParams(id) {
  let title = document.getElementById("title").value;
  let price = document.getElementById("price").value;
  let isNew = document.getElementById("new");
  let lang = document.getElementById("lang").innerHTML;

  lang = lang === "ru" ? "en" : "ru";

  const Http = new XMLHttpRequest();
  const url =
    "http://localhost:8000/" +
    id +
    "?" +
    "title=" +
    title +
    "&" +
    "price=" +
    price +
    "&" +
    "lang=" +
    lang;
  Http.open("POST", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);

    // window.location.reload();
  };
}
