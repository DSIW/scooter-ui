import React, { Component } from 'react';
import { Grid, GridCell } from 'rmwc/Grid';

import Tile from './Tile';
import Map from './Map';
import LineChart from './LineChart';
import EnergyBarChart from './EnergyBarChart';

class OverviewScooterPage extends Component {
  constructor(props) {
    super(props);

    const params = this.props.match.params;

    this.state = { lastRequestTime: 'No data', positions: [] };
  }

  async componentDidMount() {
    const response = await fetch(
      `http://localhost:7000/scooters/positions/current`
    );
    const json = await response.json();
    const { lastRequestTime, positions } = json;
    this.setState({ lastRequestTime, positions });
  }

  render() {
    const { lastRequestTime, positions } = this.state;

    return (
      <Grid>
        <GridCell span="8">
          <Tile
            title="Parking Positions"
            subtitle={`Time: ${lastRequestTime}`}
            style={{ width: '54rem' }}
          >
            <Map positions={positions} />
          </Tile>
        </GridCell>

        <GridCell span="4">
          <Tile
            title="Energy Level"
            subtitle={`Time: ${lastRequestTime}`}
            style={{ width: '26rem' }}
          >
            <LineChart data={positions} x="_request_time" y="energy_level" />
          </Tile>

          <Tile
            title="Energy Distribution"
            subtitle={`All Time`}
            style={{ width: '26rem', marginTop: '10px' }}
          >
            <EnergyBarChart
              url={`http://localhost:7000/scooters/energy_level/distribution`}
            />
          </Tile>
        </GridCell>
      </Grid>
    );
  }
}

export default OverviewScooterPage;
