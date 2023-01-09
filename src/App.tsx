import React from 'react';
import { Mjml, MjmlBody, MjmlWrapper } from 'mjml-react';
import { configType, componentType } from './common/types';

import Head from './components/layout/Head';
import sectionsMap from './components/sections-map';

export const emailComponent = ({
	config,
	layout,
	template,
}: {
	config: configType;
	layout: Array<componentType>;
	template: Array<componentType>;
}) => {
	const inject = layout.map((content: any, index: number) => {
		return React.createElement(sectionsMap[content.section].component, {
			key: `${content.section}-${index}`,
			content,
			config,
			template, // for the slots
		});
	});
	return (
		<Mjml>
			<Head config={config} />
			<MjmlBody backgroundColor={config.backgroundColor || '#f8f8f8'}>
				{inject}
	
			
			</MjmlBody>
		</Mjml>
	);
};
