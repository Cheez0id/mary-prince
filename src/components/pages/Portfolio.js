import React from 'react';
import images from "../../images/index";



export default function Portfolio() {
    return (
      <div className= "App-body longbox bg-cover bg-fixed flex-wrap ">
           <div className='leading-loose longbox space-x-5 '>
               <h1><span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-pink-500 to-purple-500 hover:no-underline Nav-links font-bold shadow-lg">
              Personal Projects
            </span></h1>
               <a className="App-link inline-flex" href="https://epimoodtracker.herokuapp.com/"><img src={images.epiMood} className="shadow-lg inlineImage" alt="epimoodlogo" width="200"/>
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/EpiMood" alt="repo">> Repo</a>
                <iframe src="https://drive.google.com/file/d/14flS4Oj-f50S8AWWzbh7lSEEbSpgph-c/preview" width="640" height="480" allow="autoplay"></iframe>
           </div>

           <div className='leading-loose longbox space-x-5 '>
           <h1><span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-pink-500 to-purple-500 hover:no-underline Nav-links font-bold shadow-lg">
              Group Projects
            </span></h1>
               <a className="App-link inline-flex" href="https://cookies-for-coders-mary.herokuapp.com"><img src={images.cookies} className="shadow-lg inlineImage" alt="cookies" width="200"/>
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/Full_Stack_Store" alt="repo">> Repo</a>
           <a className="App-link inline-flex" href="https://cheez0id.github.io/Charity-Locator-Project-P1G7"><img src={images.foodFinder} className="shadow-lg inlineImage" alt="charitylocator" width="200"/>
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/Full_Stack_Store" alt="repo">> Repo</a>
           </div>
           <div className='leading-loose longbox space-x-5 '>
           <h1><span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-pink-500 to-purple-500 hover:no-underline Nav-links font-bold shadow-lg">
              Coursework
            </span></h1>
               <a className="App-link inline-flex" href="https://drive.google.com/file/d/15JwRFydPZ_h_6FmCOo9AcucGXar4Po4K/view?usp=sharing"><img src={images.social} className="shadow-lg inlineImage" alt="socialnetwork" width="200"/>
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/social_network_API" alt="repo">> Repo</a>
               <a className="App-link inline-flex" href="https://cheez0id.github.io/Weather-Dashboard-Homework"><img src={images.weather} className="shadow-lg inlineImage" alt="weather dashboard" width="200"/>
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/Weather-Dashboard-Homework" alt="repo">> Repo</a>
          
               <a className="App-link inline-flex" href="https://drive.google.com/file/d/1NSTo07dxxTOB-uQCsocjfNLQFtiy8Y08/view?usp=sharing"><img src={images.employee} className="shadow-lg inlineImage" alt="employeeCMS" width="200"/>
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/Employee_CMS" alt="repo">> Repo</a>
           </div>

                
    </div>
    )
  };


