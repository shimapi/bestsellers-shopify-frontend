import { useEffect, useState } from "react";
import "./Nav.scss";
import closeImg from "../../images/close.svg";
import mobileMenuImg from "../../images/mobile-menu.svg";

function Nav() {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
	const [showMenu, setShowMenu] = useState("closed");
	const [menuType, setMenuType] = useState("mobile");

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
		//setShowMenu(isDesktop ? "closed" : "open");
		setMenuType(isDesktop ? "nav__desktop" : "nav__mobile");
	}, [isDesktop]);

	function handleShowMenu() {
		setShowMenu(showMenu === "open" ? "closed" : "open");
	}

	return (
		<nav className={`nav ${menuType}`}>
			<div className="nav__container">
				<div className="nav__logo">
					<h2 className="nav__name">
						<a href="/">BestSellers</a>
					</h2>
					<img
						onClick={handleShowMenu}
						className="nav__menu-switch"
						src={showMenu === "open" ? closeImg : mobileMenuImg}
						alt="menu"
					/>
				</div>
				<div className={`nav__menu nav__${showMenu}`}>
					<div className="nav__menu-item">Más vendidos</div>
					<div className="nav__menu-item">Acerca de</div>
					<div className="nav__menu-item">Visitar Web</div>
				</div>
			</div>
		</nav>
	);
}
export default Nav;
