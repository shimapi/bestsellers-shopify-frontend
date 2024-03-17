import Sparkles from "../Sparkles/Sparkles";
import "./Title.scss";

const Title = ({ sentence, size }) => {
	return (
		<section className="title">
			<Sparkles direction="left" size={size} />
			<h2 className="title__words">{sentence}</h2>
			<Sparkles direction="right" size={size} />
		</section>
	);
};

export default Title;
