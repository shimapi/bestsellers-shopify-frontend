import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PathConstants from "../../routes/pathConstants.js";
import "./App.scss";
import Main from "../Main/Main.jsx";
import TopProducts from "../TopProducts/TopProducts.jsx";
import Layout from "../Layout/Layout.jsx";
import About from "../About/About.jsx";
import Page404 from "../Page404/Page404.jsx";

function App() {
	const BrowserRouter = createBrowserRouter([
		{
			element: <Layout />,

			errorElement: <Page404 />,

			children: [
				{
					path: PathConstants.HOME,
					element: <Main />,
				},
				{
					path: PathConstants.TOP_PRODUCTS,
					element: <TopProducts />,
				},
				{
					path: PathConstants.ABOUT,
					element: <About />,
				},

				{
					path: "*",
					element: <Page404 />,
				},
			],
		},
	]);
	return <RouterProvider router={BrowserRouter} />;
}

export default App;
