import React from 'react';
import { configType, componentType } from '../../common/types';

import {
	MjmlWrapper,
	MjmlSection,
	MjmlColumn,
	MjmlImage,
	MjmlText,
} from 'mjml-react';
import SectionsSlot from '../SectionsSlot';
import sectionsMap from '../../components/sections-map';

function Element({
	config,
	content,
	template,
}: {
	config: configType;
	content: componentType;
	template?: componentType[];
}) {
	return (
		<MjmlWrapper border={content.border} padding={0} fullWidth={true}>
			{/* <MjmlText>

      {JSON.stringify(content.sections, null, 2)}
      </MjmlText> */}
			{content.sections.map((content, index) => {
				const { section } = content;
				return React.createElement(sectionsMap[section].component, {
					key: `${content.section}-${index}`,
					content,
					config,
					template, // for the slots
				});
			})}
		</MjmlWrapper>
	);
}

export default Element;
