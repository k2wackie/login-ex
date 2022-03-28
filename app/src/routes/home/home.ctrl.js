"use strict";

const UserStorage = require("../../model/UserStorage")

const output = {
  home: (req, res) => {
    res.render("home/index");
  },  
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    // console.log(req.body);
    const id = req.body.id,
      psword = req.body.psword;

      // console.log(id, psword);

    // const userStorage = new UserStorage();
    // console.log(UserStorage.getUsers("id", "psword"));
    const users = UserStorage.getUsers("id", "psword");

    const response = {};
    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.psword[idx] === psword) {
        response.sucess = true;
        return res.json(response);
      }
    }

    response.sucess = false;
    response.msg = "로그인에 실패하셨습니다."
    return res.json(response);
  },
}

module.exports = {
  output,
  process,
};

// module.exports = {
//   home,
//   login,
// };

// module.exports = {
//   home: home,
//   login: login,
// };