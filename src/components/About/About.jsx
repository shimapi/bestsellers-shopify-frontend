import Title from "../Title/Title";
import "./About.scss";

const About = () => {
	return (
		<section className="about">
			<div className="about__container">
				<Title sentence="Sobre nosotros" size="m" />

				<p className="about__text">
					Altorrelieve es una empresa familiar, con tienda online y despacho a
					todo Chile. También despachamos al extranjero.
				</p>

				<p className="about__text">
					Para nosotros son importantes los detalles, nos preocupamos de hacer
					que tu regalo sea especial. Te llamaremos si tenemos dudas con tu
					pedido, nos gusta que todo esté clarito antes de empezar a fabricar.
				</p>

				<p className="about__text">
					Amamos lo que hacemos! Gracias por poner tu confianza en buenas manos!
				</p>
				<section className="about__images">
					<img
						src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJtdTNybjExZnNvbHR5cW5nM3lrNmR3dGZpajliamR4Mm50Mjc5bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PocF8TwWjNdImfZC38/giphy.gif"
						alt="muñecas"
						className="about__image"
						loading="lazy"
					/>
					<img
						src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm1idDJmM25zd3R0ZmhzZXl2NHpuNXB5ZXFyMTd6em5nbThmNTd6ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sPsVN2aQHdqdVCfmpG/giphy-downsized-large.gif"
						alt="cosiendo etiquetas"
						className="about__image"
						loading="lazy"
					/>
					<img
						src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ281NnZkamlmM21lNDltczJ5cDB5aTdiNGg1MDJ5ZGJ1bXVlMWN6cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sBiTdm42sOMH4KN3Ui/giphy-downsized-large.gif"
						alt="zapatitos bebé"
						className="about__image"
						loading="lazy"
					/>
					<img
						src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTRmczc0Nncwa3l4OGgzeWFnZmNpZzlmNmkwdzhxa2s3azRhM2xyMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nSDA51Y1Q0aIznpFtN/giphy.gif"
						alt="zapatillas bebé"
						className="about__image"
						loading="lazy"
					/>
					<img
						src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW95M2l5bThvZGxzaTRqczF0OXAyaDM2aTJjeG51Z2JscWZ1eGNzcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aTfwYNzdxJ7sRrtHL8/giphy.gif"
						alt="etiquetas metalizadas"
						className="about__image"
						loading="lazy"
					/>
					<img
						src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjRsbzRyOGFrc2xnNGZyZXk4cGs0ajJhbmlzb3YycXRjNmx1ZmRmciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sDzFrm28kMA82Tv4Fv/giphy.gif"
						alt="etiquetas amigurumis"
						className="about__image"
						loading="lazy"
					/>
				</section>
			</div>
		</section>
	);
};

export default About;
