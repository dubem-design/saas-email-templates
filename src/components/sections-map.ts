import SectionsSlot from './SectionsSlot';
import Header from './sections/Header';
import Hero from './sections/Hero';
import SplitHero from './sections/SplitHero';
import Spacer from './sections/Spacer';
import Image from './sections/Image';
import EnvBadge from './sections/EnvBadge';
import Divider from './sections/Divider';
import Person from './sections/Person';
import PostCard from './sections/PostCard';
import Carousel from './sections/Carousel';
import Heading from './sections/Heading';
import Paragraph from './sections/Paragraph';
import Button from './sections/Button';
import Links from './sections/Links';
import Footer from './sections/Footer';
import Wrap from './sections/Wrap';

const section: any = {
	body: {
		component: SectionsSlot,
	},
	wrap: {
		component: Wrap,
	},
	env: {
		component: EnvBadge,
	},
	spacer: {
		component: Spacer,
	},
	header: {
		component: Header,
	},
	hero: {
		component: Hero,
	},
	'split-hero': {
		component: SplitHero,
	},
	image: {
		component: Image,
	},
	button: {
		component: Button,
	},
	links: {
		component: Links,
	},
	heading: {
		component: Heading,
	},
	paragraph: {
		component: Paragraph,
	},

	divider: {
		component: Divider,
	},
	person: {
		component: Person,
	},
	'post-card': {
		component: PostCard,
	},
	carousel: {
		component: Carousel,
	},
	footer: {
		component: Footer,
	},
};

export default section;
