import React from "react";
import images from "../../images/index";
import resume from "../../Assets/MLPResume2022.pdf";

function NavBar({ currentPage, handlePageChange }) {
	return (
		<nav className="App-link  justify-center   mx-14   sm:py-5  inline-flex ">
			<ul className="abolute">
				<li className="Nav-links">
					<a href="#home" onClick={() => handlePageChange("Home")}>
						<img
							src={images.logoPic2}
							className="App-logo shadow-lg my-10"
							alt="marylogo"
							width="150"
						/>
						
						Full-Stack Developer
					</a>
				</li>

				<li className="Nav-links">
					<a href="#Portflio" onClick={() => handlePageChange("Portfolio")}>
						<span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-pink-500 to-purple-500 hover:no-underline Nav-links font-bold text-2xl hover:text-white">
							Portfolio
						</span>
					</a>
				</li>
				<li className="Nav-links">
					<a href="#AboutMe" onClick={() => handlePageChange("AboutMe")}>
						About Me
					</a>
				</li>
				<li className="Nav-links font-bold">
					<a href="#Contact" onClick={() => handlePageChange("Contact")}>
						Contact
					</a>
				</li>

				<li className="Nav-links">
					<a href="https://github.com/Cheez0id">Github</a>
				</li>


				<li className="Nav-links">
					<a href={resume} download="MLPResume2022.pdf">
						<button
							class="bg-gradient-to-r from-purple-800 to-teal-500 hover:from-pink-500 hover:to-teal-500 text-white py-2 px-2 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out shadow-lg absolute"
							type="button"
						>
							Download Resume
						</button>
					</a>
				</li>
			
			</ul>
		</nav>
	);
}


export default NavBar;
