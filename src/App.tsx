import React from 'react';
import { Mjml, MjmlBody, MjmlWrapper } from 'mjml-react';
import { configType, componentType } from './common/types';

import Head from './components/layout/Head';
import sectionsMap from './components/sections-map';

export const emailComponent = ({
	config,
	layout,
	sections,
}: {
	config: configType;
	layout: Array<componentType>;
	sections: Array<componentType>;
}) => {
	const inject = layout.map((content: any, index: number) => {
		return React.createElement(sectionsMap[content.section].component, {
			key: `${content.section}-${index}`,
			content,
			config,
			sections, // for the slots
		});
	});
	return (
		<Mjml>
			<Head config={config} />
			<MjmlBody backgroundColor={config.backgroundColor || '#f8f8f8'}>
				{inject}
				{/* <MjmlWrapper padding={'50px 0px'}>
					<MjmlWrapper
						backgroundColor={'#444'}
						border={'4px solid black'}
						borderBottom={'8px solid black'}
						borderRight={'8px solid black'}
						borderRadius={'50px'}
					>
						{inject}
					</MjmlWrapper>
				</MjmlWrapper> */}
			</MjmlBody>
		</Mjml>
	);
};
