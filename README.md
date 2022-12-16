# Saas Email Templates

Plug ang and play email templates for product people ✌️

[![npm version](https://img.shields.io/npm/v/publish-please.svg)](https://www.npmjs.com/package/publish-please)

## Usage

```js
// maybe in like the boostrap/ startup part of your backend
import mailSetup from '@dubem-design/saas-email-templates';

const mailTemplate = new mailSetup({
	layout, // Template Layout options
});

const { html, text } = mailTemplate.generate({ config, sections });
// page configuration options &
// definition of page sections
```

## See Layout, Config & Sections Options
### Layout
### Config
### Sections

## Resources

- [Figma] - Best UI design platform
- [MJML] - Great for email templates!
- [Gulp] - Compile MJML files
- [Esign] - E signature maker

## License

MIT

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[figma]: https://www.figma.com/
[mjml]: https://github.com/mjmlio/mjml
[gulp]: http://gulpjs.com
[esign]: http://www.esignaturemaker.com/live-digital-signature/
[pldb]: https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md
[plgh]: https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md
[plgd]: https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md
[plod]: https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md
[plme]: https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md
[plga]: https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md
