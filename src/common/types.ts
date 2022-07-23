export interface data {
	title?: String;
	firstName?: String;
	lastName?: String;
	username?: String;
	emailVerificationLink?: String;
}

export interface config {
	styleGuide?: styleGuide;
	layout?: layout;
	sections?: sections;
}

export interface styleGuide {
	primaryColor?: String;
	secondaryColor?: String;
	mainBtnColor?: String;
	secondaryBtnColor?: String;
	borderRadius?: String;
	headingFont?: String;
	bodyFont?: String;
	customStyling?: String;
  bgColor?: String;
}

export interface layout {
	name: String; //e.g. public, minimal, subscriber, transactional
	padding: String; // Default is 16px or 8px (Using the 8-point grid system)
	bodyColor: String;
}

// available are dependent on the layout (lets change blocks to sections)
// blocks can be turned on/off by passinng in an object with their name as key
// defaultBlocks need not be passed in (eg header, footer) but a key on "show" can be sent in to put them on/ off
// We might convert to array lateron to allow people override the order of each block
export interface sections {
	header: header;
	hero: hero;
	footer: footer;
}

export interface header {
	textAlign: String;
	logo: components['logo'];
}

export interface hero {
	show: Boolean; // Not necessary, except to put off default behaviour caused by the layout or being a defaultBlocks
	backgroundColor: String;
	backgroundImage: String;
	title: String;
	subtitle: String;
	buttonOne: String;
	textAlign: String;
}

export interface footer {
	textAlign: String;
	logo: components['logo'];
}

export interface components {
	logo: {
		text: String;
		imgUrl: String;
		height: String;
		width: String;
	};
	primaryMenus: {
		links: [String, { title: String; btnClass: String }];
	};
}
