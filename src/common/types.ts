import type {
	MjmlSectionProps,
	BorderProps,
	PaddingProps,
	MjmlImageProps,
	MjmlDividerProps,
	HrefProps,
} from 'mjml-react';

export type layoutsType = {
	[key: string]: Array<componentType>;
};

export interface configType {
	title: string; //e.g. public, minimal, subscriber, transactional
	padding?: string; // Default is 16px or 8px (Using the 8-point grid system)
	align?: MjmlImageProps['align'];
	backgroundColor?: string;
	primaryColor?: string;
	borderRadius?: string;
	color?: string;
}

export interface componentType {
	// sections styles
	sections?: componentType[];
	section: string;
	title?: string;
	text?: string;
	textTwo?: string;
	color?: string;
	align?: MjmlImageProps['align'];
	padding?: PaddingProps['padding'];
	innerPadding?: string;
	fullWidth?: Boolean;
	borderRadius?: BorderProps['borderRadius'];
	innerBackgroundColor?: string;
	innerBorderRadius?: string;
	// other styles
	linkPadding?: string;
	href?: string;
	image?: string;
	fontSize?: string;
	links?: Array<{
		title: string;
		url?: string;
		image?: string;
		imageWidth?: string;
	}>;
	// border styles
	border?: BorderProps['border'];
	borderTop?: BorderProps['borderTop'];
	borderRight?: BorderProps['borderRight'];
	borderBottom?: BorderProps['borderBottom'];
	borderLeft?: BorderProps['borderLeft'];
	borderWidth?: MjmlDividerProps['borderWidth'];
	borderColor?: MjmlDividerProps['borderColor'];
	borderStyle?: MjmlDividerProps['borderStyle'];
	// button Styles
	buttonBackgroundColor?: string;
	buttonColor?: string;
	buttonBorder?: BorderProps['border'];
	buttonBorderRadius?: string;
	buttonPadding?: string;
	buttonHref?: string;
	buttonText?: string;
	buttonWidth?: string;
	buttonAlign?: string;
	buttonFontSize?: string;
	buttonWeight?: string;
	// Text styles
	textWeight?: string;
	textFontSize?: string;
	textLineHeight?: string;
	// image styles
	imageWidth?: string;
	imageHeight?: string;
	imageAlign?: MjmlImageProps['align'];
	imageAlt?: string;
	imageSrc?: MjmlImageProps['src'];
	imageHref?: HrefProps['href'];
	// Background styles
	backgroundColor?: MjmlSectionProps['backgroundColor'];
	backgroundImage?: MjmlSectionProps['backgroundUrl'];
	backgroundRepeat?: MjmlSectionProps['backgroundRepeat'];
	backgroundSize?: MjmlSectionProps['backgroundSize'];
	backgroundPosition?: MjmlSectionProps['backgroundPosition'];
}
