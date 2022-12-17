import React from 'react';

import { MjmlButton } from 'mjml-react';

function Element({ config, content }: { config: any; content: any }) {
	return (
		<MjmlButton
			background-color={
				content.buttonBackgroundColor || config.primaryColor || '#5e6ebf'
			}
			align={content.buttonAlign || config.align || 'left'}
			color={content.buttonColor || '#ffffff'}
			href={content.buttonHref || '#'}
			inner-padding={content.buttonPadding || '10px 25px'}
			padding="0px"
			borderRadius={content.buttonBorderRadius || config.borderRadius || '50%'}
			font-size={content.buttonFontSize || '17px'}
			font-weight={content.buttonWeight || 'bold'}
		>
			{content.buttonText}
		</MjmlButton>
	);
}

export default Element;
