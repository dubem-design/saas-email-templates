import React from 'react';
import { MjmlSection, MjmlColumn, MjmlText } from 'mjml-react';
import { configType } from '../../common/types';

function Element({ config, content }: { config: configType; content: any }) {
	return (
    <MjmlSection
			full-width={content.fullWidth}
      backgroundColor={content.backgroundColor || '#fff'}
			borderRadius={content.borderRadius || '0px'}
			padding={content.padding || '30px 30px'}
			textAlign="left"
		>
			<MjmlColumn>
				<MjmlText align={content.align || 'left'} padding="0px">
					{content.links
						? content.links.map(
								({ title, href, image , imageWidth}: any, index: number) => (
									<a
										href={href || '#'}
										style={{
											textDecoration: 'none',
											padding: content.linkPadding || '0px 10px',
										}}
										key={`link-${index}`}
									>
										{image && <img width={imageWidth || '20px'} src={image} />}
										{title}
									</a>
								)
						  )
						: ''}
				</MjmlText>
			</MjmlColumn>
		</MjmlSection>
	);
}

export default Element;
