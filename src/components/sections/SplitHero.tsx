import React from 'react';
import {
	MjmlSection,
	MjmlColumn,
	MjmlWrapper,
	MjmlText,
	MjmlButton,
	MjmlImage,
} from 'mjml-react';
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
				background-color={content.backgroundColor || '#fff'}
				background-repeat="no-repeat"
				background-size="cover"
				vertical-align="middle"
				full-width={content.fullWidth ? 'full-width' : undefined}
				padding={'30px'}
			>
				<MjmlColumn width="50%" backgroundColor={'#333'}>
					<MjmlText
						align="left"
						color="#fff"
						font-size="16px"
						padding-left="25px"
						padding-right="25px"
						padding-bottom="10px"
						padding-top="10px"
					>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
							<br />
						</p>
					</MjmlText>
					<MjmlButton
						background-color="#fff"
						color="#fa8739"
						font-size="16px"
						align="left"
						padding="15px 30px"
						border-radius="3px"
						href="https://mjml.io"
						padding-left="25px"
						padding-right="25px"
						padding-bottom="10px"
					>
						SHOP NOW
					</MjmlButton>
				</MjmlColumn>
				<MjmlColumn width="50%">
					<MjmlImage
						src={content.image}
						alt="Clothes set"
						align="center"
						border="none"
						width="400px"
						padding-left="0px"
						padding-right="0px"
						padding-bottom="0px"
						padding-top="0"
					></MjmlImage>
				</MjmlColumn>
			</MjmlSection>
		</MjmlWrapper>
	);
}

export default Element;
