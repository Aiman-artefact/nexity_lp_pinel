import {React,useEffect,useRef,useState} from 'react'
import './Map.css'
import { MapContainer, TileLayer, useMap,Marker,Popup,Polygon,GeoJSON,useMapEvents } from 'react-leaflet'
import region from '../region.json'
import L, { map } from 'leaflet'
import MyComponent from './Map_utils/MyComponent'
import Zoom from './Map_utils/Zoom'

function Map() {
  const [map, setMap] = useState(null);
  
  
  return (
    <section id='map'>
      <div>
        <MapContainer center={[46.23, 2.20]} zoom={5} scrollWheelZoom={false} whenCreated={setMap}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* <GeoJSON eventHandlers={{
          click: () => {
            test.setView(
              [
                48.8499198,
                2.6370411
              ],
              8
            );
          },
          }} key={'id'} data={region.features[0]}/> */}

          <Zoom region={region} />
          
          <MyComponent />
        </MapContainer>
      </div>
        
    </section>
  )
}

export default Map