import {React,useEffect,useRef,useState} from 'react'
import { MapContainer, TileLayer, useMap,Marker,Popup,Polygon,GeoJSON,useMapEvents } from 'react-leaflet'
import L, { map } from 'leaflet'


function MyComponent() {
  const [zoomLevel, setZoomLevel] = useState(6); // initial zoom level provided for MapContainer
  
  const mapEvents = useMapEvents({
      zoomend: () => {
          setZoomLevel(mapEvents.getZoom());
      },
  });

  return null
}

export default MyComponent