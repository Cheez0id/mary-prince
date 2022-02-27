import React from 'react';
import images from "../images/index";


export default function NavBar() {
  return (
    <nav className= "App-header App-link">
    
    
    
    <ul className="flex items-center">
    
      <li><a className='Nav-links' href="/"><img src={images.logoPic} className="App-logo " alt="logo" alt="marylogo"/></a></li>
      <li className='Nav-links'><a href="https://github.com/Cheez0id">Github</a></li>
      <li className='Nav-links'><a href="https://github.com/Cheez0id/mary-prince">To Repo</a></li>
      <li className='Nav-links'><a href="https://github.com/Cheez0id">Github</a></li>
      <li className='Nav-links'><a href="https://cheez0id.github.io/MaryLeePrince-portfolio1/">Original Portfolio</a></li>

    </ul>
    </nav>
  )
}