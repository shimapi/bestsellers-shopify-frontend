import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./TopProductsSkeleton.scss";

const TopProductsSkeleton = ({ cards }) => {
	return Array(cards)
		.fill(0)
		.map((_, index) => (
			<section className="top-products-skeleton" key={index}>
				<div className="top-products-skeleton__container">
					<article className="top-products-skeleton__product">
						<Skeleton width={88} height={88} />
						<h4 className="top-products-skeleton__product-name">
							<Skeleton count={3} width={250} />
						</h4>
					</article>
				</div>
			</section>
		));
};

export default TopProductsSkeleton;
