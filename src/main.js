var bar = require("./bar");
var add = require("./add");
require("./css/css1.css");
var num1 = 100;
var num2 = 200;
bar.info(num1 + "+" + num2 + "=" + add.add(num1, num2));
