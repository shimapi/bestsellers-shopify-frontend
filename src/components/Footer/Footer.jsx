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
			<Link
				to={PathConstants.SHOPIFY}
				target="_blank"
				rel="noopener noreferrer"
			>
				<Title sentence="Quiero visitar la tienda completa" size="l" />
			</Link>

			<footer className="footer">
				<div className="footer__container">
					<div className="footer__social">
						<Link
							to={PathConstants.INSTAGRAM}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={instagramImg}
								alt="Logo de Instagram"
								className="footer__social-icon"
							/>
						</Link>
						<Link
							to={PathConstants.FACEBOOK}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={facebookImg}
								alt="Logo de Facebook"
								className="footer__social-icon"
							/>
						</Link>
						<Link
							to={PathConstants.TIKTOK}
							target="_blank"
							rel="noopener noreferrer"
						>
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
						Diseñado con &#x2764;&#xfe0e; por &nbsp;
						<Link
							to={PathConstants.SHIMI}
							target="_blank"
							rel="noopener noreferrer"
						>
							@shirleymallea
						</Link>
						&nbsp;para&nbsp;
						<Link
							to={PathConstants.SHOPIFY}
							target="_blank"
							rel="noopener noreferrer"
						>
							@altorrelieve
						</Link>
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
