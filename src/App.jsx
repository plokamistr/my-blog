import React from "react";
import Navbar from "./components/header/Navbar";
import Home from "./components/pages/Home";
import Blog from "./components/pages/Blog";
import PostCreate from "./components/posts/PostCreate";
import PostDetails from "./components/posts/PostDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound404 from "./components/NotFound404";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route exact path="/blog">
							<Blog />
						</Route>
						<Route exact path="/blog/:id">
							<PostDetails />
						</Route>
						<Route exact path="/create">
							<PostCreate />
						</Route>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="*">
							<NotFound404 />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
