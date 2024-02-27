import "./Card.scss";

const Card = ({ winnerProduct, product }) => {
	return (
		<>
			<article className="card">
				<div className="card__container">
					<img
						className="card__img"
						src="https://via.placeholder.com/150"
						alt={product.name}
					/>
				</div>
				<div className="card__place">{winnerProduct + 1}</div>
			</article>
		</>
	);
};

export default Card;
