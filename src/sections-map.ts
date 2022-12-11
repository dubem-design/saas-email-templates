import SectionsSlot from './components/SectionsSlot';
import FancyStripe from './components/sections/FancyStripe';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Spacer from './components/sections/Spacer';
import Image from './components/sections/Image';
import Content from './components/sections/Content';
import Footer from './components/sections/Footer';
import EnvBadge from './components/sections/EnvBadge';
import Divider from './components/sections/Divider';
import Person from './components/sections/Person';
import PostCard from './components/sections/PostCard';
import Carousel from './components/sections/Carousel';

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
	content: {
		component: Content,
	},
	footer: {
		component: Footer,
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
};

export default section;
