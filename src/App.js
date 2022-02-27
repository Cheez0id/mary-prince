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

{
	/* 				
				<div>
					<div className="longboxTop">
						<img
							src={IMAGES.reggi27}
							alt="reggie"
							height="100px"
							width="100px"
						/>
						<h1>
							<img
								src={images["MaryPrince.png"]}
								alt="mary's name"
								height="300px"
								width="300px"
							/>
						</h1>
						<ul>
							<li>
								<a href="#footer">Contacts</a>
							</li>
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#bigbox">Coding</a>
							</li>
							<li>
								<a href="https://www.instagram.com/marypaintsart">
									<img
										src={images["instagramname.png"]}
										alt="instagram"
										height="45px"
									/>
								</a>
							</li>
							<ul></ul>
						</ul>
					</div>
					<div>
						<p id="about">
							{" "}
							Hi! My name is Mary Lee Prince. I started coding December 2021,
							and you can see by the content of my portfolio that I am advancing
							quickly. I also have excellent references available upon request.{" "}
							<br />
							<br />
							<br /> I am attending the Georgia Tech Full Stack Web Development
							Flex Bootcamp; I left a 9 year carreer in background screening to
							learn these new skills for self-improvement and to find employment
							with good compensation while maintaing healthy work-life balance.
							<br />
						</p>
						<img
							className="scaleable"
							src={images["traditional.JPG"]}
							alt="mary's profile pic"
						/>
						<div id="bigbox">
							<h2>
								<div id="today">
									Full Stack
									<br />
									<br />
								</div>
							</h2>
						</div>
						<section className="longbox">
							<div className="box">
								<h2>E-Commerce Group Project</h2>
								<a href="https://cookies-for-coders-mary.herokuapp.com">
									<img
										src={images["cookies.png"]}
										alt="e-commerce"
										height="150px"
									/>
								</a>
								<a
									href="https://github.com/Cheez0id/Full_Stack_Store"
									alt="repo"
								>
									Repo
								</a>
							</div>
							<div className="box">
								<h2>Weather Dashboard Homework Github (in progress)</h2>
								<a href="https://cheez0id.github.io/Weather-Dashboard-Homework">
									<img
										src={images["penguin.png"]}
										alt="weather dashboard"
										height="150px"
									/>
								</a>
								<a
									href="https://github.com/Cheez0id/Weather-Dashboard-Homework"
									alt="repo"
								>
									Repo
								</a>
							</div>
							<div className="box">
								<h2>Group Project - Charity Locator</h2>
								<a href="https://cheez0id.github.io/Charity-Locator-Project-P1G7">
									<img
										src={images["FFF.JPG"]}
										alt="group project"
										height="150px"
									/>
								</a>
							</div>
							<div className="box">
								<h2>Group Project - Charity Locator Github</h2>
								<a href="https://github.com/Cheez0id/Charity-Locator-Project-P1G7">
									<img
										src={images["snake.png"]}
										alt="charity locator github"
										height="150px"
									/>
								</a>
							</div>
						</section>
						<div id="footer" className="longbox">
							<br />
							<li>
								<h3>
									<img
										src={images["profilecircle.png"]}
										alt="mary's profile pic"
										height="150px"
									/>
									<br />
									maryleeprince.ga@gmail.com
									<br />
									<button id="maryEmail">Copy</button>
								</h3>
							</li>
							<li className="box">
								<div
									className="badge-base LI-profile-badge"
									data-locale="en_US"
									data-size="medium"
									data-theme="light"
									data-type="VERTICAL"
									data-vanity="mary-prince-005404200"
									data-version="v1"
								>
									<a
										className="badge-base__link LI-simple-link"
										href="https://www.linkedin.com/in/mary-prince-005404200?trk=profile-badge"
									>
										<br />
										Linkedin
									</a>
								</div>
							</li>
							<li className="box">
								<h3>
									<a href="https://github.com/Cheez0id">
										<img
											src={images["Octocat.png"]}
											alt="my github"
											height="150px"
										/>
										<br />
										Github
									</a>
								</h3>
							</li>
							<li className="box">
								<h3>
									<a
										href="assets/Updated Resume docs/Resume-MLP-1pg.pdf"
										download="Resume-MLP-1pg.pdf"
									>
										<img
											src={images["resumejpg.JPG"]}
											alt="charity locator github"
											height="150px"
										/>
										<br />
										Resume
									</a>
								</h3>
							</li>
							<li className="box">
								<h3>Reference Letter and References available upon request!</h3>
							</li>
						</div>
						<img src={images["chameleon.png"]} height="500px" />
					</div>
				</div>
			</body>
		</div>
	);
} */
}

export default App;
