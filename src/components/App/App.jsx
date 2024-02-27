import Main from "../Main/Main";
import Nav from "../Nav/Nav";
import "./App.scss";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch.jsx";

function App() {
	return (
		<div className="App">
			<Nav />
			<Main />
			<ThemeSwitch />
		</div>
	);
}

export default App;
