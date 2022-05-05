import React from 'react'
import './Nexity_Stat.css'

function Nexity_Stat() {
  return (
    <section id='nexity_stat'>
        <h1>Chez Nexity</h1>
        <p>Nous mettons tout notre savoir-faire à votre service pour vous proposer l'investissement qui vous correspond.</p>
        <div className='nexity_stat_cards'>
            <div className='nexity_stat-card'>
                <div className='stat-style'>+2000</div>
                <p>Investisseurs accompagnés par an</p>
            </div>

            <div className='nexity_stat-card'>
                <div className='stat-style'>94%</div>
                <p>De nos investisseurs nous recommandent</p>
            </div>
  
            <div className='nexity_stat-card'>
                <div className='stat-style'>100%</div>
                <p>De nos biens sont loués</p>
            </div>

            <div className='nexity_stat-card'>
                <div className='stat-style'>100%</div>
                <p>De nos nouveaux logements intègrent un espace extérieur</p>
            </div>
        </div>

        
            
 
    </section>
  )
}

export default Nexity_Stat