import React from 'react';
import images from "../../images/index";


export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav className= "App-header App-link ">


    <ul className="flex items-center ">
      <li><a className='Nav-links' href="/" onClick={() => handlePageChange('Home')}><img src={images.logoPic} className="App-logo" alt="marylogo"/></a></li>
      <li className='Nav-links'><a href="/">Mary Prince</a></li>
      <li className='Nav-links'><a href="/AboutMe" onClick={() => handlePageChange('AboutMe')}>About Me*</a></li>
      <li className='Nav-links'><a href="https://github.com/Cheez0id/mary-prince">Portfolio*</a></li>
      <li className='Nav-links'><a href="https://github.com/Cheez0id">Contact*</a></li>
      <li className='Nav-links'><a href="https://cheez0id.github.io/MaryLeePrince-portfolio1/">Resume</a></li>
    </ul>
    </nav>
  )
}