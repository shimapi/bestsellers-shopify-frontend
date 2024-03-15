import sparklesImg from "../../images/sparkles.svg";
import "./Header.scss";

const Header = () => {
	return (
		<header className="header">
			<h1 className="header__title">Los más vendidos</h1>
			<div className="header__subtitle-container">
				<img src={sparklesImg} alt="sparkles" className="header__sparkles" />
				<h2 className="header__subtitle">en tu Shopify</h2>
				<img
					src={sparklesImg}
					alt="sparkles"
					className="header__sparkles header__sparkles-last"
					loading="lazy"
				/>
			</div>
		</header>
	);
};

export default Header;
