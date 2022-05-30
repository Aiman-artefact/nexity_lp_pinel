import React, { useState, useEffect, } from 'react'
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
import Form from './Components/Form';
import Footer from './Components/Footer';


function App() {

  const [width, setWindowWidth] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(1);
  const [showform,setShowform] = useState(false)
  const [datalayer,setDatalayer] = useState(0)
  function toggleform () {
    if(showform == false)
    {
      window.dataLayer.push({
        "cookie_statut": "oui",
        "categorie_page": "formulaire",
        "env_site": "web",
        "env_working": "prod",
        "event": "virtualpage",
        "langue": "fr",
        "nom_page": "FORM_con_pinel",
        "univers": "b2c",
        "univers_nexity": "nfr",
        "user_logged": "non",
        "virtualpage_url": "/virtual/formulaire/FORM_con_pinel",
        "virtualpagetitle": "formulaire_pinel"
      })
    }
    setShowform(!showform)
  }

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
   useEffect(() => { 
    if(datalayer == 0)
    {
      setTimeout(function() {
        window.dataLayer.push({
        "cookie_statut" : "oui",
        "env_site" : "web",
        "env_working" : "prod",
        "langue" : "fr",
        "univers_nexity" : "nfr",
        "univers" : "b2c",
        "categorie_page" : "LP Pinel",
        "nom_page" : "LP Pinel",
        })
      },2000)
      
      setDatalayer(1)  
    } 
    updateDimensions();
    window.addEventListener('scroll', handleScroll, { passive: true });
    if(scrollPosition > 150 && width>1024)
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
      {
        width > 1024 ?
        <>
          <div id='header_fixed' data-aos="fade"><Header toggleform={toggleform}/></div>
          <div id='header_none' data-aos="fade"><Header toggleform={toggleform}/></div>
        </>
        :
        <>
          <div data-aos="fade"><Header toggleform={toggleform}/></div>
          <div id='header_none' data-aos="fade"><Header toggleform={toggleform}/></div>
        </>
        
      }
      
      <div data-aos="fade"><Hero_banner toggleform={toggleform} /></div>
      <Video />
      <div data-aos="zoom-in"><Simulateur toggleform={toggleform}/></div>
      <div data-aos="fade-down"><Primo1_invest toggleform={toggleform}/></div>
     
      {
        width>1023 ? <div><Carousel_deskt toggleform={toggleform}/></div> : <div><Carousel toggleform={toggleform}/></div>
      }
      <div data-aos="fade-up"><Map  toggleform={toggleform} width={width}/> </div>
      <div data-aos="fade-down"><Nexity_Stat /></div>
      <div><Primo2_invest toggleform={toggleform}/></div>
      <div data-aos="fade-down"><Contact  toggleform={toggleform}/></div>
      <div data-aos="fade-down"><Trustpilot/></div>
      <Footer  toggleform={toggleform}/>
      <Form toggleform={toggleform} showform={showform}/>
    </main>
  );
}

export default App;
