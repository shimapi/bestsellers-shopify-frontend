import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./TopProductsSkeleton.scss";

const TopProductsSkeleton = ({ cards }) => {
	return Array(cards)
		.fill(0)
		.map((_, index) => (
			<article className="top-products-skeleton__product" key={index}>
				<Skeleton width={88} height={88} />
				<h4 className="top-products-skeleton__product-name">
					<Skeleton count={3} width={200} />
				</h4>
			</article>
		));
};

export default TopProductsSkeleton;
