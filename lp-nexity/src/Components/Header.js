import {React,useState,useEffect} from 'react'
import './Header.css'
import logo_nexity from '../images/logo_nexity.svg'
import logo_menu from '../images/logo_menu.svg'
import logo_nexity_desktop from '../images/logo_nexity_header-desktop.svg'
import icon_mail from '../images/icon_mail.svg'
import icon_close from '../images/icon_close.svg'

function Header({toggleform}) {
  const [hideban,setHideban] = useState(false)
  

  const togglemenu = () => {
      let menu = document.querySelectorAll(".header_nav-resp")
      menu.forEach((menu) => {
        menu.classList.toggle("hide")
      })
      
  }
  
  const hidebanniere = () => {
      setHideban(true)
  }

  function hideform(){
     
      window.dataLayer.push({
        "event" : "uaevent",
        'eventCategory' : 'Pinel',
        'eventAction' : 'clic-CTA',
        'eventLabel' : 'nous_contacter'
        })  
        toggleform() 
  }
  return (
    <>  
        {
            hideban ? <></> : 
            <div className='banniere_primo'>
                <img className='' onClick={hidebanniere} src={icon_close} alt='icon close'/>
                <p>PACK SÉRÉNITÉ INVEST OFFERT AUX 300 PREMIERS RÉSERVATAIRES JUSQU'AU 17 JUILLET 2022<sup>(1)</sup></p>
                <a className='laptop' href='#primo1_invest'>En savoir plus</a>
            </div>
        }
        
        <header className='header_mobile mobile'>
            <div>
                <img className='logo_nexity' src={logo_nexity} alt='logo nexity' />
            </div>
            <img onClick={togglemenu} className='logo_menu' src={logo_menu} alt='opener nav'/>
            <nav className='header_nav-resp hide'>
                <ul>
                    <li><a href='#container_simulateur'>Comparateur Pinel</a></li>
                    <li><a href='#primo1_invest'>Pack offert</a></li>
                    <li><a href='#carousel'>Appartement Pinel</a></li>
                </ul>
            </nav>
        </header>

        <>
            <header className='laptop header_deskt '>
                <img src={logo_nexity_desktop} alt='logo nexity'/>
                <nav className='header_nav'>
                    <ul>
                        <li><a href='#primo1_invest'>Pack offert</a></li>
                        <li><a href='#container_simulateur'>Comparateur Pinel</a></li>
                        <li><a href='#carousel_deskt'>Appartement Pinel</a></li>
                    </ul>
                </nav>
                <div className='header_btn-contact'>
                    <a onClick={hideform} href='#'>
                        <img src={icon_mail} alt='icon mail' />
                        <p>Nous contacter</p>
                    </a>
                </div>
            </header>
        </>
    </>  
  )
}

export default Header