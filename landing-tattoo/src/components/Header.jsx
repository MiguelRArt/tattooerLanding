import React, { useEffect } from 'react';
import './Header.css';

function Header(){

  useEffect(() => {
    document.getElementById("iconDark").addEventListener("click", ()=>{
      document.getElementById("iconWhite").classList.remove("hidden");
      document.getElementById("iconDark").classList.add("hidden");    
      document.getElementById("leftHero").classList.add("darkMode-hero");
      document.getElementById("movableElement").style.backgroundColor = "white";           
      document.getElementById("iconWhite").style.color ="white";
      document.getElementById("home").style.color ="white";
      document.getElementById("hiddenContainer").style.backgroundColor ="white";
      document.getElementById("a1").style.color ="black";
      document.getElementById("a2").style.color ="black";
      document.getElementById("a3").style.color ="black";
    });

    document.getElementById("iconWhite").addEventListener("click", ()=>{
      document.getElementById("iconWhite").classList.add("hidden");
      document.getElementById("iconDark").classList.remove("hidden"); 
      document.getElementById("leftHero").classList.remove("darkMode-hero");
      document.getElementById("movableElement").style.backgroundColor = "black";
      document.getElementById("home").style.color ="black";
      document.getElementById("hiddenContainer").style.backgroundColor ="#181818";
      document.getElementById("a1").style.color ="white";
      document.getElementById("a2").style.color ="white";
      document.getElementById("a3").style.color ="white";
    });

    document.getElementById("portfolio").addEventListener("click", ()=>{
      document.getElementById("hiddenContainer").style.opacity ="1";
      document.getElementById("portfolio").style.display = "none";
      document.getElementById("hiddenPortfolio").style.display = "flex";
      document.getElementById("hiddenPortfolio").style.justifyContent = "center";
      document.getElementById("hiddenPortfolio").style.alignItems = "center";
    });

    document.getElementById("hiddenPortfolio").addEventListener("click", ()=>{
      document.getElementById("hiddenContainer").style.opacity ="0";
      document.getElementById("portfolio").style.display = "flex";
      document.getElementById("hiddenPortfolio").style.display = "none";
    });
  },[]);

  return(
    <div className='Header'>
      <div className='leftContainer'>
        <a id="home" href='https://www.youtube.com/' target='blank' className='linksHeader'>
          Home
        </a>
        <button id="contenedorIcon" className="darkMode" type='button'>
          <ion-icon id="iconDark" name="moon-outline"></ion-icon>          
          <ion-icon class="hidden" id="iconWhite" name="sunny-outline"></ion-icon>           
        </button>
      </div>

      <div className='rightContainer'>        
        <div className="portfolioOptions">
          <div className="aContainer">            
            <a id="portfolio" href='#' className='linksHeader'>
              Portfolio
              <ion-icon name="chevron-down-outline"></ion-icon>            
            </a>

            <a id="hiddenPortfolio" href='#' className='linksHeader'>
              Portfolio
              <ion-icon name="chevron-down-outline"></ion-icon>            
            </a>
          </div>


          <div id="hiddenContainer" className="hiddenContainer">
            <a id="a1" href="#">Small Tattoos</a>
            <a id="a2" href="#">Healed Tattos</a>
            <a id="a3" href="#">Full Portfolio</a>
          </div>
        </div> 

        <a href='#' className='linksHeader'>
          About me
        </a>
        <a href='#' className='linksHeader'>
          Available
        </a>
        <a href='#' className='linksHeader'>
          Contact
        </a>        
      </div>      

      
    </div>
  );
}

export default Header;