import React from 'react';

import {
	MjmlWrapper,
	MjmlSection,
	MjmlColumn,
	MjmlImage,
  MjmlText,
  MjmlButton
} from 'mjml-react';

function Element({ content }: { content: any }) {
	const height = content.height || '8px';
	return (
		<MjmlSection
			backgroundColor={'#fff'}
			padding={content.padding || '30px 0px'}
			textAlign="left"
		>
			<MjmlColumn width="100%" padding={'0px'}>
				<MjmlText color="#212b35" font-weight="bold" font-size="20px" padding={'0px'}>
					Croft's in Austin is opening December 20th
				</MjmlText>
				<MjmlText color="#637381" font-size="16px">
					Hi Jane,
				</MjmlText>

				<MjmlText color="#637381" font-size="16px" padding-bottom="30px" padding={'0px'}>
					Lorem ipsum dolor{' '}
					<a href="https://google.com">
						sit amet consectetur
					</a>{' '}
					adipisicing elit. Earum eaque sunt nulla in, id eveniet quae unde ad
					ipsam ut, harum autem porro reiciendis minus libero illo. Vero, fugiat
					reprehenderit.
				</MjmlText>
				<MjmlButton
					background-color="#5e6ebf"
					align="left"
					color="#ffffff"
					font-size="17px"
					font-weight="bold"
          href="https://google.com"
          

				>
					RSVP Today
				</MjmlButton>
				<MjmlText color="#637381" font-size="16px" padding-top="30px">
					Lorem ipsum dolor{' '}
					<a  href="https://google.com">
						sit amet consectetur
					</a>{' '}
					adipisicing elit. Earum eaque sunt nulla in, id eveniet quae unde ad
					ipsam ut, harum autem porro reiciendis minus libero illo. Vero, fugiat
					reprehenderit.
				</MjmlText>
				<MjmlText color="#637381" font-size="16px" padding-bottom="0">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</MjmlText>
			</MjmlColumn>
		</MjmlSection>
	);
}

export default Element;
