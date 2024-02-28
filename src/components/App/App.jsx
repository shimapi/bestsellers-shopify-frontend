import Main from "../Main/Main";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch.jsx";
import Footer from "../Footer/Footer.jsx";
import TopProducts from "../TopProducts/TopProducts";
import "./App.scss";

function App() {
	return (
		<div className="app">
			<div className="app__container">
				<Nav />
				<Header />
				<Main />
				<TopProducts />
				<Footer />
			</div>
			<ThemeSwitch />
		</div>
	);
}

export default App;
