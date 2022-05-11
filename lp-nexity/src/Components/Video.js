import {React,useState,useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './Video.css'
import logo_video from '../images/logo_video.svg'
import icon_rdv from '../images/icon_rdv.svg'

function Video() {
  const [video,setVideo] = useState(false);

  function showvideo() {
    setVideo(true)
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
            <h1>Dernière chance !</h1>
            <h2>En 2023, le Pinel évolue.</h2>
            <p>Découvrez en vidéo vos avantages à investir dès aujourd'hui pour profiter des dernières heures du Pinel actuel.</p>
          </div>
          <button className='grow_spin cta_video '>Je prends rendez-vous <img src={icon_rdv} /></button>
        </div>
        
        <div data-aos="slide-right" onClick={showvideo} className='video_player'>
            <img className='logo_video' src={logo_video} alt='logo video' />
        </div>
        {
          video ? <div data-aos="slide-up" data-aos-duration="800" className='video_modal'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RMgrS_YcK-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoPlay></iframe>
            <div onClick={hidevideo} className='closevideo'>Fermer</div>
        </div> : <></>
        }
        
    </section>
  )
}

export default Video