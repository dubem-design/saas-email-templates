import React from 'react';

import {
	MjmlSection,
	MjmlColumn,
	MjmlWrapper,
	MjmlText,
	MjmlButton,
} from 'mjml-react';

function Element({ config, content }: { config: any, content: any }) {  
	return (
		<MjmlWrapper padding={content.padding || '30px'} backgroundColor={content.backgroundColor || '#fff'}>
			<MjmlSection
        background-url={content.heroBackgroundImage} 
        background-color={content.heroBackgroundColor || '#fff'}
				background-repeat="no-repeat"
				background-size="cover"
				vertical-align="middle"
				full-width={content.fullWidth ? 'full-width' : undefined}
			>
				<MjmlColumn width="100%" vertical-align="middle">
					<MjmlText
						align="center"
						font-size="14px"
						color="#45474e"
						padding-bottom="10px"
						padding-top="45px"
					>
						<span style={{ fontSize: '30px', lineHeight: '30px' }}>
							More than an email template
						</span>
						<br />
						<br />
						Only on <span style={{ color: '#e85034' }}>Mailjet</span> template
						builder
					</MjmlText>
					<MjmlButton
						align="center"
						background-color={config.primaryColor || '#e85034'}
						color="#fff"
						border-radius="24px"
						href="https://mjml.io"
						font-family="Ubuntu, Helvetica, Arial, sans-serif, Helvetica, Arial, sans-serif"
						padding-bottom="45px"
						padding-top="10px"
					>
						SUBSCRIBE
					</MjmlButton>
				</MjmlColumn>
			</MjmlSection>{' '}
		</MjmlWrapper>
	);
}

export default Element;
