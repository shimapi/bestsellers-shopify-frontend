import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch.jsx";
import Footer from "../Footer/Footer.jsx";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Layout = () => {
	return (
		<div className="app">
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
