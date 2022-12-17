import React from 'react';
import { configType, componentType } from '../../common/types';
import { MjmlWrapper, MjmlColumn } from 'mjml-react';
import ButtonBlock from '../blocks/ButtonBlock';

function Element({ config, content }: { config: configType; content: componentType }) {
	return (
    <MjmlWrapper
			full-width={content.fullWidth ? 'full-width' : undefined}
			backgroundColor={'#fff'}
			borderRadius={content.borderRadius || '0px'}
			padding={content.padding || '0px 0px'}
			textAlign="left"
		>
			<MjmlColumn verticalAlign={'center'} padding="0px">
				<ButtonBlock config={config} content={content} />
			</MjmlColumn>
		</MjmlWrapper>
	);
}

export default Element;
