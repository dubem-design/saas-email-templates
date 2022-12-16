import SectionsSlot from './SectionsSlot';
import FancyStripe from './sections/FancyStripe';
import Header from './sections/Header';
import Hero from './sections/Hero';
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
import Footer from './sections/Footer';

const section: any = {
	body: {
		component: SectionsSlot,
	},
	env: {
		component: EnvBadge,
	},
	spacer: {
		component: Spacer,
	},
	stripe: {
		component: FancyStripe,
	},
	header: {
		component: Header,
	},
	hero: {
		component: Hero,
	},
	image: {
		component: Image,
	},
	button: {
		component: Button,
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
