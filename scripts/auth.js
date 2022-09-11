const button = document.getElementById("button");

button.onclick = () => {
  let login = document.getElementById("login").value;
  let password = document.getElementById("password").value;

  const Http = new XMLHttpRequest();
  const url = "http://localhost:8000/" + "api/auth";

  Http.open("POST", url, JSON.stringify(login, password));
  Http.send();

  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);

    // window.location.reload();
  };
};
