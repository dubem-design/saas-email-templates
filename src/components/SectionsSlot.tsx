import React from 'react';
import sectionsMap from './sections-map';
import { configType } from '../common/types';
import { MjmlWrapper, MjmlColumn, MjmlText } from 'mjml-react';

function Element({ config, template }: { config: configType; template: any }) {
	// return <MjmlText>{JSON.stringify(template, null, 2)}</MjmlText>;
	return template.map((content: any, index: number) => {
		const { section, sections } = content;
		return (
			<MjmlWrapper padding={0}>
				{React.createElement(sectionsMap[section].component, {
					key: `${section}-${index}`,
					content,
					config,
					sections,
				})}
			</MjmlWrapper>
		);
	});
}

export default Element;
