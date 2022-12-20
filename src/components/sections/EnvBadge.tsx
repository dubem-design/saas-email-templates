import React from 'react';
import { MjmlSection, MjmlText } from 'mjml-react';
import { configType, componentType } from '../../common/types';

function Element({ config, content }: { config: configType; content: any }) {
	return (
		<MjmlSection
			full-width={content.fullWidth ? 'full-width' : undefined}
			backgroundColor={content.backgroundColor || '#fff'}
			borderRadius={content.borderRadius}
			padding={content.padding || '0px 30px'}
			borderLeft="5px solid #ffd500"
		>
			<MjmlText align={content.align || 'center'} color={content.color}>
				{content.text}
			</MjmlText>
		</MjmlSection>
	);
}

export default Element;
