"use strict";
//module
const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

//routing
const home = require("./src/routes/home");

// const logger = require("./src/config/logger");
// logger.log("info", "Hello");
// logger.info("Hello");
// logger.error("Hello");


// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

// use => 미들웨어를 등록해주는 메서드
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended: true}));

app.use("/", home); 



module.exports = app;