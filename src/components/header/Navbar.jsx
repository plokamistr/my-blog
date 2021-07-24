import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar">
			<Link to="/">
				<h1>GK Blog</h1>
			</Link>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/blog">Blog</Link>
				<Link to="/create">Create a new Post</Link>
			</div>
		</nav>
	);
}

export default Navbar;
