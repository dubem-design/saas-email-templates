# WIP - Saas Email Templates

Plug ang and play email templates for product people ✌️

I created this package for selfish purposes, feel free to use in your own projects.

[![npm version](https://img.shields.io/npm/v/publish-please.svg)](https://www.npmjs.com/package/publish-please)

## Usage
```js
// maybe in like the boostrap/ startup part of your backend
import mailSetup from '@dubem-design/saas-email-templates';

const mailTemplate = new mailSetup({
  config, // Configure at setup level
	layout, // Template Layout carries sections like header, footer and body
  // items from "sections", goes into the body component
});

const { html, text } = mailTemplate.generate({ 
  config, // override at page level
  sections // Sections for the page
});
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
