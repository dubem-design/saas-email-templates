import React from 'react';

import {
	MjmlWrapper,
	MjmlSection,
	MjmlColumn,
	MjmlImage,
	MjmlText,
} from 'mjml-react';

function Element({ content }: { content: any }) {
	const height = content.height || '8px';
	return (
		<MjmlSection
			padding={content.padding || '30px'}
			backgroundColor={content.backgroundColor || '#fff'}
		>
			<MjmlColumn width="75%">
				<MjmlText padding={'0px'}>
					<h3 style={{ fontWeight: 'bold', marginTop: 0, marginBottom: 0 }}>
						{' '}
						<a
							href="https://blog.recast.ai/how-to-choose-the-best-channel-for-your-bot-the-ultimate-cheat-sheet/"
							style={{ color: '#3498DB', textDecoration: 'none' }}
						>
							How to choose the best channel for your bot: the ultimate cheat
							sheet
						</a>{' '}
					</h3>
					<p style={{ fontSize: '14px' }}>
						Bot channels do not offer the same features: here’s an analysis of a
						few to help you figure everything out.
					</p>
				</MjmlText>
			</MjmlColumn>
			<MjmlColumn width="25%" padding={'0px'}>
        <MjmlImage
          paddingRight={'0px'}
					width="100px"
					href="https://blog.recast.ai/how-to-choose-the-best-channel-for-your-bot-the-ultimate-cheat-sheet/"
					src="https://cdn.recast.ai/newsletter/184.jpg"
				></MjmlImage>
			</MjmlColumn>
		</MjmlSection>
	);
}

export default Element;
