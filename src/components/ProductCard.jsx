import { useState, useEffect } from 'react';
import { fetchProducts } from '../Api/api';
import '../assets/styles/productlist.css';

const ProductCard = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const fetchedProducts = await fetchProducts();
			setProducts(fetchedProducts);
		};
		fetchData();
	}, []);

	return (
		<>
			{products.map((product) => (
				<div className='card ' key={product.id}>
					<img src={product.image} className='card-img-top' />
					<div className='card-body'>
						<h4 className='card-title'>{product.name}</h4>
						<p className='card-text'>{product.description}</p>
						<p className='card-subtitle'>Price: ${product.price}</p>
						<div className='cardbtn'>
							<button className='btn btn-dark'>View Details</button>
							<button className='btn btn-dark'>Add to Cart</button>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default ProductCard;
