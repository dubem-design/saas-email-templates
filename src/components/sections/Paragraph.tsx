import React from 'react';

import {
	MjmlWrapper,
	MjmlSection,
	MjmlColumn,
	MjmlImage,
	MjmlText,
	MjmlButton,
} from 'mjml-react';

function Element({ content, config }: { content: any; config: any }) {
	const height = content.height || '8px';
	return (
		<MjmlSection
			backgroundColor={'#fff'}
			padding={content.padding || '30px 0px'}
			textAlign="left"
		>
			<MjmlText
				color={content.color || config.color || '#637381'}
				align={content.align || config.align || 'left'}
				font-size={content.fontSize || '16px'}
			>
				<p
					dangerouslySetInnerHTML={{
						__html: content.text || '',
					}}
				></p>
			</MjmlText>
		</MjmlSection>
	);
}

export default Element;
