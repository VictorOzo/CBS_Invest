import ProductSlider from './ProductSlider';
import ProductCard from './ProductCard';
import { Container, Grid, Title } from '../assets/styles/styles';

const ProductList = () => {
	return (
		<Container>
			<Title>Dynamic Product Page</Title>
			<ProductSlider />
			<Grid>
				<ProductCard />
			</Grid>
		</Container>
	);
};

export default ProductList;
