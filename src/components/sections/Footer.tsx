import React from 'react';

import { MjmlSection, MjmlColumn, MjmlImage, MjmlText } from 'mjml-react';
import { configType, componentType } from '../../common/types';

function Element({ config, content }: { config: configType; content: componentType }) {
	return (
    <MjmlSection
			full-width={content.fullWidth ? 'full-width' : undefined}
			backgroundColor={content.backgroundColor || '#fff'}
			borderRadius={content.borderRadius}
			padding={content.padding || '30px 30px'}
			textAlign="left"
		>
			<MjmlColumn width="33.33333333333333%">
				<MjmlImage
					src={content.imageSrc}
					align="left"
					padding="0px"
					width="30px"
				></MjmlImage>
			</MjmlColumn>
			<MjmlColumn width="66.66666666666666%" >
				<MjmlText
					align="right"
					padding="0px"
					font-size={content.fontSize || '16px'}
					color={'#bbb'}
				>
					{content.text}
				</MjmlText>
			</MjmlColumn>
		</MjmlSection>
	);
}

export default Element;
