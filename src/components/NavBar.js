import React from 'react';
import Reggi from '../images/reggi27.png'


export default function NavBar() {
  return (
    <nav className= "App-header App-link">
    <img src={Reggi} className="App-logo " alt="logo" /> 
    
    <ul className="flex items-center">
    
      <li><a className='Nav-links' href="/">Home</a></li>
      <li className='Nav-links'><a href="https://github.com/Cheez0id">Github</a></li>
      <li className='Nav-links'><a href="https://github.com/Cheez0id/mary-prince">To Repo</a></li>
      <li className='Nav-links'><a href="https://github.com/Cheez0id">Github</a></li>
      <li className='Nav-links'><a href="https://cheez0id.github.io/MaryLeePrince-portfolio1/">Original Portfolio</a></li>

    </ul>
    </nav>
  )
}