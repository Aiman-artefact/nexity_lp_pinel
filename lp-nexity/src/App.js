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

   useEffect(() => { 
     AOS.init();
     AOS.refresh();
     updateDimensions();

     window.addEventListener("resize", updateDimensions);
     return () => 
       window.removeEventListener("resize",updateDimensions);
    }, [])

    const updateDimensions = () => {
      const width = window.innerWidth
      setWindowWidth(width)
    }


  return (
    <main className="App">
      <div data-aos="fade"><Header /></div>
      <div data-aos="fade"><Hero_banner /></div>
      <Video />
      <div data-aos="zoom-in"><Simulateur /></div>
      <div data-aos="fade-down"><Primo1_invest /></div>
      <div data-aos="zoom-in"><Primo2_invest /></div>
      {
        width>1023 ? <div data-aos="slide-right"><Carousel_deskt /></div> : <div data-aos="slide-right"><Carousel /></div>
      }
      <Nexity_Stat />
      <Trustpilot />
      <Contact />
      <Map />
    </main>
  );
}

export default App;
