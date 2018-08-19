import React, { Component } from 'react';
import { Grid, GridCell } from 'rmwc/Grid';

import Tile from './Tile';
import Map from './Map';
import LineChart from './LineChart';
import EnergyBarChart from './EnergyBarChart';

class DetailScooterPage extends Component {
  constructor(props) {
    super(props);

    const params = this.props.match.params;
    const licensePlate = params.license_plate;

    this.state = { licensePlate, markers: [] };
  }

  async componentDidMount() {
    const response = await fetch(
      `http://localhost:7000/scooters/license_plates/${
        this.state.licensePlate
      }/positions`
    );
    // const response = await fetch(
    //   `http://localhost:7000/scooters/license_plates/569ERE/positions/battery_swaps`
    // );
    // const response = await fetch(`http://localhost:7000/scooters/positions/current`);
    const json = await response.json();

    const markers = json.positions.map(position => ({
      ...position,
      position: [position.longitude, position.latitude]
    }));

    this.setState({ markers });
  }

  render() {
    const { licensePlate, markers } = this.state;

    return (
      <Grid>
        <GridCell span="8">
          <Tile
            title="Parking Positions"
            subtitle={`Scooter ${licensePlate}`}
            style={{ width: '54rem' }}
          >
            <Map markers={markers} />
          </Tile>
        </GridCell>

        <GridCell span="4">
          <Tile
            title="Energy Level"
            subtitle={`Scooter ${licensePlate}`}
            style={{ width: '26rem' }}
          >
            <LineChart data={markers} x="_request_time" y="energy_level" />
          </Tile>

          <Tile
            title="Energy Distribution"
            subtitle={`Scooter ${licensePlate}`}
            style={{ width: '26rem', marginTop: '10px' }}
          >
            <EnergyBarChart licensePlate={licensePlate} />
          </Tile>
        </GridCell>
      </Grid>
    );
  }
}

export default DetailScooterPage;
