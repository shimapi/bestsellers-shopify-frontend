import { useState, useEffect } from "react";

const ThemeSwitch = () => {
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	useEffect(() => {
		document.body.className = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<button onClick={toggleTheme} className={theme}>
			Cambiar tema
		</button>
	);
};

export default ThemeSwitch;
