import React from 'react';
import './Hero.css';

function Hero(){
  return(
    <div className="hero">    
      <div id="leftHero" className="leftHero">
        <div className="titleLeftHero">
          <h1>Juan Hernandez</h1>
          <h3>Tatuador</h3>
        </div>
        <div className="contactLeftHero">
          <h3>Bogota, Colombia</h3>
          <h3>+57 3-- -------</h3>
        </div>
      </div>
      <div className='rightHero'>
        <div className="imgContainer">
          
        </div>
      </div>
    </div>
  );
}

export default Hero;