import React from 'react';
import { MjmlSection, MjmlText } from 'mjml-react';
import { configType } from '../../common/types';

function Element({ config, content }: { config: configType; content: any }) {
	const height = content.height || '8px';
	return (
    <MjmlSection
			full-width={content.fullWidth}
			borderRadius={content.borderRadius || '0px'}
			backgroundColor={content.backgroundColor || '#fff'}
			padding={content.padding || '30px 0px'}
			textAlign="left"
		>
			<MjmlText
				color={content.color || config.color || '#637381'}
				align={content.align || config.align || 'left'}
				font-size={content.fontSize || '16px'}
				containerBackgroundColor={content.innerBackgroundColor || '#fff'}
			>
				<p
					dangerouslySetInnerHTML={{
						__html: content.text || '',
					}}
				></p>
			</MjmlText>
		</MjmlSection>
	);
}

export default Element;
