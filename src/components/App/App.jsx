import Nav from "../Nav/Nav";
import "./App.scss";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";

function App() {
	return (
		<div className="App">
			<Nav />
			<ThemeSwitch />
			<MobileMenu />
		</div>
	);
}

export default App;
