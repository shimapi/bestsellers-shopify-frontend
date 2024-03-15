import sparklesImg from "../../images/sparkles.svg";
import "./Title.scss";

const Title = ({ sentence }) => {
	return (
		<section className="title">
			<img src={sparklesImg} alt="sparkles" className="title__sparkles" />
			<h2 className="title__words">{sentence}</h2>
			<img
				src={sparklesImg}
				alt="sparkles"
				className="title__sparkles title__sparkles-last"
			/>
		</section>
	);
};

export default Title;
