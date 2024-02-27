import { useState, useEffect } from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const checkSize = () => {
			setIsDesktop(window.innerWidth > 768);
		};

		window.addEventListener("resize", checkSize);

		return () => {
			window.removeEventListener("resize", checkSize);
		};
	}, []);

	useEffect(() => {
		if (isDesktop) {
			setIsOpen(false);
		}
	}, [isDesktop]);

	return (
		<nav>
			{!isDesktop && <button onClick={toggleMenu}>☰</button>}
			{(isOpen || isDesktop) && (
				<ul>
					<li>
						<a href="#">Link 1</a>
					</li>
					<li>
						<a href="#">Link 2</a>
					</li>
					<li>
						<a href="#">Link 3</a>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
