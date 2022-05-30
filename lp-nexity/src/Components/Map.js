import {React,useEffect,useRef,useState} from 'react'
import './Map.css'
import { MapContainer, TileLayer, useMap,Marker,Popup,Polygon,GeoJSON,useMapEvents } from 'react-leaflet'
import region from '../region.json'
import L, { map,icon } from 'leaflet'
import MyComponent from './Map_utils/MyComponent'
import Zoom from './Map_utils/Zoom'
import idf from '../images/map/idf.svg'



function Map(props) {
  const [map, setMap] = useState(null);
  
  
  return (
    <section id='map'>
      {props.width>1024?
        <div>
        <MapContainer style={{height:600}} center={[47.2, 3.00]} zoom={6} scrollWheelZoom={false} >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <Zoom width={props.width} toggleform={props.toggleform} region={region} />
          
          <MyComponent />
        </MapContainer>
      </div>
      :
      <div>
        <MapContainer style={{height:400}} center={[46.9, 3.00]} zoom={4} scrollWheelZoom={false} >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <Zoom width={props.width} toggleform={props.toggleform} region={region} />
          
          <MyComponent />
        </MapContainer>
      </div>
      }
      
    </section>
  )
}

export default Map