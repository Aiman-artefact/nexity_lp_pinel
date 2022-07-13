import {React,useState,useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import './Video.css'
import logo_video from '../images/logo_video.svg'
import arrow_btn from '../images/arrow_black.svg'

function Video(props) {
  const [video,setVideo] = useState(false);
  const [overlay,setOverlay] = useState(true);
  const [before , setBefore] = useState(false)

  function showyt()
  {
    window.didomiOnReady.push(function (Didomi) {
       // Get all the vendor purposes
			  var purposes = Didomi.getVendorById('c:youtube').purposeIds;

			  // Create a "transaction"...
			  var transaction = Didomi.openTransaction();

			  // ... enable the vendor
			  transaction.enableVendor('c:youtube');

			  // ... and all his purposes
			  transaction.enablePurposes(...purposes);

			  // update the new status using "commit"
			  transaction.commit();
    })

  }


  function showvideo() {
    setVideo(true)
    window.dataLayer.push({
      "event" : "uaevent",
      'eventCategory' : 'Pinel',
      'eventAction' : 'clic-CTA',
      'eventLabel' : 'lancer_la_video'
      })
      
  }
  function hidevideo() {
    setVideo(false)
  }


  useEffect(() => { 

    // Create the "didomiOnReady" listener
    window.didomiOnReady = window.didomiOnReady || [];
    window.didomiOnReady.push(function (Didomi) {
      // Subscribe to the vendor status : It triggers the listener each time the status is changed for this vendor.
      Didomi.getObservableOnUserConsentStatusForVendor('c:youtube')
      .subscribe(function (consentStatus) {

      // Check if the "consentStatus" is true (eg. the user agreed to the vendor & his purposes)
      if (consentStatus === true) 
      {
        setOverlay(false)
      }
      else if (consentStatus === false)
      {
        setOverlay(true)
        console.log("Vous devez accepter les cookies youtube")
      }

      })
    })

    AOS.init();
    AOS.refresh();
   }, [overlay])
  return (
    <section id='container_video'>
        <div data-aos="zoom-in">
          <div className='video_description'>
            <h1>Le savez vous ?</h1>
            <h2>En 2023, la réduction d’impôts PINEL évolue.<sup>(2)</sup> </h2>
            <p>Découvrez en vidéo vos avantages à investir dès aujourd'hui pour profiter des dernières heures du Pinel actuel.<sup>(2)</sup></p>
          </div>
          <button onClick={showvideo} className='cta_video'><img src={arrow_btn} />Lancer la vidéo </button>
          <p className='video_respect'>*Le non-respect des engagements de location entraîne la perte du bénéfice des incitations fiscales.</p>
        </div>
        
        <div data-aos="slide-right" onClick={showvideo} className='video_player'>
            {/* <img className='logo_video' src={logo_video} alt='logo video' /> */}
        </div>
        {
          video ? <div className='video_modal'>
                    {
                      overlay ?
                       <div className='overlay'>
                          <p>Vous avez refusé l'utilisation de cookies pour Youtube. Vous pouvez revenir sur vos choix en cliquant sur le bouton accepter.<br/> 
					                En cliquant sur accepter, vous donnerez vos consentements aux cookies Youtube et aux finalités associées.</p>
                          <button onClick={showyt} className='grow_spin cta_overlay'>Accepter</button>
                          <div onClick={hidevideo} className='closevideo'>Fermer</div>
                       </div>
                       :
                       <>
                       <iframe width="560" height="315" src="https://www.youtube.com/embed/kU-n53C4vQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                       <div onClick={hidevideo} className='closevideo'>Fermer</div>
                      </>
                    } 
                     </div>: <></>
        }
        
    </section>
  )
}

export default Video