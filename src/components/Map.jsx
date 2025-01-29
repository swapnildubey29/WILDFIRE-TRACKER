import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

// Define constants
const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ eventData, center = { lat: 42.3265, lng: -122.8756 }, zoom = 4 }) => {
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.map((ev, index) => (
        ev.categories[0].id === NATURAL_EVENT_WILDFIRE && (
            <LocationMarker
                key={index}
                lat={ev.geometries[0].coordinates[1]}
                lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
            />
        )
    ));

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'Google_API_KEY' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    );
};

export default Map;
