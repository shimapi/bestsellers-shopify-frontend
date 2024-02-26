import Nav from "../Nav/Nav";
import "./App.css";
import switchTheme from "../../utils/switch-theme.jsx";

function App() {
	return (
		<>
			<Nav />
			<button id="theme-button" onClick={switchTheme}>
				Cambiar tema
			</button>
		</>
	);
}

export default App;
