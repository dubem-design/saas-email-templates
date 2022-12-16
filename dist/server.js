"use strict";

var _express = _interopRequireDefault(require("express"));
var _index = require("./mock/index");
var _index2 = _interopRequireDefault(require("./index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var port = 3003;
var app = (0, _express["default"])();
var mailTemplate = new _index2["default"](_index.config, _index.layout);
app.get('/', function (req, res) {
  return res.send(mailTemplate.generate(_index.config, _index.sections).html);
});
app.listen(port, function () {
  return console.log("Listening on port http://localhost:".concat(port));
});