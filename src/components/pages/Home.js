import React from 'react';
import images from "../../images/index";



export default function Home() {
  return (
    <div className= "App-body longbox bg-cover bg-fixed flex-wrap space-x-5">
      <div className='leading-loose mt-40'><ul>

        <li>> Full-Stack Developer</li>
        <li>> Management Experience</li>
        <li>> Excellent Communicator</li>
        <li>> Agile and Creative</li>
        <li>> Innovative Initative</li>
        </ul>
    </div>
    <div><img src={images.mary} className="shadow-lg inlineImage"/></div>
    
  </div>
  )
};