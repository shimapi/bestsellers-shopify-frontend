import Title from "../Title/Title";
import "./Footer.scss";
import instagramImg from "../../images/instagram.svg";
import tiktokImg from "../../images/tiktok.svg";
import facebookImg from "../../images/facebook.svg";
import shopifyImg from "../../images/shopify.svg";

const Footer = () => {
	return (
		<>
			<Title sentence="Quiero visitar la tienda completa" />

			<footer className="footer">
				<div className="footer__container">
					<div className="footer__social">
						<img src={instagramImg} alt="instagram" />
						<img src={facebookImg} alt="instagram" />
						<img src={tiktokImg} alt="instagram" />
						<img src={shopifyImg} alt="instagram" />
					</div>
					<p className="footer__text">
						Información tomada de @altorrelieve (gracias ❤️)
					</p>
					<p className="footer__text">Diseñado con ❤️ por @shirleymallea</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
