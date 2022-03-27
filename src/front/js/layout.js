import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Events } from "./pages/events";
import { Fightersignup } from "./pages/fightersignup";
import { News } from "./pages/news";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/news">
							<News />
						</Route>
						<Route exact path="/events">
							<Events name="Fight 1: Miami" date="8/8/2022 at 8:00PM" location="American Airlines Arena"/>
							<Events name="Fight 2: Miami" date="10/12/2022 at 6:00PM" location="American Airlines Arena"/>
							<Events name="Fight 3: New York" date="12/25/2022 at 6:00PM" location="Madison Square Garden"/>
						</Route>
						<Route exact path="/fightersignup">
							<Fightersignup />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
