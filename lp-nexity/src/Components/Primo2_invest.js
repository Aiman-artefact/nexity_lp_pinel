import {React,useState} from 'react'
import Form from './Form'
import './Primo2_invest.css'

function Primo2_invest(props) {

  return (
    <section id='primo2_invest'>
        <div className='container_primo2_header'>
            <div className='primoinvest2_header'>
                <div className='primoinvest2_header_description'>
                    <span>J'investis l'esprit </span><br/><span><span className='now-style'>tranquille</span></span>
                </div>
            </div>
            <div className='bginvest_box'></div>
        </div>
        
        <div className='primo2_description'>
            <h1>Profitez du pack Primo Invest’ offert </h1>
            <h2>Nexity : le seul promoteur qui accompagne l'investisseur de A à Z !</h2>
            <p>Investissez aujourd’hui pour bénéficier des taux très avantageux du Pinel actuel. Seulement jusqu'au 17 juillet et pour les 300 premiers logements.</p>
            <button onClick={props.toggleform}  className='grow_spin cta_primo2'>Je profite de l’offre</button>
        </div>
    </section>
  )
}

export default Primo2_invest