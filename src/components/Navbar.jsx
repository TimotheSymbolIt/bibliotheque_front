import React from "react";
import "../styles/components/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<h1>Bibliothèque ForEach</h1>
			<ul>
				<Link className="navbar_link" to="/add-book">
					Ajouter un livre
				</Link>
			</ul>
			<ul>
				<Link className="navbar_link" to="/login">
					Connexion
				</Link>
				<Link className="navbar_link" to="/signup">
					Inscription
				</Link>
			</ul>
		</div>
	);
};

export default Navbar;
