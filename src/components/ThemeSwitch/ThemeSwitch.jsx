import { useState, useEffect } from "react";
import "./ThemeSwitch.css";
import darkImg from "../../images/dark.svg";
import lightImg from "../../images/light.svg";

const ThemeSwitch = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
	const [themeSwitchButton, setThemeSwitchButton] = useState(
		`theme-switch ${theme}`
	);

	useEffect(() => {
		document.body.className = "body-theme__" + theme;
		localStorage.setItem("theme", theme);
		setThemeSwitchButton(`theme-switch ${theme}`);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<img
			onClick={toggleTheme}
			className={themeSwitchButton}
			src={theme === "dark" ? darkImg : lightImg}
			alt="theme"
		/>
	);
};

export default ThemeSwitch;
