import React from 'react';
import sectionsMap from './sections-map';
import { configType } from '../common/types';

function Element({ config, sections }: { config: configType; sections: any }) {
	return sections.map((content: any, index: number) => {
		const { section } = content;
		return React.createElement(sectionsMap[section].component, {
			key: `${section}-${index}`,
			content,
			config,
		});
	});
}

export default Element;
