import React from 'react'
import './Contact.css'
import icon_rdv from '../images/icon_rdv.svg'

function Contact() {
  return (
    <section id='contact'>
        <p>Vous souhaitez investir dans l'immobilier mais votre projet n'est pas encore concret ? </p>
        <p> Nexity est là pour vous accompagner.</p>
        <button className='grow_spin'><img src={icon_rdv} />Être contacté</button>
    </section>
  )
}

export default Contact