import React from 'react';
import { MjmlSection, MjmlColumn, MjmlText } from 'mjml-react';
import { componentType, configType, } from '../../common/types';

function Element({ config, content }: { config: configType; content: componentType }) {
	return (
		<MjmlSection
			full-width={content.fullWidth}
			backgroundColor={content.backgroundColor || '#fff'}
			padding={content.padding || '30px 0px'}
			textAlign="left"
		>
			<MjmlColumn width="100%" padding={'0px'}>
				<MjmlText
					color={content.color || '#333'}
					font-size={content.fontSize || '20px'}
					font-weight="bold"
					padding={'0px'}
				>
					<p
						dangerouslySetInnerHTML={{
							__html: content.text || '',
						}}
					></p>
				</MjmlText>
			</MjmlColumn>
		</MjmlSection>
	);
}

export default Element;
