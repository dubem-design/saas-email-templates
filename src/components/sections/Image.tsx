import React from 'react';

import { MjmlWrapper, MjmlSection, MjmlColumn , MjmlImage, MjmlText} from 'mjml-react';

function Element({ content }: { content: any }) {
	const height = content.height || '8px';
	return (
		<MjmlSection backgroundColor={content.backgroundColor}  padding={content.padding || '30px'} textAlign="left">
      <MjmlColumn width="100%" vertical-align="middle" >
        <MjmlImage src="http://5vph.mj.am/img/5vph/b/1g8pi/068y3.jpeg" align='left' alt="OnePage" padding="0px"></MjmlImage>
      </MjmlColumn>
		</MjmlSection>
	);
}

export default Element;
