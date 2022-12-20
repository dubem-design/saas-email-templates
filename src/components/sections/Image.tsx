import React from 'react';
import { MjmlSection, MjmlColumn, MjmlImage } from 'mjml-react';
import { configType } from '../../common/types';

function Element({ config, content }: { config: configType; content: any }) {
	const height = content.height || '8px';
	return (
    <MjmlSection
			full-width={content.fullWidth}
			backgroundColor={content.backgroundColor}
			borderRadius={content.borderRadius || '0px'}
			padding={content.padding || '30px'}
			textAlign={content.align || 'left'}
		>
			<MjmlColumn width="100%">
				<MjmlImage
					src={content.image}
					align="left"
					alt={content.imageAlt || 'image'}
					padding="0px"
				></MjmlImage>
			</MjmlColumn>
		</MjmlSection>
	);
}

export default Element;
