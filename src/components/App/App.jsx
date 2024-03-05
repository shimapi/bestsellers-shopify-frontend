import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Main from "../Main/Main.jsx";
import TopProducts from "../TopProducts/TopProducts.jsx";
import Layout from "../Layout/Layout.jsx";
import About from "../About/About.jsx";

function App() {
	const BrowserRouter = createBrowserRouter([
		{
			element: <Layout />,

			children: [
				{
					path: "/",
					element: <Main />,
				},
				{
					path: "/top-products",
					element: <TopProducts />,
				},
				{
					path: "/acerca-de",
					element: <About />,
				},
			],
		},
	]);
	return <RouterProvider router={BrowserRouter} />;
}

export default App;
