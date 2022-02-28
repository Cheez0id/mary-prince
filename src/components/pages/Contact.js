import React from 'react';
import images from "../../images";



export default function Contact() {
  //should copy text onclick
const emailCopy = () =>{document
	.getElementById("maryEmail")
	.addEventListener("click", function (event) {
		event.preventDefault();
		navigator.clipboard.writeText("maryleeprince.ga@gmail.com");
	});};
emailCopy();
  return (
    <div id="footer" class="longbox">

      
        <img src={images.logoPic} alt="mary's profile pic"/>maryleeprince.ga@gmail.com  <button id="maryEmail">Copy</button>
      

    <li class="box">
        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light"
            data-type="VERTICAL" data-vanity="mary-prince-005404200" data-version="v1"><a
                class="badge-base__link LI-simple-link"
                href="https://www.linkedin.com/in/mary-prince-005404200?trk=profile-badge">Linkedin</a>
        </div>
     </li>   
      
    <li class="box">
        <h3><a href="https://github.com/Cheez0id"><img src={images.octoCat}
                    alt="my github" />  Github</a></h3>
    </li>  
    <li class="box">
        <h3><a href="assets/Updated Resume docs/Resume-MLP-1pg.pdf" download="Resume-MLP-1pg.pdf"><img src={images.resume} alt="octocat" />  Resume</a>
        </h3>
    </li> 

    <li class="box">
        <h3>Reference Letter and References available upon request!</h3>
    </li>  


<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>

</div>
  )
};