import { useState, useEffect } from "react";
import "./Card.scss";

const Card = ({ winnerProduct, product }) => {
	const [winnerProductPlace, setWinnerProductPlace] = useState(0);

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
		<>
			<article className={`card card-${winnerProductPlace}`}>
				<div className="card__container">
					<img
						className="card__image"
						src={product.image.src}
						alt={product.title}
					/>
				</div>

				<div className={`card__place card__place-${winnerProductPlace}`}>
					{winnerProduct + 1}
				</div>
			</article>
		</>
	);
};

export default Card;
