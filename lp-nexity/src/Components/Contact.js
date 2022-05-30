import React from 'react'
import './Contact.css'
import arrow_btn from '../images/arrow_carousel.svg'


function Contact({toggleform}) {
  function hideform(){
    
    window.dataLayer.push({
      "event" : "uaevent",
      'eventCategory' : 'Pinel',
      'eventAction' : 'clic-CTA',
      'eventLabel' : 'contact'
      })
     toggleform() 
  }
  return (
    <section id='contact'>
        <p>Vous souhaitez investir dans l’immobilier et concrétiser votre projet mais vous ne savez pas par où commencer ?</p>
        <p> Nexity est là pour vous accompagner.</p>
        <button onClick={hideform} className='grow_spin'>Être contacté<img src={arrow_btn} /></button>
    </section>
  )
}

export default Contact