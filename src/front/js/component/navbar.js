import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">MMA NEWS TODAY</span>
				</Link>
				<div className="ml-auto">
					<Link to="/news">
						<button className="btn btn-primary">News</button>
					</Link>
					<Link to="/events">
						<button className="btn btn-primary">Events</button>
					</Link>
					<Link to="/fightersignup">
						<button className="btn btn-primary">Fighter Sign Up</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
