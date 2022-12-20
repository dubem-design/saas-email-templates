import React from 'react';
import { MjmlSection, MjmlColumn, MjmlImage, MjmlText } from 'mjml-react';
import { configType } from '../../common/types';

function Element({ config, content }: { config: configType; content: any }) {
	const height = content.height || '8px';
	return (
    <MjmlSection
			full-width={content.fullWidth}
			padding={content.padding || '30px'}
			backgroundColor={content.backgroundColor || '#fff'}
			borderRadius={content.borderRadius || '0px'}
		>
			<MjmlColumn width="75%">
				<MjmlText padding={'0px'}>
					<h3 style={{ fontWeight: 'bold', marginTop: 0, marginBottom: 0 }}>
						{' '}
						<a
							href={content.href || '#'}
							style={{ color: '#5e6ebf', textDecoration: 'none' }}
						>
							How to choose the best channel for your bot: the ultimate cheat
							sheet
						</a>{' '}
					</h3>
					<p style={{ fontSize: '14px', color: '#637381' }}>
						Bot channels do not offer the same features: here’s an analysis of a
						few to help you figure everything out.
					</p>
				</MjmlText>
			</MjmlColumn>
			<MjmlColumn width="25%" padding={'0px'}>
				<MjmlImage
					paddingRight={'0px'}
					width="100px"
					borderRadius={'50%'}
					href={content.href || '#'}
					src="https://cdn.recast.ai/newsletter/184.jpg"
				></MjmlImage>
			</MjmlColumn>
		</MjmlSection>
	);
}

export default Element;
