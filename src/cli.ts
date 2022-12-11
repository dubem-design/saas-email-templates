"use strict";

var { render } = require("mjml-react");

var _email = require("./templates/launch/product-survey");

const template = function (name: any, config: any) {
  const { html } = render(allTemplates.productSurvey.generate(name, config), {
    validationLevel: 'soft',
  });

  return html;
};

console.log(template('product'));
