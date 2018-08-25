import * as React from 'react';
import { Fragment } from 'react';

import Map from './Map';
import PositionMarker from './PositionMarker';

import pin from './pin-default-20x25.png';

class PositionMap extends React.Component {
  state = {
    lng: 13.432808,
    lat: 52.488734,
    zoom: 13
  };

  render() {
    return (
      <Map>
        {this.props.positions.map((position, index) => (
          <PositionMarker key={index} position={position} icon={pin} />
        ))}
      </Map>
    );
  }
}

export default PositionMap;
