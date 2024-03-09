import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PathConstants from "@/routes/pathConstants.js";
import "./App.scss";
import Main from "../Main/Main.jsx";
import TopProducts from "../TopProducts/TopProducts.jsx";
import Layout from "../Layout/Layout.jsx";
import About from "../About/About.jsx";
import Page404 from "../Page404/Page404.jsx";
import Product from "../Product/Product.jsx";
import Fetch from "../Fetch/Fetch";
import Home from "../Home/Home";

function App() {
	const BrowserRouter = createBrowserRouter([
		{
			element: <Layout />,

			errorElement: <Page404 />,

			children: [
				{
					path: PathConstants.HOME,
					element: <Home />,
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
					path: PathConstants.PRODUCT, // + ":id",
					element: <Product />,
				},
				{
					path: PathConstants.PRODUCTS,
					element: <TopProducts />,
				},
				{
					path: PathConstants.PODIUM,
					element: <Main />,
				},
				{
					path: PathConstants.FETCH,
					element: <Fetch />,
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
