import "./Sparkles.scss";
import { useState, useEffect } from "react";
import sparklesImgLeft from "@/images/sparkles-left.svg";
import sparklesImgRight from "@/images/sparkles-right.svg";

const Sparkles = ({ direction, size }) => {
	const [sizeSparkle, setSizeSparkle] = useState("s");
	console.log("direction", direction);
	console.log("size", size);

	useEffect(() => {
		switch (size) {
			case "s":
				setSizeSparkle("s");
				break;
			case "m":
				setSizeSparkle("m");
				break;
			case "l":
				setSizeSparkle("l");
				break;
			case "xl":
				setSizeSparkle("xl");
				break;
			default:
				setSizeSparkle("m");
		}
	}, [size]);

	return (
		<>
			{direction === "left" ? (
				<img
					src={sparklesImgLeft}
					alt="sparkles"
					className={`sparkles sparkles-left sparkles__size-${sizeSparkle}`}
				/>
			) : (
				<img
					src={sparklesImgRight}
					alt="sparkles"
					className={`sparkles sparkles-right sparkles__size-${sizeSparkle}`}
				/>
			)}
		</>
	);
};

export default Sparkles;
