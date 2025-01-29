import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({ center, zoom }) => {
  return (
    <div className='map'>
        <GoogleMapReact bootstrapURLKeys={
            { key: 'AIzaSyBNJx717_65WCzOSBBObL8-oLGh9IMwYcI'}} 
            defaultCenter={center} 
            defaultZoom={zoom}
            >
            <LocationMarker lat={center.lat} lng={center.lng} />
        </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 21.0000,
    lng: 78.0000
  },
  zoom: 6
}

export default Map;