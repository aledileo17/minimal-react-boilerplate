import React from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: props.lat, lng: props.long }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: props.lat, lng: props.long }} />
    )}
  </GoogleMap>
));

export default withScriptjs(MyMapComponent);
