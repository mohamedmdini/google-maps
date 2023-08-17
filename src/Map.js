import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const center = { lat: 40.712776, lng: -74.005974 }; // Change these coordinates as needed

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
        defaultCenter={center}
        defaultZoom={15}
      >
        <AnyReactComponent lat={center.lat} lng={center.lng} text="Your Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
