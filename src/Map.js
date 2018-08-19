import * as React from 'react';

import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const accessToken =
  'pk.eyJ1IjoiZHNpdyIsImEiOiJjaXB2bmt0M2wwMDVxaHdrc3AwM2N4OHk0In0.kHVayjzVrUycpA2prqRhOg';
const attribution =
  '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const url = 'https://api.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png';

class Map extends React.Component {
  state = {
    lng: 13.432808,
    lat: 52.488734,
    zoom: 10,
    markers: []
  };

  async componentDidMount() {
    // const response = await fetch(`http://localhost:7000/scooters/license_plates/569ERE/positions`);
    const response = await fetch(
      `http://localhost:7000/scooters/license_plates/569ERE/positions/battery_swaps`
    );
    // const response = await fetch(`http://localhost:7000/scooters/positions/current`);
    const json = await response.json();

    const markers = json.positions.map(position => ({
      ...position,
      position: [position.longitude, position.latitude]
    }));

    this.setState({ markers });
  }

  render() {
    const { markers } = this.state;

    const position = [this.state.lat, this.state.lng];

    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution={attribution}
          url={`${url}?access_token=${accessToken}`}
        />
        {markers.map(marker => (
          <Marker position={marker.position}>
            <Popup>
              {marker.license_plate} ({marker.energy_level}
              %)
            </Popup>
          </Marker>
        ))}
      </LeafletMap>
    );
  }
}

export default Map;
