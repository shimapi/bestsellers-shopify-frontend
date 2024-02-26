import { useState, useEffect } from "react";
import "./ThemeSwitch.css";
import night from "../images/night.svg";
import light from "../images/light.svg";

const ThemeSwitch = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	useEffect(() => {
		document.body.className = "body-theme__" + theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<img
			onClick={toggleTheme}
			className="theme-switch"
			src={theme === "light" ? light : night}
			alt="theme"
		/>
	);
};

export default ThemeSwitch;
