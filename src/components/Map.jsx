import GoogleMapReact from 'google-map-react'

const Map = ({ center, zoom }) => {
  return (
    <div className='map'>
        <GoogleMapReact bootstrapURLKeys={
            { key: prcess.env.REACT_APP_GOOGLE_MAPS_API_KEY}} 
            defaultCenter={center} 
            defaultZoom={zoom}
            >

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