import React from 'react';
import images from "../../images/index";



export default function Portfolio() {
    return (
      <div className= "App-body longbox bg-cover bg-fixed flex-wrap">
            
           <div className='leading-loose longbox '>
               <h1>Personal Projects</h1>
               <a className="App-link inline-flex" href="https://epimoodtracker.herokuapp.com/"><img src={images.epiMood} className="shadow-lg inlineImage" alt="epimoodlogo" width="150"/>
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/EpiMood" alt="repo">  > Repo</a>
           </div>

           <div className='leading-loose longbox '>
               <h1>Group Project</h1>
               <a className="App-link inline-flex" href="https://cookies-for-coders-mary.herokuapp.com"><img src={images.cookies} className="shadow-lg inlineImage" alt="cookies" width="150"/>
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/Full_Stack_Store" alt="repo">  > Repo</a>
           </div>
           <div className='leading-loose longbox '>
                <h1>Group Project</h1>
           <a className="App-link inline-flex" href="https://cheez0id.github.io/Charity-Locator-Project-P1G7"><img src={images.foodFinder} className="shadow-lg inlineImage" alt="charitylocator" width="150"/>
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/Full_Stack_Store" alt="repo">  > Repo</a>
           </div>
           <div className='leading-loose longbox '>
               <h1>Coursework</h1>
               <a className="App-link inline-flex" href="https://drive.google.com/file/d/15JwRFydPZ_h_6FmCOo9AcucGXar4Po4K/view?usp=sharing"><img src={images.social} className="shadow-lg inlineImage" alt="socialnetwork" width="150"/>
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/social_network_API" alt="repo">  > Repo</a>
           </div>
           <div className='leading-loose longbox '>
               <h1>Coursework</h1>
               <a className="App-link inline-flex" href="https://cheez0id.github.io/Weather-Dashboard-Homework"><img src={images.weather} className="shadow-lg inlineImage" alt="epimoodlogo" width="150"/>
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/Weather-Dashboard-Homework" alt="repo">  > Repo</a>
           </div>
           <div className='leading-loose longbox '>
               <h1>Coursework</h1>
               <a className="App-link inline-flex" href="https://drive.google.com/file/d/1NSTo07dxxTOB-uQCsocjfNLQFtiy8Y08/view?usp=sharing"><img src={images.employee} className="shadow-lg inlineImage" alt="epimoodlogo" width="150"/>
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/Employee_CMS" alt="repo">  > Repo</a>
           </div>

                
    </div>
    )
  };


