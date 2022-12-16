import React from 'react';

import {
	MjmlWrapper,
	MjmlSection,
	MjmlColumn,
	MjmlImage,
	MjmlText,
} from 'mjml-react';
import { config } from 'dotenv';

function Element({
	config,
	content,
}: {
	config: any;
	content: any;
}) {
  const { backgroundColor } = content;
  return (
		<MjmlSection
			backgroundColor={backgroundColor || '#fff'}
			padding={content.padding || '30px 30px'}
			textAlign="left"
		>
			<MjmlColumn width="33.33333333333333%" vertical-align="middle">
				<MjmlImage
					src={content.logoUrl}
					align={content.align || config.align || 'left'}
					alt="OnePage"
					padding="0px"
					width="100px"
				></MjmlImage>
			</MjmlColumn>
			<MjmlColumn width="66.66666666666666%" vertical-align="middle">
				<MjmlText align="right" padding="0px">
					{content.links
						? content.links.map(({ title }: any, index: number) => (
								<a
									href="https://mjml.io"
									style={{ textDecoration: 'none' }}
									key={`link-${index}`}
								>
									&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;
									{title}
								</a>
						  ))
						: ''}
				</MjmlText>
			</MjmlColumn>
		</MjmlSection>
	);
}

export default Element;
