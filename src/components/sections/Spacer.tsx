import React from 'react';

import {
	MjmlWrapper,
	MjmlSection,
	MjmlColumn,
	MjmlImage,
	MjmlText,
} from 'mjml-react';

function Element({ content }: { content: any }) {
	const height = content.height || '8px';
	return (
		<MjmlSection
			backgroundColor={content.backgroundColor || ''}
			padding={content.padding || '15px 15px'}
		></MjmlSection>
	);
}

export default Element;
