import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './slide.jsx';
import '../assets/styles/slide.css';
import { productData, responsive } from '../assets/data/data.js';

export default function App() {
	const product = productData.map((item) => (
		<Product
			key={item.id}
			name={item.name}
			url={item.imageurl}
			price={item.price}
			description={item.description}
		/>
	));

	return (
		<div className='carousel'>
			<h1 className='slide_head'>New Products </h1>
			<Carousel showDots={true} responsive={responsive}>
				{product}
			</Carousel>
		</div>
	);
}
