import { MjmlSectionProps } from 'mjml-react';

export interface configType {
	title: String; //e.g. public, minimal, subscriber, transactional
	padding?: String; // Default is 16px or 8px (Using the 8-point grid system)
	align?: String;
	backgroundColor?: String;
	primaryColor?: String;
	borderRadius?: String;
	color?: String;
}

export interface componentType {
	// general styles
	section: String;
	text?: String;
	align?: String;
	padding?: String;
	fullWidth?: Boolean;
	backgroundColor?: String;
	// other styles
	image?: String;
	fontSize?: String;
	logoUrl?: String;
	links?: Array<{ title: String; url: String }>;
	// border styles
	borderWidth?: String;
	borderColor?: String;
	borderStyle?: String;
}
