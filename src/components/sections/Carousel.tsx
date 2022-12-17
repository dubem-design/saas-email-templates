import React from 'react';
import { configType, componentType } from '../../common/types';

import {
	MjmlWrapper,
	MjmlSection,
	MjmlColumn,
	MjmlText,
	MjmlCarousel,
	MjmlCarouselImage,
} from 'mjml-react';

function Element({ config, content }: { config: configType; content: componentType }) {
	return (
    <MjmlWrapper
			full-width={content.fullWidth ? 'full-width' : undefined}
			backgroundColor={content.backgroundColor || ''}
			borderRadius={content.borderRadius || '0px'}
			padding={content.padding || '15px 15px'}
		>
			<MjmlSection>
				<MjmlColumn width="550px">
					<MjmlCarousel
						tb-border-radius="0px"
						tb-hover-border-color="red"
						tb-width="50px"
						tb-border="0px"
						left-icon="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/arrow-left.png"
						right-icon="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/arrow-right.png"
						icon-width="16px"
					>
						<MjmlCarouselImage
							href="http://www.ugg.com/"
							thumbnails-src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/BPNK.gif"
							alt="Side view of the Royal in Baby Pink"
							src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product1.jpg"
						></MjmlCarouselImage>
						<MjmlCarouselImage
							href="http://www.ugg.com/"
							thumbnails-src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/NOPK.gif"
							src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product2.jpg"
						></MjmlCarouselImage>
						<MjmlCarouselImage
							href="http://www.ugg.com/"
							thumbnails-src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/BBLU.gif"
							src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product3.jpg"
						></MjmlCarouselImage>
						<MjmlCarouselImage
							href="http://www.ugg.com/"
							alt="Side view of the Royal in Black"
							thumbnails-src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/BLK.gif"
							src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product4.jpg"
						></MjmlCarouselImage>
						<MjmlCarouselImage
							href="http://www.ugg.com/"
							alt="Side view of the Royal in Seal"
							thumbnails-src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/SEL.gif"
							src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product5.jpg"
						></MjmlCarouselImage>
						<MjmlCarouselImage
							href="http://www.ugg.com/"
							alt="Side view of the Royal in White"
							thumbnails-src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/WHT.gif"
							src="https://static.cdn.responsys.net/i2/responsysimages/uggs/contentlibrary/promotional/2017/06-june/20170615_u_royale-b/images/product6.jpg"
						></MjmlCarouselImage>
					</MjmlCarousel>
				</MjmlColumn>
			</MjmlSection>
			<MjmlSection>
				<MjmlColumn width="480px">
					<MjmlText
						font-family="Open Sans, Arial, sans-serif"
						font-size="14px"
						line-height="26px"
						color="#bcbec0"
						text-transform="uppercase"
						align="center"
					>
						select color
					</MjmlText>
				</MjmlColumn>
			</MjmlSection>
		</MjmlWrapper>
	);
}

export default Element;
