import {React,useEffect,useRef,useState} from 'react'
import './Zoom.css'
import { MapContainer, TileLayer, useMap,Marker,Popup,Polygon,GeoJSON,useMapEvents,ImageOverlay,SVGOverlay} from 'react-leaflet'
import L, { map,LatLngBounds, icon,divIcon } from 'leaflet'
import fullmap from '../../images/map_test.png'
import arrow from '../../images/arrow_carousel.svg'
import idf_url from '../../images/pin/icon_idf.png'
import legend_pin from '../../images/pin/pin_legend.svg'

function Zoom({region,toggleform,width}) {
 const [stylezoom,setStylezoom] = useState(false) 
 const test = useMap()
 const boundsMap = new LatLngBounds([42.3599198,-4.76411],[ 51.0999198,8.2170411])
 const [icon_s,setIcon_s] = useState([40,40])
 const icon_idf = new L.Icon({
  iconUrl: require('../../images/pin/icon_idf.png'),
  iconSize: [25,25], // size of the icon
});
 
function hideform(){
  
  window.dataLayer.push({
    "event" : "uaevent",
    'eventCategory' : 'Pinel',
    'eventAction' : 'clic-CTA',
    'eventLabel' : 'etre_contacte-map'
    })
    toggleform()
}
  function style() {
    return {
        opacity: 0,
        color: "#ffffff",
        fillOpacity: 0.5,
        fillColor:"#ffffff"
    };
  }

  function showPin()
  {

    return region.features[0].properties.pin.map((pin) =>{
    
        <Marker position={pin}>

        </Marker>
      
    })
  }
  function reset_map(){
    setStylezoom(false)
    document.getElementById('legend_description').style.display = 'none';
    if(width>1024)
    {
      test.setView(
      [47.2, 3.00],
      5
      )
    }
    else
    {
      test.setView(
        [44.5, 3.00],
        5
      )
    }
    
  }

  useEffect(() => {
    if(width>1024)
    {
      setIcon_s([40,40])
      setTimeout(() => {test.setView(
        [47.2, 3.00],
        5
      )},200)
    }
    else if(width<1024)
    {
      setIcon_s([15,15])
      test.setView(
        [44.5, 3.00],
        5
      )
    }
  }, [width])
  

  

  return (
    <>
      
      {
        region.features.map((region) => {
          
          return <GeoJSON eventHandlers={{
          click: (event) => {
          
          document.getElementById('legend_description').style.display = 'block';
          document.getElementById('title_map').innerHTML = `<strong>${region.properties.nom}</strong>`;
          document.getElementById('price_map').innerText = region.properties.price
          
         
          
          showPin();
          setStylezoom(true);
          if( region.properties.nom == "Île-de-France")
          {
            test.setView(
              region.properties.center,
              9
            );
          }
          else if (region.properties.nom == "Auvergne-Rhône-Alpes")
          {
            test.setView(
              region.properties.center,
              8
            );
          }
          else
          {
            test.setView(
            region.properties.center,
            7
          );
          }  
          
          setTimeout(() => { return event.target.setStyle({ fillColor : 'transparent' }),100})
        },
        mouseover: (event) => {
          if(stylezoom === true)
          {
            return
          }
          else
          {
            event.target.setStyle({ fillColor : 'transparent' })
          }
        
        },  
        mouseout: (event) => {
          if (stylezoom === false)
          {
            event.target.setStyle({ fillColor: '#ffffff' })
          }
          else
          {
            return
          }
        }
        }} 
        key={region.properties.nom} data={region} style={style} />
        })
      }

      {
        stylezoom ? region.features.map((features,i) =>{
                if(features.properties.pin)
                {
                  return features.properties.pin.map((pin,i) => {
                    
                   return <Marker position={pin} color={"red"}>
                        <Popup>
                          <p><strong>{features.properties.ville[i]}</strong></p>
                          <p>{features.properties.nombreappart[i]} appartements présents</p>
                        </Popup>
                    </Marker>                  
                })
                }
                
              
          }) 
          : 
         
            
            
            <>
             <Marker position={[48.8499198,2.6370411]} 
                        icon={icon({
                          iconUrl: require("../../images/pin/icon_idf.png"),
                          iconSize: icon_s,
                        })}>
              </Marker>

              <Marker position={[49.847503,2.763062]} 
                        icon={icon({
                          iconUrl: require("../../images/pin/icon_hdf.png"),
                          iconSize: icon_s,
                        })}>
              </Marker>   

              <Marker position={[48.580002,5.750000]} 
                        icon={icon({
                          iconUrl: require("../../images/pin/icon.grandest.png"),
                          iconSize: icon_s,
                        })}>
              </Marker>

              <Marker position={[47.280513,4.999437] }
                        icon={icon({
                          iconUrl: require("../../images/pin/icon_bfc.png"),
                          iconSize: icon_s,
                        })}>
              </Marker>

              <Marker position={[45.1695797,5.4502821] }
                        icon={icon({
                          iconUrl: require("../../images/pin/icon_auvergne.png"),
                          iconSize: icon_s,
                        })}>
              </Marker>

              <Marker position={[43.9351691,6.0679194] }
                        icon={icon({
                          iconUrl: require("../../images/pin/icon_paca.png"),
                          iconSize: icon_s,
                        })}>
              </Marker>  

              <Marker position={[43.604500,1.444000] }
                        icon={icon({
                          iconUrl: require("../../images/pin/icon_occitanie.png"),
                          iconSize: icon_s,
                        })}>
              </Marker>      

              <Marker position={[44.7002222,-0.2995785] }
                        icon={icon({
                          iconUrl: require("../../images/pin/icon_nouvelleaqui.png"),
                          iconSize: icon_s,
                        })}>
              </Marker>

              <Marker position={[47.499998 ,1.749997] }
                        icon={icon({
                          iconUrl: require("../../images/pin/icon_centreval.png"),
                          iconSize: icon_s,
                        })}>
              </Marker> 

              <Marker position={[47.7632836,-0.3299687] }
                        icon={icon({
                          iconUrl: require("../../images/pin/icon_paysdeloire.png"),
                          iconSize: icon_s,
                        })}>
              </Marker>

              <Marker position={[49.079870,0.171253] }
                        icon={icon({
                          iconUrl: require("../../images/pin/icon_normandie.png"),
                          iconSize: icon_s,
                        })}>
              </Marker>        
            </>     
            
          
          
      }
      
        
                

         <ImageOverlay
        url={fullmap}
        bounds={boundsMap}
        opacity={0.75}
        zIndex={-1}/> 
        <div className='legend'>
          <div className='legend_loyer'>
            <p className='legend_loyer-header'><strong>Nexity vous accompagne dans votre stratégie d’investissement</strong></p>
            <div className='legend_prices'>
              <img src={legend_pin}/>
              <p>Nombre de logements Nexity éligibles au  Pinel</p>
            </div>
            <p >Montant moyen du loyer perçu par le propriétaire (par m²)*<sup>(4)</sup></p>
            <div className='legend_prices'>
              <div className='box_high'></div>
              <p>Loyer moyen perçu : de 9,20€ à 31€ par m²</p>
            </div>
             <div className='legend_prices'>
              <div className='box_medium'></div>
              <p>Loyer moyen perçu : de 8€ à 9,20€ par m²</p>
            </div>
            <div className='legend_prices'>
              <div className='box_light'></div>
              <p>Loyer moyen perçu : de 0€ à 8€ par m²</p>
            </div>
          </div>
          
          <div id='legend_description'>
            <p id='title_map'><strong>Hauts de France</strong></p>
            <p id='price_map'>A partir de  169 479 €</p>
            <button onClick={hideform} className='grow_spin cta_map '>Être contacté <img src={arrow} /></button>
          </div>  
          
          
        </div>
        {
          stylezoom && <div onClick={reset_map} className='btn_reset'>Actualiser</div>
        }
        
    </>
    

      
  )
}

export default Zoom