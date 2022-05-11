import {React,useState,useEffect} from 'react'
import './Header.css'
import logo_nexity from '../images/logo_nexity.svg'
import logo_menu from '../images/logo_menu.svg'
import logo_nexity_desktop from '../images/logo_nexity_header-desktop.svg'
import icon_mail from '../images/icon_mail.svg'
import icon_close from '../images/icon_close.svg'

function Header() {
  const [hideban,setHideban] = useState(false)
  

  const togglemenu = () => {
      let menu = document.querySelector(".header_nav-resp")
      menu.classList.toggle("hide")
  }
  
  const hidebanniere = () => {
      setHideban(true)
  }
  return (
    <>  
        {
            hideban ? <></> : 
            <div className='banniere_primo'>
                <img className='laptop' onClick={hidebanniere} src={icon_close} alt='icon close'/>
                <p>PACK PRIMO INVEST OFFERT AUX 300 PREMIERS RESERVATAIRES JUSQU'AU 17 JUILLET 2022 !</p>
            <a className='laptop' href='#'>En savoir plus</a>
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
                    <li><a href='#carousel'>Appartement éligibles</a></li>
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
                        <li><a href='#carousel_deskt'>Appartement éligibles</a></li>
                    </ul>
                </nav>
                <div className='header_btn-contact'>
                    <a href='#'>
                        <img src={icon_mail} alt='icon mail' />
                        <p>Nous contactez</p>
                    </a>
                </div>
            </header>
        </>
    </>  
  )
}

export default Header