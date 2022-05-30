import React from 'react'
import './Carousel_deskt.css'
import carousel_test from '../images/carousel_test.png'
import logo_primo from '../images/primo_invest.svg'
import arrow_btn from '../images/arrow_carousel.svg'
import saint_pierre from '../images/Pers_PortSaintPere.png'
import chemille from '../images/Pers_Chemillé.jpg'
import lamorlaye from '../images/Pers_Numéro83.jpg'
import melun from '../images/Pers_Ginkgo.jpg'
import mantes from '../images/Pers_Emeraude.jpg'
import marseille from '../images/Marseille.jpg'
import lyon from '../images/Lyon.jpg'
import nimes from '../images/Nimes.jpg'
import nancy from '../images/Nancy.jpg'
import quimper from '../images/Quimper.jpg'
import brignolle from '../images/Brignoles.jpg'
import dijon from '../images/Dijon.jpg'

function Carousel_deskt({toggleform}) {

    function hideform(){
        
        window.dataLayer.push({
          "event" : "uaevent",
          'eventCategory' : 'Pinel',
          'eventAction' : 'clic-CTA',
          'eventLabel' : 'etre_contacte'
          })
          toggleform()
    
    }
    
    function hideformappart(){
        toggleform()
        window.dataLayer.push({
            "event" : "uaevent",
            'eventCategory' : 'Pinel',
            'eventAction' : 'clic-CTA',
            'eventLabel' : 'decouvrir_les_appartements'
            })
    }
  return (
    <section id='carousel_deskt'>
        <div className='carousel_deskt_header'>
            <h2>Découvrez notre sélection d'appartements éligibles au Pinel partout en France.</h2>
            <div className='buttons_deskt'>
                <button onClick={() => {document.querySelector("[data-bs-slide='prev']").style.opacity = "1"; document.querySelector("[data-bs-slide='next']").style.opacity = "0.5"}} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <i class="arrow left" aria-hidden="true"></i>
                    <span class="visually-hidden">Previous</span>
                </button>

                <button onClick={() => {document.querySelector("[data-bs-slide='next']").style.opacity = "1"; document.querySelector("[data-bs-slide='prev']").style.opacity = "0.5"}} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <i className="arrow right" aria-hidden="true"></i>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className='carousel-item2'>
                        <div onClick={hideform} className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={saint_pierre}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>PORT SAINT PERE - 44 </p>
                            <p className='carousel_price'><strong>à partir de 179 400€</strong></p>
                            <div className='carousel_btn'>Être contacté</div>
                        </div>
                        <div onClick={hideform} className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={chemille}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>CHEMILLE - 49</p>
                            <p className='carousel_price'><strong>à partir de 87 000 €</strong></p>
                            <div className='carousel_btn'>Être contacté</div>
                        </div>
                        <div onClick={hideform} className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={lamorlaye}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>LAMORLAYE - 60</p>
                            <p className='carousel_price'><strong>à partir de 256 000€</strong></p>
                            <div className='carousel_btn'>Être contacté</div>
                        </div>
                        <div onClick={hideform} className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={melun}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>MELUN - 77</p>
                            <p className='carousel_price'><strong>à partir de 187 678€</strong></p>
                            <div className='carousel_btn'>Être contacté</div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div className='carousel-item2'>
                        <div onClick={hideform} className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={mantes}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>MANTES LA VILLE - 78</p>
                            <p className='carousel_price'><strong>à partir de 175 000€</strong></p>
                            <div className='carousel_btn'>Être contacté</div>
                        </div>
                        <div onClick={hideform} className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={marseille}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>Marseille – 13</p>
                            <p className='carousel_price'><strong>à partir de 189 900€</strong></p>
                            <div className='carousel_btn'>Être contacté</div>
                        </div>
                        <div onClick={hideform} className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={lyon}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>Lyon – 69</p>
                            <p className='carousel_price'><strong>à partir de 231 000€</strong></p>
                            <div className='carousel_btn'>Être contacté</div>
                        </div>
                        <div onClick={hideform} className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={dijon}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>Dijon – 21</p>
                            <p className='carousel_price'><strong>à partir de 150 000€</strong></p>
                            <div className='carousel_btn'>Être contacté</div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div className='carousel-item2'>
                        <div onClick={hideform} className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={nancy}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>Nancy – 54</p>
                            <p className='carousel_price'><strong>à partir de 207 000€</strong></p>
                            <div className='carousel_btn'>Être contacté</div>
                        </div>
                        <div onClick={hideform} className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={quimper}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>Quimper – 29</p>
                            <p className='carousel_price'><strong>à partir de 144 200€</strong></p>
                            <div className='carousel_btn'>Être contacté</div>
                        </div>
                        <div onClick={hideform} className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={brignolle}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>Brignoles – 83</p>
                            <p className='carousel_price'><strong>à partir de 175 000€</strong></p>
                            <div className='carousel_btn'>Être contacté</div>
                        </div>
                        <div onClick={hideform} className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={nimes}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>Nimes – 30</p>
                            <p className='carousel_price'><strong>à partir de 168 800€</strong></p>
                            <div className='carousel_btn'>Être contacté</div>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>

        <button onClick={hideformappart} className='grow_spin cta_carousel'>Je découvre tous les appartements <img src={arrow_btn} alt='arrow'/></button>
    </section>
  )
}

export default Carousel_deskt