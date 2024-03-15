import "./Page404.scss";
import { Link } from "react-router-dom";
import PathConstants from "@/routes/pathConstants";

const Page404 = () => {
	return (
		<section className="not-found">
			<h2 className="not-found__title">Oh oh! :S</h2>
			<p className="not-found__description">Parece que esta página no existe</p>

			<img
				className="not-found__image"
				src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWg1OXF5NnNuN202ZW9uMGt6bzZwZHRvdWJvaWI1amd0bmYzejVnZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JsE9qckiYyVClQ5bY2/giphy.gif"
				alt="Not found 404 error"
			/>

			<p className="not-found__text">
				Puedes volver al inicio haciendo &nbsp;
				<Link to={PathConstants.HOME}>click aquí :)</Link>
			</p>

			<p className="not-found__text">[Error 404]</p>
		</section>
	);
};

export default Page404;
