const BASE_URL = 'https://fake-store-api.mock.beeceptor.com/api/products';

export const fetchProducts = async () => {
	try {
		const response = await fetch(BASE_URL);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching products:', error);

		return []; // Handle errors gracefully, return empty array for now
	}
};
