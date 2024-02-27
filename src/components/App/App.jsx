import Main from "../Main/Main";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch.jsx";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Nav />
			<Header />
			<Main />
			<ThemeSwitch />
		</div>
	);
}

export default App;
