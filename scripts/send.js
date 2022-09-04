function sendParams(params) {
  let title = document.getElementById("title").value;
  let price = document.getElementById("price").value;
  let isNew = document.getElementById("new");

  console.log(title, price, isNew);

  const Http = new XMLHttpRequest();
  const url =
    "http://localhost:8000/" +
    params +
    "?" +
    "title=" +
    title +
    "&" +
    "price=" +
    price;
  Http.open("POST", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };
}