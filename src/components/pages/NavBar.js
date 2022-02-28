import React from "react";
import images from "../../images/index";
import resume from "../../Assets/Resume-MLP-1pg.pdf";

function NavBar({ currentPage, handlePageChange }) {
	return (
		<nav className="App-link flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
			
			<ul>
				<li className="Nav-links">
					<a
						href="#home"
						onClick={() => handlePageChange("Home")}
					>
						<img src={images.logoPic} className="App-logo" alt="marylogo" width="100"/><span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Mary Lee Prince
            </span>
          </a>
				</li>
				
				<li className="Nav-links">
					<a href="#AboutMe" onClick={() => handlePageChange("AboutMe")}>
						About Me*
					</a>
				</li>
				<li className="Nav-links">
        <a href="#Portflio" onClick={() => handlePageChange("Portfolio")}>
						Portfolio
					</a>
         </li> 
          <li className="Nav-links">
        <a href="#Contact" onClick={() => handlePageChange("Contact")}>
						Contact
					</a>
				</li>
        <li className="Nav-links">
					<a href="https://github.com/Cheez0id">Github</a>
				</li>
				<li className="Nav-links">
					<a href="https://cheez0id.github.io/MaryLeePrince-portfolio1/">Original Portfolio*</a>
				</li>
				<li className="Nav-links">
					<a href={resume} download="Resume-MLP-1pg.pdf"><span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              Download Resume
            </span>
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
