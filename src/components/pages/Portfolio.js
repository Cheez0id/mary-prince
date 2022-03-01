import React from 'react';
import images from "../../images/index";



export default function Portfolio() {
    return (
      <div className= "App-body longbox bg-cover bg-fixed">
        <div className='leading-loose shadow-2xl longbox '>
                
         <ul>
    <li>Personal Projects</li>       
         <li><a className="App-link inline-flex" href="https://epimoodtracker.herokuapp.com/"><img src={images.epiMood} className="shadow-lg" alt="epimoodlogo" width="150"/>
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/EpiMood" alt="repo">  >Repo</a></li>
    <li>Group Projects</li>
        <li><a className="App-link inline-flex" href="https://cookies-for-coders-mary.herokuapp.com"><img src={images.cookies} className="shadow-lg" alt="epimoodlogo" width="150"/>
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/Full_Stack_Store" alt="repo">  > Group Repo</a></li>
           

    <li>Coursework</li>      
        <li><a className="App-link" href="https://cheez0id.github.io/Weather-Dashboard-Homework">Weather Dashboard
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/Weather-Dashboard-Homework" alt="repo">  >Repo</a></li>    
                           
        <li><a className="App-link" href="https://cheez0id.github.io/Charity-Locator-Project-P1G7">Charity-Locator (Group Project)
                </a>
                <a className="App-link-repo" href="https://github.com/Cheez0id/Charity-Locator-Project-P1G7" alt="repo">  >Repo</a></li> 

        </ul>
                

      
      </div>
    </div>
    )
  };


