const fs = require('fs');
const appRoot = require('app-root-path');

const accessLogStream = fs.createWriteStream(
  // path.join(__dirname, "access.log"),
  `${appRoot}/log/access.log`,
  { flag: "a" }
);

module.exports = accessLogStream;