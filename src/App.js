import React from "react";
import "./App.css";
import images from "./images/index.js";
import NavBar from "../src/components/NavBar";

function App() {
	return (
		<div className="App">
			<header>
				<NavBar />
			</header>
			<body className="App-body longbox">
				<p>
					<img src={images.logoPic} alt="marylogo"/>
				</p>
				
			</body>
		</div>
	);
}

export default App;
