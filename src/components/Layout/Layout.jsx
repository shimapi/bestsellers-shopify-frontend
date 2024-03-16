import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Nav/Nav";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch.jsx";
import Footer from "../Footer/Footer.jsx";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Layout = () => {
	const divRef = useRef(null);
	const location = useLocation();

	useEffect(() => {
		if (divRef.current) {
			divRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [location.pathname]);

	return (
		<div className="app" ref={divRef}>
			<div className="app__container">
				<SkeletonTheme baseColor="#666666" highlightColor="#cccccc">
					<Nav />
					<Outlet />
					<Footer />
				</SkeletonTheme>
			</div>
			<ThemeSwitch />
		</div>
	);
};

export default Layout;
