import React from 'react';

import { MjmlWrapper, MjmlSection, MjmlColumn , MjmlImage, MjmlText} from 'mjml-react';

function Element({ content }: { content: any }) {
	const height = content.height || '8px';
	return (
		<MjmlSection backgroundColor={content.backgroundColor}  padding={content.padding || '30px'} textAlign="left">
      <MjmlColumn width="100%" vertical-align="middle" >
        <MjmlImage src={content.image} align='left' alt="OnePage" padding="0px"></MjmlImage>
      </MjmlColumn>
		</MjmlSection>
	);
}

export default Element;
