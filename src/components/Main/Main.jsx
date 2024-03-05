import Podium from "../Podium/Podium";
import Header from "../Header/Header";
import "./Main.scss";

const Main = () => {
	return (
		<>
			<Header />
			<main className="main">
				<div className="main__container">
					<Podium />
				</div>
			</main>
		</>
	);
};

export default Main;
