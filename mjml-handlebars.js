const fs = require("fs");
const handlebars = require("handlebars");

module.exports = {
  compileHtml: (
    templateName,
    replacements,
    conditionalRenders,
    templateConfig
  ) => {
    const html = fs.readFileSync(
      `${__dirname}/dist/${templateName}.html`,
      "utf-8"
    );
    const template = handlebars.compile(html);

    conditionalRenders = { showButton: true };

    const htmlToSend = template({
      ...replacements,
      ...conditionalRenders,
      ...templateConfig,
    });
    htmlToSend.replace("\\n", "");

    return htmlToSend;
  },
};
