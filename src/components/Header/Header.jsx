import Sparkles from "../Sparkles/Sparkles";
import "./Header.scss";

const Header = () => {
	return (
		<header className="header">
			<h1 className="header__title">Los más vendidos</h1>
			<div className="header__subtitle-container">
				<Sparkles direction="left" size="m" />
				<h2 className="header__subtitle">en tu Shopify</h2>
				<Sparkles direction="right" size="m" />
			</div>
		</header>
	);
};

export default Header;
