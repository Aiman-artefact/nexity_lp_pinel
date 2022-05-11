import {React,useEffect,useRef,useState} from 'react'
import './Zoom.css'
import { MapContainer, TileLayer, useMap,Marker,Popup,Polygon,GeoJSON,useMapEvents,ImageOverlay,SVGOverlay} from 'react-leaflet'
import L, { map,LatLngBounds } from 'leaflet'
import fullmap from '../../images/map/fullmap.svg'
import arrow from '../../images/arrow_carousel.svg'



function Zoom({region}) {
 const [stylezoom,setStylezoom] = useState(false) 
 const test = useMap()
 const boundsMap = new LatLngBounds([42.3599198,-4.76411],[ 51.0999198,8.2170411])

 
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
                
              
          }) : <></>
      }
      
        
                

         <ImageOverlay
        url={fullmap}
        bounds={boundsMap}
        opacity={1}
        zIndex={-1}/> 
        <div className='legend'>
          <div>
            <p>Loyer d'annonce par m²charges comprises pour un appartement type du parc privé locatif*</p>
            <div className='legend_prices'>
              <div className='box_light'></div>
              <p>0,0 à 7,9 €</p>
            </div>
            <div className='legend_prices'>
              <div className='box_medium'></div>
              <p>8,0 à 9,2 €</p>
            </div>
            <div className='legend_prices'>
              <div className='box_high'></div>
              <p>9,3 à 31,0 €</p>
            </div>
          </div>
          <div id='legend_description'>
            <p id='title_map'><strong>Hauts de France</strong></p>
            <p id='price_map'>A partir de  169 479 €</p>
            <button onClick={() => {console.log("dffd")}} className='grow_spin cta_map '>Être contacté <img src={arrow} /></button>
          </div>
        </div>
    </>
    

      
  )
}

export default Zoom