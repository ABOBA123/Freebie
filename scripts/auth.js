const button = document.getElementById("button");

button.onclick = () => {
  let login = document.getElementById("login").value;
  let password = document.getElementById("password").value;

  const Http = new XMLHttpRequest();
  const url =
    "http://localhost:8000/api/auth" +
    "?login=" +
    login +
    "&password=" +
    password;

  Http.open("POST", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    let token = Http.response;

    document.location.replace(
      "http://localhost:8000/form/admin/blocks" +
        "?authorization=" +
        JSON.parse(token)
    );

    // window.location.reload();
  };
};
