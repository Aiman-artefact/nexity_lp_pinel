import {React,useEffect,useState} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './Hero_banner.css'
import logo_inclusive from '../images/pack_inclusive.svg'
import arrow_btn from '../images/arrow_carousel.svg'


function Hero_banner(props) {
  
  

  useEffect(() => { 
    AOS.init();
    AOS.refresh();

   }, [])
  return (
    <section id='container_hero_banner'>
        <div className='hero_banner'>
            <div data-aos="fade-down" data-aos-duration="1000" className='hero_banner_description'>
                <span>Pour réduire vos</span> <span>impôts mieux</span> <span>vaut <span className='now-style'>maintenant</span></span><span>que jamais.</span>

                <div className='description_deskt'><div>POUR REDUIRE VOS IMPÔTS,</div><div>MIEUX VAUT <span className='now-style'>MAINTENANT</span> QUE JAMAIS.</div></div>

                <button onClick={props.toggleform} className='grow_spin cta_hero' >J'en profite <img className='' src={arrow_btn} /></button>
            </div>
            <img data-aos="zoom-in" data-aos-duration="1000" src={logo_inclusive} alt='pack all inclusive' />
        </div>

        <div className='bg_box'></div>
       
        
    </section>
  )
}

export default Hero_banner