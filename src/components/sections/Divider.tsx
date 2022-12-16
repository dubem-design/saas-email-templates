import React from 'react';

import { MjmlSection, MjmlText, MjmlWrapper, MjmlDivider } from 'mjml-react';
import { config } from 'dotenv';

function Element({ config, content }: { config: any; content: any }) {
	return (
		<MjmlSection
			padding={content.padding || '30px'}
			backgroundColor={content.backgroundColor || '#fff'}
		>
			<MjmlDivider
				borderStyle={content.borderStyle || 'dashed'}
				borderWidth={content.borderWidth || '5px'}
				borderColor={content.borderColor || '#000'}
			>
				{content.env}{' '}
			</MjmlDivider>
		</MjmlSection>
	);
}

export default Element;
