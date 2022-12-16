import React from 'react';

import { MjmlSection, MjmlText, MjmlWrapper } from 'mjml-react';

function Element({ data, content }: { data: any; content: any }) {
	return (
		<MjmlSection
			backgroundColor={content.backgroundColor || '#fff'}
			borderRadius={content.borderRadius}
			paddingTop="5px"
			paddingBottom={'5px'}
			borderLeft="5px solid #ffd500"
		>
			<MjmlText align="center" >
				{content.text}{' '}
			</MjmlText>
		</MjmlSection>
	);
}

export default Element;
