import React from 'react'
import './Primo1_invest.css'
import check from '../images/check.svg'
import euro from '../images/euro_primo.svg'
import house_euro from '../images/house_euro.svg'
import hands_check from '../images/hands_check.svg'
import shield_euro from '../images/shield_euro.svg'
import arrow_btn from '../images/arrow_carousel.svg'

function Primo_invest(props) {

    function hideform(){
        
        window.dataLayer.push({
          "event" : "uaevent",
          'eventCategory' : 'Pinel',
          'eventAction' : 'clic-CTA',
          'eventLabel' : 'en_profiter'
          })
         props.toggleform() 
      }

  return (
    <section id='primo1_invest'>
        <div className='primo1_header'>
           <div>
               <h1>Offert<sup>(1)</sup> : le Pack Sérénité Invest !</h1>
               <p>Avec le pack Sérénité Invest, <strong>Nexity prend tout en charge</strong> pour le futur investisseur que vous êtes. Du financement de votre projet à la gestion de vos locataires et des imprévus, <strong>vous pouvez investir l'esprit tranquille.</strong></p>
           </div>
           <div> <h2>Offert seulement aux</h2> <h2><span className='style-300'>300</span> premiers réservataires</h2></div> 
        </div>
        
        <div className='primo1_container_cards'>
            <div className='primo1_card'>
                <div className='primo1_card_header'>
                    <img src={euro} alt="logo euro" />
                    <h1>Financez au mieux votre projet</h1>
                </div>
                <span className='line_white'></span>
                <div>
                    <div className='primo1_card_description'> 
                        <img src={check} alt='check'/>
                        <p>Accompagnement Nexity &amp; Bilan Patrimonial <strong>offerts<sup>(1)</sup></strong></p> 
                    </div>
                    <div className='primo1_card_description'> 
                        <img src={check} alt='check'/>
                        <p>Frais de courtage Nexity Solutions <strong>offerts<sup>(1)</sup></strong></p> 
                    </div>
                </div>
                
            </div>
            
            <p className='plus'>+</p>

            <div className='primo1_card'>
                <div className='primo1_card_header'>
                    <img src={house_euro} alt="logo euro" />
                    <h1>Achetez un bien prêt à louer</h1>
                </div>
                <span className='line_white'></span>
                <div>
                    <div className='primo1_card_description'> 
                        <img src={check} alt='check'/>
                        <p>Pack clé en main <strong>offert<sup>(1)</sup></strong> : <br/>
                            Cuisine aménagée<br/>
                            + Salle de bain équipée<br/>
                            + Placard aménagé<sup>(1)</sup>
                        </p>  
                    </div> 
                </div>
                
            </div>
  
            <p className='plus'>+</p>

            <div className='primo1_card'>
                <div className='primo1_card_header'>    
                    <img src={hands_check} alt="logo euro" />
                    <h1>Garantissez la location de votre bien</h1>
                </div>
                <span className='line_white'></span>
                <div>
                    <div className='primo1_card_description'> 
                        <img src={check} alt='check'/>
                        <p>Garantie Sécurité Locative</p> 
                    </div>
                    <div className='primo1_card_description'> 
                        <img src={check} alt='check'/>
                        <p>Honoraires de 1ere mise en location et de la gestion du bien</p> 
                    </div>
                </div>

                
            </div>

            <p className='plus'>+</p>

            <div className='primo1_card'>
                <div className='primo1_card_header'>
                    <img src={shield_euro} alt="logo euro" />
                    <h1>Assurez-vous face à l'imprévu</h1>
                </div>
                <span className='line_white'></span>
                <div>
                   <div className='primo1_card_description'> 
                        <img src={check} alt='check'/>
                        <p>Garantie revente <strong>offerte<sup>(1)</sup></strong></p>  
                    </div>
                    <div className='primo1_card_description'> 
                        <img src={check} alt='check'/>
                        <p>Garantie participation mensuelle <strong>offerte<sup>(1)</sup></strong></p>  
                    </div> 
                </div>
                
            </div>

        </div>
        <button onClick={hideform} className='grow_spin cta_primo1'>J’en profite <img src={arrow_btn} /></button>
    </section>
  )
}

export default Primo_invest