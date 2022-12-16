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
			<MjmlColumn width="100%" padding={'0px'}>
				<MjmlText
					color={content.color || '#333'}
					font-size={content.fontSize || '20px'}
					font-weight="bold"
					padding={'0px'}
				>
					<p
						dangerouslySetInnerHTML={{
							__html: content.text || '',
						}}
					></p>
				</MjmlText>
			</MjmlColumn>
		</MjmlSection>
	);
}

export default Element;
