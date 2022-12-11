export const config = {
	// setup
	// env: 'Development',
	title: 'New Env',
	css: {
		a: {
			color: '#57CC99',
			textDecoration: 'none',
		},
	},
	logo: 'https://storage.googleapis.com/cadbod-beta-bucket/logo%3Dlogo.png',
	logoAlign: 'left',
	footerLogo:
		'https://storage.googleapis.com/cadbod-beta-bucket/logo%3Dlogo.png',
	backgroundColor: '#efefef',
	bodyColor: '#ffffff',
	primaryColor: '#5073CC',
	borderRadius: '2px',
	paddingTop: '20px',
	paddingLeft: '10px',
	paddingRight: '10px',
	paddingBottom: '20px',
	copyrightText: '© 2020 Yaw company inc. 115 Some place on Earth, USA',
	footerText: 'With ❤️ from the team',
	socialLinks: [
		{ name: 'facebook', url: 'https://www.facebook.com/' },
		{ name: 'twitter', url: 'https://www.twitter.com/' },
		{ name: 'instagram', url: 'https://www.instagram.com/' },
		{ name: 'github', url: 'https://www.github.com/' },
		{ name: 'dribbble', url: 'https://www.dribbble.com/' },
		{ name: 'google', url: 'https://www.google.com/' },
		{ name: 'pinterest', url: 'https://www.pinterest.com/' },
		{ name: 'linkedin', url: 'https://www.linkedin.com/' },
		{ name: 'web', url: 'https://www.yawcompany.com/' },
		{ name: 'medium', url: 'https://www.medium.com/' },
		{ name: 'vimeo', url: 'https://www.vimeo.com/' },
		{ name: 'youtube', url: 'https://www.youtube.com/' },
	],
	// pending
};

export const layout = [
	{
		section: 'spacer',
	},
	{
		section: 'env',
		env: 'STAGING',
	},
	{
		section: 'spacer',
	},
	// {
	// 	section: 'stripe',
	// 	sectionBackground: '',
	// 	height: '10px',
	// 	padding: '0px 0px',
	// 	colors: [
	// 		{ color: '#ffd500', width: '10%' },
	// 		{ color: '#000', width: '30%' },
	// 		{ color: 'red', width: '20%' },
	// 		{ color: 'teal', width: '15%' },
	// 		{ color: 'orange', width: '15%' },
	// 		{ color: '#ffd500', width: '10%' },
	// 	],
	// },
	{
		section: 'header',
		logoUrl: 'https://storage.googleapis.com/tef-website/Logo.png',
		padding: '30px',
		backgroundColor: '#fff',
		links: [{ title: 'Dashboard' }, { title: 'Profile' }],
	},
	{
		section: 'body',
	},
	{
		section: 'footer',
		logoUrl: 'https://storage.googleapis.com/tef-website/Icon.png',
	},
	{
		section: 'spacer',
		padding: '80px 0px',
	},
];

export const sections = [
	{
		section: 'hero',
		fullWidth: false,
		padding: '0px 30px',
		heroBackgroundImage: 'http://191n.mj.am/img/191n/1t/h0.jpg',
		heroBackgroundColor: '#ddd',
		backgroundColor: '#fff',
	},
	{
		section: 'content',
		padding: '0px 30px',
	},
	{
		section: 'divider',
		backgroundColor: '#fff',
		padding: '20px 30px',
		borderWidth: '1px',
		borderColor: '#ddd',
		borderStyle: 'dashed', // solid, dashed, dotted
	},
	{
		section: 'person',
		padding: '30px',
		backgroundColor: '#fff',
	},
	{
		section: 'content',
		padding: '0px 30px',
	},
	{
		section: 'carousel',
		padding: '0px 30px',
		backgroundColor: '#fff',
	},
	{
		section: 'post-card',
		padding: '50px 30px',
		backgroundColor: '#fff',
	},
	{
		section: 'image',
		padding: '0px 30px',
		backgroundColor: '#fff',
	},
];
