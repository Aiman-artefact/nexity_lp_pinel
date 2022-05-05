import {React,useEffect,useRef,useState} from 'react'
import { MapContainer, TileLayer, useMap,Marker,Popup,Polygon,GeoJSON,useMapEvents } from 'react-leaflet'
import L, { map } from 'leaflet'


function Zoom({region}) {
  
 const test = useMap()

  

  return (
    <GeoJSON eventHandlers={{
        click: () => {
          test.setView(
            [
              48.8499198,
              2.6370411
            ],
            8
          );
        },
        }} key={'id'} data={region.features[0]}/>
  )
}

export default Zoom