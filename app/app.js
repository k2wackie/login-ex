"use strict";
//module
const express = require('express');
const app = express();

const PORT = 3000;
//routing
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(`${__dirname}/src/public`));
app.use("/", home); // use => 미들웨어를 등록해주는 메서드

module.exports = app;