import * as React from 'react';
import { Fragment } from 'react';

import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';
import coupPin from './pin-default-20x25.png';

const accessToken =
  'pk.eyJ1IjoiZHNpdyIsImEiOiJjaXB2bmt0M2wwMDVxaHdrc3AwM2N4OHk0In0.kHVayjzVrUycpA2prqRhOg';
const attribution =
  '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const url = 'https://api.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png';

class Map extends React.Component {
  state = {
    lng: 13.432808,
    lat: 52.488734,
    zoom: 13
  };

  render() {
    const { positions } = this.props;

    const markers = positions.map(position => ({
      ...position,
      position: [position.longitude, position.latitude]
    }));

    const position = [this.state.lat, this.state.lng];

    const icon = Leaflet.icon({
      iconUrl: coupPin,
      iconSize: [20, 25],
      iconAnchor: [10, 25], // half width of icon size
      popupAnchor: [0, -30]
    });

    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution={attribution}
          url={`${url}?access_token=${accessToken}`}
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} icon={icon}>
            <Popup>
              {marker.license_plate} ({marker.energy_level}
              %)
              <br />
              {marker._request_time}
            </Popup>
          </Marker>
        ))}
      </LeafletMap>
    );
  }
}

export default Map;
