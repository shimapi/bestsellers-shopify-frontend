import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
	return (
		<div className="app">
			<div className="app__container">
				<Nav />

				<Outlet />

				<Footer />
			</div>
			<ThemeSwitch />
		</div>
	);
};

export default Layout;
