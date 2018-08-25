import * as React from 'react';

import { Map as LeafletMap, TileLayer } from 'react-leaflet';

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
    const position = [this.state.lat, this.state.lng];

    return (
      <LeafletMap center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution={attribution}
          url={`${url}?access_token=${accessToken}`}
        />

        {this.props.children}
      </LeafletMap>
    );
  }
}

export default Map;
