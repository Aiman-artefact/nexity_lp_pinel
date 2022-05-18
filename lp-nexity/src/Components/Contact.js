import React from 'react'
import './Contact.css'
import arrow_btn from '../images/arrow_carousel.svg'


function Contact({toggleform}) {
  return (
    <section id='contact'>
        <p>Vous souhaitez investir dans l'immobilier mais votre projet n'est pas encore concret ? </p>
        <p> Nexity est là pour vous accompagner.</p>
        <button onClick={toggleform} className='grow_spin'>Être contacté<img src={arrow_btn} /></button>
    </section>
  )
}

export default Contact