import Card from "../Card/Card";
import "./Podium.scss";
import { products } from "../../utils/data.js";

const sortingProducts = products.sort((a, b) => b.sales - a.sales);

const Podium = () => {
	return (
		<>
			{sortingProducts.slice(0, 3).map((product, index) => {
				console.log(product.name);
				return <Card key={index} winnerProduct={index} product={product} />;
			})}
		</>
	);
};

export default Podium;
