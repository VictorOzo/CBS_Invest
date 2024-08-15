import styled from 'styled-components';

export const Container = styled.div`
	max-width: 1024px;
	margin: 0 auto;
	padding: 2rem;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1rem;
`;

export const Title = styled.h1`
	text-align: center;
	margin-bottom: 2rem;
`;

export const Card = styled.div`
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
