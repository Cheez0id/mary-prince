import React from "react";
import "./App.css";
import images from "./images/index.js";
import NavBar from "../src/components/NavBar";
import AboutMe from "../src/components/AboutMe";
import Portfolio from "../src/components/Portfolio";

function App() {
	return (
		<div className="App">
			<header>
				<NavBar />
			</header>
			<body className="App-body longbox">
			<AboutMe />
								
			</body>
		</div>
	);
}

export default App;
