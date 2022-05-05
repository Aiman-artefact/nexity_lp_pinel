import React from 'react'
import './Simulateur.css'
import euro from '../images/euro.svg'
import arrow from '../images/arrow_black.svg'

function Simulateur() {
  return (
    <section id='container_simulateur'>
        <div className='simulateur_header'>
          <div> <h1>COMPARATEUR</h1> <h1 className='simulateur_header-pinel'><span className='pinel_style'>PINEL</span></h1> </div>
          <p>Découvrez les avantages à investir aujourd'hui plutôt qu'en 2023 grâce au Pinel.</p>
          <button className='btn_simulation'><img src={arrow} alt="arrow right"/> Commencer la simulation</button>
        </div>

        <div className='simulateur_action'>
          <div>
            <p>Quel est votre budget ?</p>
            <div>
              <label for='budget'>Budget</label><br/>
              <input type="number" id='budget' name='budget' min="0" placeholder='Votre montant'/>
              <img src={euro} alt='euro logo'/>
            </div>
            
          </div>

          <button className='grow_spin cta_simulateur'>Je valide</button>
        </div>
    </section>
  )
}

export default Simulateur