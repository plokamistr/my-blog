import React from "react";
import { Link } from "react-router-dom";

function NotFound404() {
	return (
		<div className="not-found">
			<h2>Sorryyy....</h2>
			<p>That page you are looking for cannot be found at the moment.</p>
			<Link to="/">Return back to homepage</Link>
		</div>
	);
}

export default NotFound404;
