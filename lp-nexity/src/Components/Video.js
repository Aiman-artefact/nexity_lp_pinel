import {React,useState,useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './Video.css'
import logo_video from '../images/logo_video.svg'
import arrow_btn from '../images/arrow_black.svg'

function Video() {
  const [video,setVideo] = useState(false);
  const [overlay,setOverlay] = useState(false);


  function showvideo() {
    setVideo(true)
    window.dataLayer.push({
      "event" : "uaevent",
      'eventCategory' : 'Pinel',
      'eventAction' : 'clic-CTA',
      'eventLabel' : 'lancer_la_video'
      })
      
  }
  function hidevideo() {
    setVideo(false)
  }


  useEffect(() => { 
    AOS.init();
    AOS.refresh();
   }, [])
  return (
    <section id='container_video'>
        <div data-aos="zoom-in">
          <div className='video_description'>
            <h1>Le savez vous ?</h1>
            <h2>En 2023, la réduction d’impôts PINEL évolue.<sup>(2)</sup> </h2>
            <p>Découvrez en vidéo vos avantages à investir dès aujourd'hui pour profiter des dernières heures du Pinel actuel.<sup>(2)</sup></p>
          </div>
          <button onClick={showvideo} className='cta_video'><img src={arrow_btn} />Lancer la vidéo </button>
          <p className='video_respect'>*Le non-respect des engagements de location entraîne la perte du bénéfice des incitations fiscales.</p>
        </div>
        
        <div data-aos="slide-right" onClick={showvideo} className='video_player'>
            <img className='logo_video' src={logo_video} alt='logo video' />
        </div>
        {
          video ? <div className='video_modal'>
                    {/* {
                       <div className='overlay'>
                          <p>Veuillez accepter les cookie pls</p>
                          <button className='grow_spin cta_overlay'>Accepter</button>
                          <div onClick={hidevideo} className='closevideo'>Fermer</div>
                       </div>
                    } */}
                    <iframe id='iframe' width="560" height="315" src="https://www.youtube.com/embed/3PS70ctlleg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div onClick={hidevideo} className='closevideo'>Fermer</div>
                  </div> : <></>
        }
        
    </section>
  )
}

export default Video