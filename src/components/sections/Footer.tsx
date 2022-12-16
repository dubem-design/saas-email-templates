import React from 'react';

import { MjmlWrapper, MjmlSection, MjmlColumn , MjmlImage, MjmlText, MjmlButton} from 'mjml-react';

function Element({ content }: { content: any }) {
	return (
		<MjmlSection
			backgroundColor={content.backgroundColor || '#fff'}
			padding={content.padding || '30px 30px'}
			textAlign="left"
		>
			<MjmlColumn width="33.33333333333333%" vertical-align="middle">
				<MjmlImage
					src={content.logoUrl}
					align="left"
					padding="0px"
					width="30px"
				></MjmlImage>
			</MjmlColumn>
			<MjmlColumn width="66.66666666666666%" vertical-align="middle">
				<MjmlText align="right" padding="0px" font-size={ content.fontSize || '16px' } color={'#bbb'}>
					{content.text}
				</MjmlText>
			</MjmlColumn>
		</MjmlSection>
	);
}

export default Element;
