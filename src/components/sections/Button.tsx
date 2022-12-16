import React from 'react';

import {
	MjmlWrapper,
	MjmlSection,
	MjmlColumn,
	MjmlImage,
	MjmlText,
	MjmlButton,
} from 'mjml-react';

function Element({ content }: { content: any }) {
	const height = content.height || '8px';
	return (
		<MjmlSection
			backgroundColor={'#fff'}
			padding={content.padding || '30px 0px'}
			textAlign="left"
		>
			<MjmlButton
				background-color={content.backgroundColor || "#5e6ebf"}
				align="left"
				color={content.color || '#ffffff'}
				font-size="17px"
				font-weight="bold"
				href="https://google.com"
			>
				{content.text}
			</MjmlButton>
		</MjmlSection>
	);
}

export default Element;
