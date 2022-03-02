import React from 'react';
import images from "../../images/index";



export default function Home() {
  return (
    <div className= "App-home longbox bg-cover bg-fixed space-x-5 flex-wrap">
      <section className= "flex-wrap space-x-5">
        <img src={images.signature} alt="bootstrap" width="200"/>
      <p><ul>
        <li>> Full-Stack Developer - Certificate (Expected 3/9/22)</li>
        <li>> Management Experience</li>
        <li>> Excellent Communicator</li>
        <li>> Agile and Creative</li>        
        </ul>
      </p>
</section>

      
      <div className='leading-loose longbox '>
        <section className='space-x-3 longbox'>
          <a className="App-link inline-flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="https://getbootstrap.com/"><img src={images.bootstrap} className="shadow-lg inlineImage" alt="bootstrap" width="100"/></a>
          <a className="App-link inline-flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="https://expressjs.com/"><img src={images.express} className="shadow-lg inlineImage" alt="bootstrap" width="100"/></a>
          <a className="App-link inline-flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="https://git-scm.com/"><img src={images.git} className="shadow-lg inlineImage" alt="bootstrap" width="100"/></a>
          <a className="App-link inline-flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="https://github.com/Cheez0id"><img src={images.octoCat} className="shadow-lg inlineImage" alt="bootstrap" width="100"/></a>
          <a className="App-link inline-flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="https://handlebarsjs.com/"><img src={images.handlebars} className="shadow-lg inlineImage" alt="bootstrap" width="100"/></a>
          <a className="App-link inline-flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="https://www.javascript.com/"><img src={images.javascript} className="shadow-lg inlineImage" alt="bootstrap" width="100"/></a>
          <a className="App-link inline-flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="https://jestjs.io/"><img src={images.jest} className="shadow-lg inlineImage" alt="bootstrap" width="100"/></a>
          <a className="App-link inline-flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="https://www.mongodb.com/"><img src={images.mongo} className="shadow-lg inlineImage" alt="bootstrap" width="100"/></a>
          <a className="App-link inline-flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="https://nodejs.org/en/"><img src={images.node} className="shadow-lg inlineImage" alt="bootstrap" width="100"/></a>
          <a className="App-link inline-flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="https://reactjs.org/"><img src={images.react} className="shadow-lg inlineImage" alt="bootstrap" width="100"/></a>
          <a className="App-link inline-flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300" href="https://www.mysql.com/"><img src={images.sql} className="shadow-lg inlineImage" alt="bootstrap" width="100"/></a>
          </section>
  
        
    </div>
    
    
  </div>
  )
};