import React from 'react';
import { MjmlSection, MjmlDivider } from 'mjml-react';
import type { configType, componentType } from '../../common/types';

function Element({ config, content }: { config: configType; content: componentType }) {
	return (
    <MjmlSection
			full-width={content.fullWidth ? 'full-width' : undefined}
			padding={content.padding || '30px'}
			backgroundColor={content.backgroundColor || '#fff'}
			borderRadius={content.borderRadius || '0px'}
		>
			<MjmlDivider
				borderStyle={content.borderStyle || 'dashed'}
				borderWidth={content.borderWidth || '5px'}
				borderColor={content.borderColor || '#000'}
      >
        
			</MjmlDivider>
		</MjmlSection>
	);
}

export default Element;
