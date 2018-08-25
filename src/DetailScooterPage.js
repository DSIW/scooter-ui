import React, { Component } from 'react';
import { Grid, GridCell } from 'rmwc/Grid';

import Tile from './Tile';
import Map from './Map';
import RemoteLineChart from './RemoteLineChart';
import EnergyBarChart from './EnergyBarChart';

class DetailScooterPage extends Component {
  constructor(props) {
    super(props);

    const params = this.props.match.params;
    const licensePlate = params.license_plate;

    this.state = { licensePlate, positions: [] };
  }

  async componentDidMount() {
    const response = await fetch(
      `http://localhost:7000/scooters/${this.state.licensePlate}/positions`
    );
    const json = await response.json();
    const positions = json.positions;
    this.setState({ positions });
  }

  render() {
    const { licensePlate, positions } = this.state;

    return (
      <Grid>
        <GridCell span="8">
          <Tile
            title="Parking Positions"
            subtitle={`Scooter ${licensePlate}`}
            style={{ width: '54rem' }}
          >
            <Map positions={positions} connected />
          </Tile>
        </GridCell>

        <GridCell span="4">
          <Tile
            title="Energy Level"
            subtitle={`Scooter ${licensePlate}`}
            style={{ width: '26rem' }}
          >
            <RemoteLineChart
              url={`http://localhost:7000/scooters/${licensePlate}/positions`}
              data="positions"
              x="_request_time"
              y="energy_level"
            />
          </Tile>

          <Tile
            title="Energy Distribution"
            subtitle={`Scooter ${licensePlate}`}
            style={{ width: '26rem', marginTop: '10px' }}
          >
            <EnergyBarChart
              url={`http://localhost:7000/scooters/${licensePlate}/energy_level/distribution`}
            />
          </Tile>
        </GridCell>
      </Grid>
    );
  }
}

export default DetailScooterPage;
