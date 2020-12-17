"use strict";

var _mjmlReact = require("mjml-react");

var _index = _interopRequireDefault(require("./templates/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var template = function template(name, config) {
  var _render = (0, _mjmlReact.render)(_index["default"].productSurvey.generate(config), {
    validationLevel: "soft"
  }),
      html = _render.html;

  return html;
};

exports.template = template;