var path = require("path");
var fs = require("fs");
require("babel-core/register")(JSON.parse(fs.readFileSync(path.join(__dirname, ".babelrc"), "utf8")));
module.exports = require("./src/node_modules/app");
