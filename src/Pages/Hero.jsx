import React from 'react'
import '../styles/Home/Home.scss'
 

const Hero = () => {
  return (
    <>
      <div id="hero" class="hero route bg-image">
        <div className="backImg"></div>
    <div class="overlay-itro"></div>
    <div class="hero-content ">
      <div class="table-cell">

    

        <div class="container">
           <p class="display-6 color-d">Hello, world!</p> 
          <h1 class="hero-title mb-2 fs-1">I am Abdus Sobur</h1>
          <p class= "">Front End Web Developer</p> 
          <p class="hero-subtitle"><span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
            <p class="pt-3">
              <button class="btn-6 custom-btn   "><span>Hire Me</span></button></p>  
        </div>
        
      </div>
    </div>
  </div> 
    </>
  )
}

export default Hero
