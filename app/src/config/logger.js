const { transports, createLogger, format } = require('winston');
const { combine, timestamp, label, json, simple, colorize, printf } = format;
// const winston =require('winston');

const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level}: ${message}`
});

const printLogFormat = {
  file: combine(
    label({
      label: "백엔드 맛보기",
    }),
    // colorize(),
    timestamp({
      format: "YYYY-MM-DD HH:mm:dd",
    }),
    printFormat,
  ),
  console: combine(
    colorize(),
    simple(),
  )
};

// const logger = createLogger({
//   transports: [ new transports.Console({
//     level: "info",
//     format: printLogFormat,
//   })],
// });

const opts = {
  file: new transports.File({
    filename: "access.log",
    dirname: "./logs",
    level: "info",
    format: printLogFormat.file,
    }),
    console: new transports.Console({
      level: "info",
      format: printLogFormat.console,
    }),
}

const logger = createLogger({
  transports: [opts.file],
});

if(process.env.NODE_ENV !== "produciton") { 
  logger.add(opts.console);
}

module.exports = logger;