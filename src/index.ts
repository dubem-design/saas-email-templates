import { MjmlError, render } from 'mjml-react';
import { convert } from 'html-to-text';
import { configType, componentType, layoutsType } from './common/types';

// auto-import templates
import { emailComponent } from './App';
export default class mailSetup {
	layout: Array<componentType>;
	config: configType;
	layouts: layoutsType;

	constructor({
		config,
		layouts,
	}: {
		config: configType;
		layouts: layoutsType;
	}) {
		this.config = config;
		this.layouts = layouts;
	}
  generate({
    layout,
		config,
		template,
	}: {
		layout: string;
		config: configType;
		template: Array<componentType>;
	}) {
		const { html, errors }: { html: string; errors: Array<MjmlError> } = render(
			emailComponent({
				config: { ...this.config, ...config },
				layout: this.layouts[layout],
				template,
			}),
			{
				validationLevel: 'soft',
			}
		);

		// if (errors && errors.length > 0) throw errors;
		console.log(errors.length);
		console.log(errors);

		const text: string = convert(html, {
			wordwrap: 130,
		});

		return { html, text };
	}
}
