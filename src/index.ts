import { render } from 'mjml-react';

// auto-import templates
const normalizedPath = require("path").join(__dirname, "templates");
let templateList: { [key: string]: any } = {}
require("fs").readdirSync(normalizedPath).forEach(function (file: any) {
  const name = file.split('.tsx')[0]
  templateList[name] = require("./templates/" + file);
});

// Template fetcher function, accepts name and config
export const template = function (name: string, data: object, config: any): string {
  if (!templateList[name]) throw 'Template not found'
  const { html } = render(templateList[name].generate(data, config), {
    validationLevel: 'soft',
  });

  return html;
};

