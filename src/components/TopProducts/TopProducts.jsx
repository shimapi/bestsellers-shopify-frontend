import Title from "../Title/Title";
import "./TopProducts.scss";
import { products } from "@/utils/data.js";

const bestSellers = products.filter((product) => product.sales > 100);
console.log(bestSellers);

const sortingProducts = products.sort((a, b) => b.sales - a.sales);

const TopProducts = () => {
	return (
		<>
			<section className="top-products">
				<Title sentence="Top 10" />
				<div className="top-products__container">
					{sortingProducts.slice(0, 10).map((product, index) => {
						return (
							<article className="top-products__product" key={index}>
								<img
									className="top-products__product-image"
									src={product.image}
									alt={product.name}
								/>
								<h4 className="top-products__product-name">{product.name}</h4>
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default TopProducts;
