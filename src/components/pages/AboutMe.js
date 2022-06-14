import React from 'react';
import images from "../../images";



export default function AboutMe() {
  return (
    <div className= "App-body longbox bg-cover bg-fixed">
      <div className='leading-loose mt-20'>
      <img src={images.signature} alt="bootstrap" width="200"/>
        <p> Hi!
            My name is Mary Lee Prince. I started coding December 2021, and you can see by the content of my portfolio
            that I am advancing quickly.  I am currently working part-time as a Teacher's Assistant for the Georgia Tech Full Stack Web Development Flex Bootcamp from which I obtained my certificate March 2022.
            I also have excellent references available upon request. 
            I left a 9 year career in
            background screening to learn these new skills for self-improvement and to find employment with good
            compensation while maintaing healthy work-life balance.
    </p>
    <img src={images.traditional} className="shadow-lg inlineImage" alt="mary" />
    </div>
    
  </div>
  )
};