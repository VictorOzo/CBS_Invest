import ProductSlider from './ProductSlider';
import ProductCard from './ProductCard';
import { Container, Grid, Title } from './styles';

const ProductPage = () => {
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

export default ProductPage;
