import React from 'react';
import { MjmlSection, MjmlColumn, MjmlImage, MjmlText } from 'mjml-react';
import { configType } from '../../common/types';

function Element({ config, content }: { config: configType; content: any }) {
	const height = content.height || '8px';
	return (
    <MjmlSection
			full-width={content.fullWidth}
			backgroundColor={content.backgroundColor || '#fff'}
			borderRadius={content.borderRadius || '0px'}
			padding={content.padding || '30px'}
			verticalAlign={'middle'}
			textAlign={'left'}
		>
			<MjmlColumn width="11%">
				<MjmlImage
					padding={'0px'}
					align="left"
					width="50px"
					borderRadius={content.borderRadius || '50%'}
					src={content.image || 'https://via.placeholder.com/40x40'}
				></MjmlImage>
			</MjmlColumn>
			<MjmlColumn width="44%" verticalAlign={'middle'}>
				<MjmlText padding="5px 0px">
					<p
						style={{ margin: '0px', fontSize: '14px' }}
						dangerouslySetInnerHTML={{
							__html: content.text || '',
						}}
					></p>
				</MjmlText>
			</MjmlColumn>
			<MjmlColumn width="45%" verticalAlign={'middle'}>
				<MjmlText padding="10px 0px" align="right">
					<p
						style={{ margin: '0px', fontSize: '14px' }}
						dangerouslySetInnerHTML={{
							__html: content.textTwo || '',
						}}
					></p>
				</MjmlText>
			</MjmlColumn>
		</MjmlSection>
	);
}

export default Element;
