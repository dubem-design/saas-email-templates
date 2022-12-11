import { render } from 'mjml-react';
import { convert } from 'html-to-text';

// auto-import templates
import { emailComponent } from './App';
export default class mailSpinner {
	layout: Array<object>;
	config: object;

	constructor(setup: any) {
		const { config, layout } = setup;
		this.config = config;
		this.layout = layout;
	}
	generate({ config, sections }: any) {
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
