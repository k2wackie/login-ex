"use strict";

const User = require("../../model/user");
const UserStorage = require("../../model/UserStorage")

const output = {
  home: (req, res) => {
    res.render("home/index");
  },  
  login: (req, res) => {
    res.render("home/login");
  },
  register: (req, res) => {
    res.render("home/register");
  },
};

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    // console.log(response);
    return res.json(response);
  },
}

module.exports = {
  output,
  process,
};