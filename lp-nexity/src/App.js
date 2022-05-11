import React, { useState, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css';
import Carousel from './Components/Carousel';
import Carousel_deskt from './Components/Carousel_deskt';
import Header from './Components/Header';
import Hero_banner from './Components/Hero_banner';
import Primo1_invest from './Components/Primo1_invest';
import Primo2_invest from './Components/Primo2_invest';
import Simulateur from './Components/Simulateur';
import Video from './Components/Video';
import Nexity_Stat from './Components/Nexity_Stat';
import Trustpilot from './Components/Trustpilot';
import Contact from './Components/Contact';
import Map from './Components/Map';

function App() {

  const [width, setWindowWidth] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(1);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      console.log(scrollPosition)
  };
   useEffect(() => { 

    window.addEventListener('scroll', handleScroll, { passive: true });
    if(scrollPosition > 150)
    {
      document.getElementById("header_none").style.display = 'block'
      document.getElementById("header_none").classList.add("header_fixed")
    }
    else
    {
      document.getElementById("header_none").style.display = 'none'
    }
     AOS.init();
     AOS.refresh();
     updateDimensions();

     window.addEventListener("resize", updateDimensions);
     return () => {
       window.removeEventListener("resize",updateDimensions);
       window.removeEventListener('scroll', handleScroll);
     }
       
    }, [scrollPosition])

    const updateDimensions = () => {
      const width = window.innerWidth
      setWindowWidth(width)
    }


  return (
    <main className="App">
      <div id='header_fixed' data-aos="fade"><Header/></div>
      <div id='header_none' data-aos="fade"><Header/></div>
      <div data-aos="fade"><Hero_banner /></div>
      <Video />
      <div data-aos="zoom-in"><Simulateur /></div>
      <div data-aos="fade-down"><Primo1_invest /></div>
      <div data-aos="zoom-in"><Primo2_invest /></div>
      {
        width>1023 ? <div data-aos="slide-right"><Carousel_deskt /></div> : <div data-aos="slide-right"><Carousel /></div>
      }
      <Map />
      <Nexity_Stat />
      <Trustpilot />
      <Contact />
    </main>
  );
}

export default App;
