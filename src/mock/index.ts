import { configType, componentType } from '../common/types';

export const config: configType = {
	title: 'New Env',
	backgroundColor: '#efefef',
	align: 'left',
	primaryColor: '#5073CC',
	borderRadius: '2px',
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
		logoUrl: 'https://storage.googleapis.com/tef-website/Logo.png',
		padding: '30px',
		backgroundColor: '#fff',
		// links: [{ title: 'Dashboard' }, { title: 'Profile' }],
	},
	{
		section: 'body',
	},
	{
		section: 'footer',
		logoUrl: 'https://storage.googleapis.com/tef-website/Icon.png',
		text: '© 2020 OnePage. All rights reserved.',
	},
	{
		section: 'spacer',
		padding: '80px 0px',
	},
];

export const sections: Array<componentType> = [
	// {
	// 	section: 'hero',
	// 	fullWidth: false,
	// 	padding: '0px 30px',
	// 	image: 'http://191n.mj.am/img/191n/1t/h0.jpg',
	// 	heroBackgroundColor: '#ddd',
	// 	backgroundColor: '#fff',
	// },
	// {
	// 	section: 'content',
	// 	padding: '0px 30px',
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
		section: 'image',
		padding: '0px 0px',
		backgroundColor: '#fff',
		image: 'https://storage.googleapis.com/tef-website/test-thumb.png',
	},
	{
		text: 'Hello there',
		section: 'heading',
		padding: '0px 30px',
	},
	{
		section: 'paragraph',
		// align: 'center',
		text: `Lorem ipsum dolor sit amet consectetur <a href='google.com'>Hello</a> adipisicing elit.
    <br/>
    <br/>
    For me, the is a concept with the capacity to power present and future automation. 
    If you parameterize a concept then you can most likely find a path to automation.
    `,
		padding: '0px 30px',
	},
	{
		section: 'button',
		text: 'Go to dashboard',
		backgroundColor: '#5e6ebf',
		padding: '0px 30px',
	},

	// {
	// 	section: 'post-card',
	// 	padding: '50px 30px',
	// 	backgroundColor: '#fff',
	// },
	// {
	// 	section: 'person',
	// 	padding: '30px',
	// 	backgroundColor: '#fff',
	// },
	// {
	// 	section: 'carousel',
	// 	padding: '0px 30px',
	// 	backgroundColor: '#fff',
	// },
];
