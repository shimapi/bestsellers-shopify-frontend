import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";
import "./Nav.scss";
import closeImg from "../../images/close.svg";
import mobileMenuImg from "../../images/mobile-menu.svg";

function Nav() {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
	const [showMenu, setShowMenu] = useState("closed");
	const [menuType, setMenuType] = useState("mobile");
	const [selected, setSelected] = useState("");

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth > 768);
			setShowMenu("closed");
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isDesktop]);

	useEffect(() => {
		setMenuType(isDesktop ? "nav__desktop" : "nav__mobile");
	}, [isDesktop]);

	function handleShowMenu() {
		setShowMenu(showMenu === "open" ? "closed" : "open");
		setSelected("");
	}

	function handleHideMenu() {
		setShowMenu("closed");
		setSelected("selected");
	}

	return (
		<nav className={`nav ${menuType}`}>
			<div className="nav__container">
				<div className="nav__logo">
					<h2 className="nav__name">
						<Link to={PathConstants.HOME}>BestSellers</Link>
					</h2>
					<img
						onClick={handleShowMenu}
						className="nav__menu-switch"
						src={showMenu === "open" ? closeImg : mobileMenuImg}
						alt="menu"
					/>
				</div>
				<div className={`nav__menu nav__${showMenu}`}>
					<Link
						to={PathConstants.TOP_PRODUCTS}
						className="nav__menu-link"
						onClick={handleHideMenu}
					>
						<div className={`nav__menu-item ${selected}`}>Más vendidos</div>
					</Link>
					<Link
						to={PathConstants.ABOUT}
						className="nav__menu-link"
						onClick={handleHideMenu}
					>
						<div className={`nav__menu-item ${selected}`}>Acerca de</div>
					</Link>
					<Link
						to={PathConstants.PODIUM}
						className="nav__menu-link"
						onClick={handleHideMenu}
					>
						<div className={`nav__menu-item ${selected}`}>Ver top 3</div>
					</Link>
				</div>
			</div>
		</nav>
	);
}
export default Nav;
