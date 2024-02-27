import { useState, useEffect } from "react";
import "./MobileMenu.scss";
import closeImg from "../../images/close.svg";
import mobileMenuImg from "../../images/mobile-menu.svg";

const MobileMenu = (isShowMenu) => {
	console.log(isShowMenu, "isShowMenu");
	const [menu, setMenu] = useState(localStorage.getItem("menu") || "desktop");
	const [menuSwitchButton, setMenuSwitchButton] = useState(
		`menu-switch ${menu}`
	);

	useEffect(() => {
		localStorage.setItem("menu", menu);
		setMenuSwitchButton(`menu-switch ${menu}`);
	}, [menu]);

	const toggleMenu = () => {
		setMenu(menu === "desktop" ? "mobile" : "desktop");
	};

	return (
		<img
			onClick={toggleMenu}
			className={menuSwitchButton}
			src={menu === "desktop" ? closeImg : mobileMenuImg}
			alt="menu"
		/>
	);
};

export default MobileMenu;
