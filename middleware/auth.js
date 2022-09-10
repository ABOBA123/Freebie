const jwt = require("jsonwebtoken");
const users = require("../files/users.json");

module.exports = (req, res, next) => {
  console.log(req.headers);
  if (req.headers.authorization) {
    let token = jwt.decode(req.headers.authorization);
    console.log(token);
    if (token) {
      if (token.login === users.admin.login) {
        next();
      } else {
        return res.json("Неверный токен");
      }
    }
  }
  return res.json("У Вас нет доступа к странице");
};
