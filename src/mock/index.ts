import { configType, componentType } from '../common/types';

export const config: configType = {
	title: 'New Env',
	backgroundColor: '#efefef',
	align: 'left',
	primaryColor: '#5073CC',
	borderRadius: '4px',
	padding: '0px 30px',
	color: '#637381',
};

export const layout: Array<componentType> = [
	{
		section: 'spacer',
	},
	{
		section: 'env',
		text: 'STAGING',
	},
	{
		section: 'spacer',
	},
	{
		section: 'header',
		fullWidth: false,
		backgroundImage:
			'https://storage.googleapis.com/tef-website/header-fx-4.png',
		imageSrc: 'https://storage.googleapis.com/tef-website/Logo.png',
		padding: '30px',
		backgroundColor: '#fff',
		// links: [{ title: 'Dashboard' }, { title: 'Profile' }],
	},
	{
		section: 'body',
	},
	{
		section: 'footer',
		imageSrc: 'https://storage.googleapis.com/tef-website/Icon.png',
		text: '© 2020 OnePage. All rights reserved.',
	},
	{
		borderRadius: '0px 0px 10px 10px',
		section: 'image',
		padding: '0px 0px',
		backgroundColor: '#fff',
		image: 'https://storage.googleapis.com/tef-website/test-thumb.png',
	},
	{
		section: 'spacer',
		padding: '80px 0px',
	},
];

export const sections: Array<componentType> = [
	{
		section: 'links',
		align: 'center',
		padding: '20px 30px',
		linkPadding: '0px 20px',
		backgroundColor: '#fff',
		links: [
			{ title: 'Dashboard' },
			{ title: 'Profile' },
			{ title: 'Profile' },
			{
				title: 'Profile',
				imageWidth: '20px',
			},
		],
	},
	// {
	// 	section: 'split-hero',
	// 	text: 'More than an email template',
	// 	fullWidth: false,
	// 	padding: '0px 0px',
	// 	image: 'https://storage.googleapis.com/tef-website/test-thumb.png',
	// 	// heroBackgroundColor: '#ddd',
	// 	backgroundColor: '#efefef',
	// },
	{
		section: 'hero',
		text: 'More than an email template',
		fullWidth: false,
		padding: '30px',
		image: 'https://storage.googleapis.com/tef-website/test-thumb.png',
		innerBackgroundColor: '#efefef44',
		backgroundColor: '#fff',
		buttonText: 'Get started',
		buttonBackgroundColor: '#5073CC',
		buttonHref: 'google.com',
		align: 'left',
		innerPadding: '30px',
		innerBorderRadius: '16px',
	},

	{
		text: 'Hello there',
		section: 'heading',
		padding: '0px 30px',
	},
	{
		section: 'paragraph',
		// align: 'center',
		text: `<b>Lorem ipsum</b> dolor sit amet consectetur <a href='google.com'>Hello</a> adipisicing elit.
    <br/>
    <br/>
    For me, the is a <i>concept</i> with the <span style="background-color:#ffd500">capacity</span> to power present and future automation. 
    If you parameterize a concept then you can most likely find a path to automation.
    `,
		padding: '0px 30px',
	},
	{
		section: 'button',
		buttonText: 'Go to dashboard',
		buttonBackgroundColor: '#5e6ebf',
		padding: '0px 30px',
		align: 'left',
	},
	// {
	// 	section: 'post-card',
	// 	padding: '50px 30px',
	// 	backgroundColor: '#fff',
	// },
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
		text: `John Doe | CEO <br>Hello there`,
		textTwo: `<a href="#">Get started</a>`,
		image: 'https://i.pravatar.cc/300',
	},
	// {
	// 	section: 'carousel',
	// 	padding: '0px 30px',
	// 	backgroundColor: '#fff',
	// },
];
