import Skeleton from "react-loading-skeleton";
import "./PodiumSkeleton.scss";

const PodiumSkeleton = () => {
	return (
		<>
			<article className="card-skeleton">
				<div className="card-skeleton__container">
					{Array.from({ length: 3 }).map((_, i) => (
						<div className="card-skeleton__flip" key={i}>
							<Skeleton width={250} height={250} />
							<Skeleton width={250} height={50} />
						</div>
					))}
				</div>
			</article>
		</>
	);
};

export default PodiumSkeleton;
