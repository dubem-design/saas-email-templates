import React from 'react';
import { MjmlSection, MjmlColumn, MjmlWrapper, MjmlText } from 'mjml-react';
import ButtonBlock from '../blocks/ButtonBlock';
import { configType } from '../../common/types';

function Element({ config, content }: { config: configType; content: any }) {
	return (
    <MjmlWrapper
			full-width={content.fullWidth}
			padding={content.padding || '30px'}
			backgroundColor={content.backgroundColor || '#fff'}
			borderRadius={content.borderRadius || '0px'}
		>
			<MjmlSection
				background-url={content.image}
				background-color={content.innerBackgroundColor || '#fff'}
				background-repeat="no-repeat"
				background-size="cover"
				vertical-align="middle"
				padding={content.innerPadding || '0px'}
				borderRadius={content.innerBorderRadius || '30px'}
			>
				<MjmlColumn width="100%" vertical-align="middle">
					<MjmlText
						align={content.align || 'center'}
						font-size="24px"
						color="#45474e"
						padding="0px"
						fontWeight={600}
						padding-top="45px"
					>
						<p
							dangerouslySetInnerHTML={{
								__html: content.text || '',
							}}
						></p>
					</MjmlText>
					<ButtonBlock config={config} content={content} />
				</MjmlColumn>
			</MjmlSection>
		</MjmlWrapper>
	);
}

export default Element;
