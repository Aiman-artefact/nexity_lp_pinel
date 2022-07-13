import React from 'react'
import './Nexity_Stat.css'

function Nexity_Stat() {
  return (
    <section id='nexity_stat'>
        <h1>Des logements de qualité pour investissement de longue durée</h1>
        <p>Nous mettons tout notre savoir-faire à votre service pour vous proposer l'investissement qui vous correspond.</p>
        <div className='nexity_stat_cards'>
            <div className='nexity_stat-card'>
                <div className='stat-style'>+3000</div>
                <p>Investisseurs accompagnés par an<sup>(5)</sup></p>
            </div>

            <div className='nexity_stat-card'>
                <div className='stat-style'>94%</div>
                <p>De nos logements sont équipés d'un espace extérieur<sup>(6)</sup></p>
            </div>
  
            <div className='nexity_stat-card'>
                <div className='stat-style'>1er</div>
                <p>acteur de l’immobilier en France<sup>(7)</sup></p>
            </div>

            <div className='nexity_stat-card'>
                <div className='stat-style'>1</div>
                <p>million de clients particuliers<sup>(8)</sup></p>
            </div>
        </div>              
 
    </section>
  )
}

export default Nexity_Stat