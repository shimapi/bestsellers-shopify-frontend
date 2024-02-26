import "./Nav.scss";

function Nav() {
	return (
		<div className="nav">
			<div className="nav__logo">
				<a>BestSellers</a>
			</div>
			<div className="nav__menu">
				<div className="nav__menu-item">Más vendidos</div>
				<div className="nav__menu-item">Acerca de</div>
				<div className="nav__menu-item">Visitar Web</div>
			</div>
		</div>
	);
}

export default Nav;
