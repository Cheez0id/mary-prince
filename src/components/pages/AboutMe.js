import React from 'react';
import images from "../../images";



export default function AboutMe() {
  return (
    <div className= "App-body longbox bg-cover bg-fixed">
      <div className='leading-loose mt-20'>
       
        <p> Hi!
            My name is Mary Lee Prince. I started coding December 2021, and you can see by the content of my portfolio
            that I am advancing quickly.
            I also have excellent references available upon request. 
            I am attending the Georgia Tech Full Stack Web Development Flex Bootcamp; I left a 9 year career in
            background screening to learn these new skills for self-improvement and to find employment with good
            compensation while maintaing healthy work-life balance.
    </p>
    <img src={images.traditional} className="shadow-lg inlineImage" alt="mary" />
    </div>
    
  </div>
  )
};