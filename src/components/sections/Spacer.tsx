import React from 'react';
import { MjmlSection } from 'mjml-react';
import { configType } from '../../common/types';

function Element({ config, content }: { config: configType; content: any }) {
	const height = content.height || '8px';
	return (
    <MjmlSection
			full-width={content.fullWidth}
			backgroundColor={content.backgroundColor || ''}
			padding={content.padding || '15px 15px'}
			borderRadius={content.borderRadius || '0px'}
		></MjmlSection>
	);
}

export default Element;
