import Skeleton from "react-loading-skeleton";
import "./ProductSkeleton.scss";

const ProductSkeleton = () => {
	return (
		<div className="product-skeleton__container">
			<section className="product-skeleton__images">
				<div className="product-skeleton__main-image">
					<Skeleton width={360} height={360} />
				</div>
				<div className="product-skeleton__all-images">
					{Array.from({ length: 4 }).map((_, i) => (
						<Skeleton key={i} width={76} height={76} />
					))}
				</div>
			</section>
			<section className="product-skeleton__info">
				<Skeleton width={300} />
				<Skeleton width={360} height={80} />
				<Skeleton width={100} />
				<Skeleton width={360} height={40} />
				<section className="product-skeleton__description">
					<Skeleton count={15} width={360} />
				</section>
			</section>
		</div>
	);
};

export default ProductSkeleton;
