import { useEffect, useState } from "react";
import "./Nav.scss";
import MobileMenu from "../MobileMenu/MobileMenu";

function Nav() {
	// const [isClosed, setIsClosed] = useState(true);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
	const [showMenu, setShowMenu] = useState("nop");

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth > 768);
			/* 			if (!isDesktop) {
				setIsClosed(false);
			} */
		};
		window.addEventListener("resize", handleResize);
		console.log(isDesktop, "isDesktop");
		console.log(window.innerWidth > 768, "window.innerWidth > 768");

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isDesktop]);

	useEffect(() => {
		setShowMenu(isDesktop ? "closed" : "open");
	}, [isDesktop]);

	return (
		<div className="nav">
			<div className="nav__logo">
				<a>BestSellers</a>
				<MobileMenu isShowMenu={showMenu} />
			</div>
			<div className={`nav__menu ${showMenu}`}>
				<div className="nav__menu-item">Más vendidos</div>
				<div className="nav__menu-item">Acerca de</div>
				<div className="nav__menu-item">Visitar Web</div>
			</div>
		</div>
	);
}
export default Nav;
