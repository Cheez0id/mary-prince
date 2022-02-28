import React from "react";
import images from "../../images/index";
import resume from "../../Assets/Resume-MLP-1pg.pdf";

function NavBar({ currentPage, handlePageChange }) {
	return (
		<nav className="App-header App-link ">
			<ul className="flex items-center ">
				<li className="Nav-links">
					<a
						href="#home"
						onClick={() => handlePageChange("Home")}
					>
						<img src={images.logoPic} className="App-logo" alt="marylogo" />
            Mary Prince</a>
				</li>
				
				<li className="Nav-links">
					<a href="#AboutMe" onClick={() => handlePageChange("AboutMe")}>
						About Me*
					</a>
				</li>
				<li className="Nav-links">
        <a href="#Portflio" onClick={() => handlePageChange("Portfolio")}>
						Portfolio*
					</a>
				</li>
        <li className="Nav-links">
					<a href="https://github.com/Cheez0id">Github</a>
				</li>
				<li className="Nav-links">
					<a href="https://cheez0id.github.io/MaryLeePrince-portfolio1/">Original Portfolio*</a>
				</li>
				<li className="Nav-links">
					<a href={resume} download="Resume-MLP-1pg.pdf">
						Download Resume
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
