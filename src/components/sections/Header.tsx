import React from 'react';
import { configType, componentType } from '../../common/types';

import { MjmlSection, MjmlColumn, MjmlImage, MjmlText } from 'mjml-react';

function Element({
	config,
	content,
}: {
	config: configType;
	content: componentType;
}) {
	return (
		<MjmlSection
			full-width={content.fullWidth ? 'full-width' : undefined}
			borderRadius={content.borderRadius || undefined}
			background-url={content.backgroundImage}
			backgroundRepeat={content.backgroundRepeat || 'no-repeat'}
			backgroundPosition={content.backgroundPosition || 'top center'}
			backgroundSize={content.backgroundSize || 'cover'}
			backgroundColor={content.backgroundColor || '#fff'}
			padding={content.padding || '30px 30px'}
			textAlign="left"
		>
			<MjmlColumn>
				<MjmlImage
					src={content.imageSrc}
					align={content.imageAlign || config.align || 'left'}
					alt="Logo"
					padding="0px"
					width="100px"
				></MjmlImage>
			</MjmlColumn>
		</MjmlSection>
	);
}

export default Element;
