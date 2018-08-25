import * as React from 'react';
import { Fragment } from 'react';
import { Polyline } from 'react-leaflet';

import Map from './Map';
import PositionMarker from './PositionMarker';

import pinFrom from './pin-from-20x25.png';
import pinTo from './pin-to-20x25.png';

class DriveMap extends React.Component {
  render() {
    const Drive = ({ from, to }) => (
      <Fragment>
        <Polyline
          positions={[from.location.coordinates, to.location.coordinates]}
          opacity={0.3}
          color="#34495e"
          weight={2}
        />

        <PositionMarker position={from} icon={pinFrom} />
        <PositionMarker position={to} icon={pinTo} />
      </Fragment>
    );

    return (
      <Map>
        {this.props.drives.map(({ from, to }, index) => (
          <Drive key={index} from={from} to={to} />
        ))}
      </Map>
    );
  }
}

export default DriveMap;
