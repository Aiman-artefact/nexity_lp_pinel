import {React,useState} from 'react'
import Form from './Form'
import './Primo2_invest.css'
import arrow_btn from '../images/arrow_carousel.svg'
import inclusive from '../images/inclusive_rotate.svg'

function Primo2_invest(props) {
    function hideform(){
        
        window.dataLayer.push({
            "event" : "uaevent",
            'eventCategory' : 'Pinel',
            'eventAction' : 'clic-CTA',
            'eventLabel' : 'decouvrir_loffre'
            })
          props.toggleform()  
    }
  return (
    <section id='primo2_invest'>
        <div className='container_primo2_header'>
            <div className='primoinvest2_header'>
                <div className='primoinvest2_header_description'>
                    <span>J'investis l'esprit </span><br/><span><span className='now-style'>tranquille</span></span>
                </div>
            </div>
            <div className='bginvest_box'></div>
            <div className='primoinvest2_inclusive'>
               <img src={inclusive} /> 
               <div>OFFERT<sup>(1)</sup></div>
            </div>
            
        </div>
        
        <div className='primo2_description'>
            <h1>Profitez du pack Sérénité Invest’ offert </h1>
            <h2>Nexity offre le pack Investisseur le plus complet du marché !<sup>(7)</sup></h2>
            <p><strong>Nexity s’occupe de tout :</strong> de la recherche du bien, son aménagement, son bon financement, jusqu’à la garantie de trouver le bon locataire et de percevoir ses loyers tous les mois ! Et en plus, une fois votre appartement loué, Nexity vous apport des garanties en cas d’imprévus. Tout ça est inclus<sup>(1)</sup>… mais que pour les 300 premiers investisseurs !</p>
            <button onClick={hideform}  className='grow_spin cta_primo2'>Je profite de l’offre<img src={arrow_btn}/></button>
        </div>
    </section>
  )
}

export default Primo2_invest