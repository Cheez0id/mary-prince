import React from "react";
import images from "../../images/index";
import resume from "../../Assets/Resume-MLP-1pg.pdf";

function NavBar({ currentPage, handlePageChange }) {
	return (
		<nav className="App-link flex justify-center lg:items-start overflow-y-hidden mx-14   sm:py-5  absolute ">
			
			<ul>
				<li className="Nav-links">
					<a
						href="#home"
						onClick={() => handlePageChange("Home")}
					>
						<img src={images.logoPic2} className="App-logo" alt="marylogo" width="100"/><span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-pink-500 to-purple-500 hover:no-underline font-bold text-2xl lg:text-2xl">
              Mary Lee Prince
            </span>
          </a>
				</li>
				
				<li className="Nav-links font-bold">
					<a href="#AboutMe" onClick={() => handlePageChange("AboutMe")}>
						About Me*
					</a>
				</li>
				<li className="Nav-links font-bold">
        <a href="#Portflio" onClick={() => handlePageChange("Portfolio")}>
						Portfolio
					</a>
         </li> 
          <li className="Nav-links font-bold">
        <a href="#Contact" onClick={() => handlePageChange("Contact")}>
						Contact
					</a>
				</li>
        <li className="Nav-links font-bold">
					<a href="https://github.com/Cheez0id">Github</a>
				</li>
				<li className="Nav-links">
					<a href="https://cheez0id.github.io/MaryLeePrince-portfolio1/">Original Portfolio*</a>
				</li>
				<li className="Nav-links">
					<a href={resume} download="Resume-MLP-1pg.pdf">
                          
						<button class="bg-gradient-to-r from-purple-800 to-teal-500 hover:from-pink-500 hover:to-teal-500 text-white font-bold py-2 px-2 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out" type="button">
                Download Resume
              </button>
					</a>
				</li>
			</ul>
			
		</nav>
	);
}

export default NavBar;
