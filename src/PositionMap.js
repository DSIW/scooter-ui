import * as React from 'react';
import { Fragment } from 'react';

import Map from './Map';
import PositionMarker from './PositionMarker';

import pin from './pin-default-20x25.png';

class PositionMap extends React.Component {
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
