import Title from "../Title/Title";
import "./Footer.scss";
import instagramImg from "../../images/instagram.svg";
import tiktokImg from "../../images/tiktok.svg";
import facebookImg from "../../images/facebook.svg";
import shopifyImg from "../../images/shopify.svg";
import { Link } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";

const Footer = () => {
	return (
		<>
			<Title sentence="Quiero visitar la tienda completa" />

			<footer className="footer">
				<div className="footer__container">
					<div className="footer__social">
						<Link to={PathConstants.INSTAGRAM}>
							<img
								src={instagramImg}
								alt="Logo de Instagram"
								className="footer__social-icon"
							/>
						</Link>
						<Link to={PathConstants.FACEBOOK}>
							<img
								src={facebookImg}
								alt="Logo de Facebook"
								className="footer__social-icon"
							/>
						</Link>
						<Link to={PathConstants.TIKTOK}>
							<img
								src={tiktokImg}
								alt="Logo de TikTok"
								className="footer__social-icon"
							/>
						</Link>
						<Link
							to={PathConstants.SHOPIFY}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={shopifyImg}
								alt="Logo de Shopify"
								className="footer__social-icon"
							/>
						</Link>
					</div>
					<p className="footer__text">
						Información tomada de &nbsp;
						<Link
							to={PathConstants.SHOPIFY}
							target="_blank"
							rel="noopener noreferrer"
						>
							@altorrelieve (gracias ❤️)
						</Link>
					</p>
					<p className="footer__text">
						Diseñado con ❤️ por &nbsp;
						<Link to={PathConstants.SHIMI}>@shirleymallea</Link>
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
