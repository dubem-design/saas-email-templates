import { render } from "mjml-react";

import allTemplates from "./templates/index";

exports.template = template;

const template = function (name, config) {
  const { html } = render(allTemplates.productSurvey.generate(config), {
    validationLevel: "soft",
  });

  return html;
};
