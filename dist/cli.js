"use strict";

var _mjmlReact = require("mjml-react");

var _email = require("./templates/launch/product-survey");

var _render = (0, _mjmlReact.render)((0, _email.generate)(), {
  validationLevel: "soft"
}),
    html = _render.html;

console.log(html);