import React from 'react'
import './Carousel_deskt.css'
import carousel_test from '../images/carousel_test.png'
import logo_primo from '../images/primo_invest.svg'
import arrow_btn from '../images/arrow_carousel.svg'


function Carousel_deskt({toggleform}) {
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
                        <div className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={carousel_test}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>MONTPELLIER (34)</p>
                            <p className='carousel_description'>Programme immobilier neuf • de 1 à 4 pièces</p>
                            <p className='carousel_price'><strong>(à partir de) 185 000€</strong></p>
                            <div onClick={toggleform} className='carousel_btn'>Être contacté</div>
                        </div>
                        <div className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={carousel_test}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>MONTPELLIER (34)</p>
                            <p className='carousel_description'>Programme immobilier neuf • de 1 à 4 pièces</p>
                            <p className='carousel_price'><strong>(à partir de) 185 000€</strong></p>
                            <div onClick={toggleform} className='carousel_btn'>Être contacté</div>
                        </div>
                        <div className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={carousel_test}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>MONTPELLIER (34)</p>
                            <p className='carousel_description'>Programme immobilier neuf • de 1 à 4 pièces</p>
                            <p className='carousel_price'><strong>(à partir de) 185 000€</strong></p>
                            <div onClick={toggleform} className='carousel_btn'>Être contacté</div>
                        </div>
                        <div className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={carousel_test}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>MONTPELLIER (34)</p>
                            <p className='carousel_description'>Programme immobilier neuf • de 1 à 4 pièces</p>
                            <p className='carousel_price'><strong>(à partir de) 185 000€</strong></p>
                            <div onClick={toggleform} className='carousel_btn'>Être contacté</div>
                        </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div className='carousel-item2'>
                        <div className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={carousel_test}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>MONTPELLIER (34)</p>
                            <p className='carousel_description'>Programme immobilier neuf • de 1 à 4 pièces</p>
                            <p className='carousel_price'><strong>(à partir de) 185 000€</strong></p>
                            <div onClick={toggleform} className='carousel_btn'>Être contacté</div>
                        </div>
                        <div className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={carousel_test}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>MONTPELLIER (34)</p>
                            <p className='carousel_description'>Programme immobilier neuf • de 1 à 4 pièces</p>
                            <p className='carousel_price'><strong>(à partir de) 185 000€</strong></p>
                            <div onClick={toggleform} className='carousel_btn'>Être contacté</div>
                        </div>
                        <div className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={carousel_test}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>MONTPELLIER (34)</p>
                            <p className='carousel_description'>Programme immobilier neuf • de 1 à 4 pièces</p>
                            <p className='carousel_price'><strong>(à partir de) 185 000€</strong></p>
                            <div onClick={toggleform} className='carousel_btn'>Être contacté</div>
                        </div>
                        <div className='carousel-item_deskt'>
                            <div className='position-relative'>
                                <img className='carousel_img' src={carousel_test}  alt="..."  />
                                <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                            </div>
                            <p className='carousel_city'>MONTPELLIER (34)</p>
                            <p className='carousel_description'>Programme immobilier neuf • de 1 à 4 pièces</p>
                            <p className='carousel_price'><strong>(à partir de) 185 000€</strong></p>
                            <div onClick={toggleform} className='carousel_btn'>Être contacté</div>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>

        <button onClick={toggleform} className='grow_spin cta_carousel'>Je découvre tous les appartements <img src={arrow_btn} alt='arrow'/></button>
    </section>
  )
}

export default Carousel_deskt