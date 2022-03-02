import React from "react";
import images from "../../images";
import moment from 'moment';

export default function Contact() {
	//should copy text onclick
	const emailCopy = () => {
		document
			.getElementById("maryEmail")
			.addEventListener("click", function (event) {
				event.preventDefault();
				navigator.clipboard.writeText("maryleeprince.ga@gmail.com");
			});
	};

 

	return (
		<div className="longbox App-body ">
<div className= "App-body longbox bg-cover bg-fixed flex-wrap ">
<img src={images.signature} alt="bootstrap" width="200"/>

           <div className='app-link leading-loose longbox space-x-5 '>
              <div className="font-bold">maryleeprince.ga@gmail.com <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-pink-500 to-purple-500 shadow-lg hover:text-white ">
               <button id="maryEmail">copy </button>
            </span></div>
               
            <div>
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-pink-500 to-purple-500 hover:no-underline Nav-links font-bold shadow-lg">
               <button><a href="https://www.linkedin.com/in/mary-prince-005404200/"><img className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" src={images.linkedIn} alt="my github" alt="marylogo" width="150"/>Linkedin</a></button>
            </span>
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-pink-500 to-purple-500 hover:no-underline Nav-links font-bold shadow-lg">
               <button><a href="https://github.com/Cheez0id"><img className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" src={images.octoCat} alt="my github" alt="marylogo" width="150"/>Github</a></button>
            </span>
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-pink-500 to-purple-500 hover:no-underline Nav-links font-bold shadow-lg">
               <button><a href="https://www.instagram.com/marypaintsart/"><img  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" src={images.logoMp} alt="instagram" alt="marylogo" width="150"/>Instagram</a></button>
            </span>
            </div>
            

            <div>Reference Letter and References available upon request!</div>
              
           </div>
     </div>


			

			
		
			

		
			
		</div>
	);
}







