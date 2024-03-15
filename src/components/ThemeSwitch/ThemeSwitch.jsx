import { useState, useEffect } from "react";
import "./ThemeSwitch.scss";
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
		setThemeSwitchButton(`theme-switch__image ${theme}`);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<div className="theme-switch">
			<img
				onClick={toggleTheme}
				className={themeSwitchButton}
				src={theme === "dark" ? darkImg : lightImg}
				alt="theme"
			/>
		</div>
	);
};

export default ThemeSwitch;
