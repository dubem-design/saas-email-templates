import { render } from 'mjml-react';

import allTemplates from './templates/index';

const template = function (name: any, config: any) {
	const { html } = render(allTemplates.productSurvey.generate(name, config), {
		validationLevel: 'soft',
	});

	return html;
};

exports.template = template;
