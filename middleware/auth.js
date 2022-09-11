const jwt = require("jsonwebtoken");
const users = require("../files/users.json");

module.exports = (req, res, next) => {
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
  if (req.query.authorization) {
    let token = jwt.decode(req.query.authorization);
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
