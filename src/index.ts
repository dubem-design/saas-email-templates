import { render } from 'mjml-react';
import { convert } from 'html-to-text';
import { configType, componentType } from './common/types';

// auto-import templates
import { emailComponent } from './App';
export default class mailSetup {
	layout: Array<componentType>;
	config: configType;

	constructor(config: configType, layout: Array<componentType>) {
		this.config = config;
		this.layout = layout;
	}
	generate(config: configType, sections: Array<componentType>) {
		const { html } = render(
			emailComponent({
				config: { ...this.config, ...config },
				layout: this.layout,
				sections,
			}),
			{
				validationLevel: 'soft',
			}
		);

		const text = convert(html, {
			wordwrap: 130,
		});

		return { html, text };
	}
}
