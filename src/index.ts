import { MjmlError, render } from 'mjml-react';
import { convert } from 'html-to-text';
import { configType, componentType } from './common/types';

// auto-import templates
import { emailComponent } from './App';
export default class mailSetup {
	layout: Array<componentType>;
	config: configType;

	constructor({
		config,
		layout,
	}: {
		config: configType;
		layout: Array<componentType>;
	}) {
		this.config = config;
		this.layout = layout;
	}
	generate({
		config,
		sections,
	}: {
		config: configType;
		sections: Array<componentType>;
	}) {
		const { html, errors }: { html: string; errors: Array<MjmlError> } = render(
			emailComponent({
				config: { ...this.config, ...config },
				layout: this.layout,
				sections,
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
