export default function Product(props) {
	return (
		<div className='slide_card'>
			<img className='product--image' src={props.url} alt='product image' />
			<h2>{props.name}</h2>
			<p className='price'>{props.price}</p>
			<p>{props.description}</p>
			<p>
				<button className='slidebtn'>Add to Cart</button>
			</p>
		</div>
	);
}
