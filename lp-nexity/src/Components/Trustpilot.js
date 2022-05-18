import React from 'react'
import './Trustpilot.css'
import nexity from '../images/logo_nexity.svg'
import trustpilot from '../images/trustpilot.svg'
import trustpilot_rating from '../images/trustpilot_rating.svg'
import info from '../images/info.svg'

function Trustpilot() {
  return (
    <section id='trustpilot'>
        <div className='trustpilot_nexity'>
            <img src={nexity} />
            <div>
                <h1>Nexity</h1>
                <p>Avis 2070  •  Excellent</p>
            </div>
        </div>

        <div className='trustpilot_rating'>
            <img src={trustpilot} />
            <div>
                <img src={trustpilot_rating} />
                <p>4.4/5</p>
            </div>
        </div>    
    </section>
  )
}

export default Trustpilot