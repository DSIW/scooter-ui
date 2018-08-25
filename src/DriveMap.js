import * as React from 'react';
import { Fragment } from 'react';
import { Polyline } from 'react-leaflet';

import Map from './Map';
import PositionMarker from './PositionMarker';

import pinFrom from './pin-from-20x25.png';
import pinTo from './pin-to-20x25.png';

class DriveMap extends React.Component {
  state = {
    lng: 13.432808,
    lat: 52.488734,
    zoom: 13
  };

  render() {
    return (
      <Map>
        {this.props.drives.map(({ from, to }, index) => (
          <Fragment key={index}>
            <Polyline
              positions={[from.location.coordinates, to.location.coordinates]}
              opacity={0.3}
              color="#34495e"
              weight={2}
            />

            <PositionMarker position={from} icon={pinFrom} />
            <PositionMarker position={to} icon={pinTo} />
          </Fragment>
        ))}
        )
      </Map>
    );
  }
}

export default DriveMap;
