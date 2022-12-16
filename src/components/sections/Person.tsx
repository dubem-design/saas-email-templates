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
			backgroundColor={content.backgroundColor || '#fff'}
			padding={content.padding || '30px'}
		>
			<MjmlColumn width="11%">
				<MjmlImage
					padding-right="0px"
					padding-left="0px"
					align="left"
					width="70px"
					href="https://twitter.com/MrJustaine"
					src="https://cdn.recast.ai/newsletter/justine.png"
				></MjmlImage>
			</MjmlColumn>
			<MjmlColumn width="89%" verticalAlign={'center'}>
				<MjmlText padding="0 25px">
					<p style={{ color: '#BDBDBD', lineHeight: '9px' }}>
						{' '}
						Justine -{' '}
						<a
							href="https://recast.ai?ref=newsletter"
							style={{ color: '#3498DB' }}
						>
							Recast.AI
						</a>{' '}
						team{' '}
					</p>
					<p
						style={{ color: '#BDBDBD', lineHeight: '9px', fontStyle: 'italic' }}
					>
						{' '}
						Your light in the storm{' '}
					</p>
				</MjmlText>
			</MjmlColumn>
		</MjmlSection>
	);
}

export default Element;
