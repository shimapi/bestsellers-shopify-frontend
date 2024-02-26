import { useEffect, useState } from "react";

const ThemeSwitch = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const themeButton = document.getElementById("theme-button");
		const body = document.body;

		const switchTheme = () => {
			if (body.classList.contains("dark-theme")) {
				body.classList.remove("dark-theme");
				body.classList.add("light-theme");
				localStorage.setItem("theme", "light");
				setTheme("light");
			} else {
				body.classList.add("dark-theme");
				body.classList.remove("light-theme");
				localStorage.setItem("theme", "dark");
				setTheme("dark");
			}
		};

		themeButton.addEventListener("click", switchTheme);

		return () => {
			themeButton.removeEventListener("click", switchTheme);
		};
	}, []);
	return theme;
};

export default ThemeSwitch;
