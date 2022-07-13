import React from 'react'
import './Footer.css'
function Footer(props) {
    function showform(e){
        e.preventDefault();
        props.toggleform()
    }

  return (
    <footer>
        <a href='https://www.nexity.fr/actualites/juridique/offres-commerciales' target='_blank'>Conditions générales</a>
        <span>/</span>
        <a href='https://www.nexity.fr/actualites/juridique/offres-commerciales/campagnes-commerciales' target="_blank">Mentions légales</a>
        <span>/</span>
        <a onClick={showform} href='#'>Contactez-nous</a>
        <span>/</span>
        <a href="javascript:Didomi.preferences.show()">Gestion des cookies</a>
    </footer>
  )
}

export default Footer