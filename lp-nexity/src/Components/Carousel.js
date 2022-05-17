import React from 'react'
import './Carousel.css'
import carousel_test from '../images/carousel_test.png'
import logo_primo from '../images/primo_invest.svg'

function Carousel({toggleform}) {
  return (
    <section id='carousel'>
        <h2>Découvrez notre sélection d'appartements éligibles au Pinel partout en France.</h2>

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className='position-relative'>
                        <img className='carousel_img' src={carousel_test}  alt="..."  />
                        <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                    </div>
                    <p className='carousel_city'>MONTPELLIER (34)</p>
                    <p className='carousel_description'>Programme immobilier neuf • de 1 à 4 pièces</p>
                    <p className='carousel_price'><strong>(à partir de) 185 000€</strong></p>
                    <div onClick={toggleform} className='carousel_btn'>Être contacté</div>
                </div>
                <div class="carousel-item">
                    <div className='position-relative'>
                        <img className='carousel_img' src={carousel_test}  alt="..."  />
                        <img className='logo_primoinvest' src={logo_primo} alt="logo primo" />
                    </div>
                    <p className='carousel_city'>MONTPELLIER (34)</p>
                    <p className='carousel_description'>Programme immobilier neuf • de 1 à 4 pièces</p>
                    <p className='carousel_price'><strong>(à partir de) 185 000€</strong></p>
                    <div onClick={toggleform} className='carousel_btn'>Être contacté</div>
                </div>
                <div class="carousel-item">
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
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <i class="arrow left" aria-hidden="true"></i>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <i className="arrow right" aria-hidden="true"></i>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
  )
}

export default Carousel