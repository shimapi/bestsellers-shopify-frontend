import { useState, useEffect } from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ winnerProduct, product }) => {
	const [winnerProductPlace, setWinnerProductPlace] = useState(0);
	const [flip, setFlip] = useState(false);

	useEffect(() => {
		switch (winnerProduct) {
			case 0:
				return setWinnerProductPlace("first");
			case 1:
				return setWinnerProductPlace("second");
			case 2:
				return setWinnerProductPlace("third");
		}
	}, [winnerProduct]);

	return (
		<article className={`card card-${winnerProductPlace}`}>
			<div className={`card__flip ${flip ? "card__flipped" : ""}`}>
				<div className="card__flip-front" onClick={() => setFlip(!flip)}>
					<div className="card__flip-front">
						<img
							className="card__image"
							src={product.image.src}
							alt={product.title}
							loading="lazy"
						/>
					</div>
				</div>

				<div className="card__flip-back" onClick={() => setFlip(!flip)}>
					<img
						className="card__back-image"
						src={product.images[2].src || product.image.src}
						alt={product.title}
						loading="lazy"
					/>
					<div className="card__back-product-info">
						<h3>{product.title}</h3>

						<Link to={`/products/${product.id}`} className="button">
							ver producto
						</Link>
					</div>
				</div>
			</div>

			<div className={`card__place card__place-${winnerProductPlace}`}>
				{winnerProduct + 1}
			</div>
		</article>
	);
};
export default Card;
