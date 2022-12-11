import React from 'react';

import { MjmlWrapper, MjmlSection, MjmlColumn } from 'mjml-react';

function Element({ content }: { content: any }) {
	const height = content.height || '8px';
	return (
		<MjmlSection backgroundColor={'#f8f8f8'} padding={content.padding || '20px 0px'} textAlign="left">
			{content.colors.map((colorConfig: any, index: number) => {
				const { color, width,  } = colorConfig;
				return (
          <MjmlColumn
            key={`${color}-${index}`}
						width={width}
						paddingTop={height}
            backgroundColor={color}
            
					></MjmlColumn>
				);
			})}
		</MjmlSection>
	);
}

export default Element;
