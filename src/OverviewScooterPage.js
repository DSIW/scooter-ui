import React, { Component } from 'react';
import { Grid, GridCell } from 'rmwc/Grid';

import Tile from './Tile';
import LineChart from './LineChart';
import RemoteLineChart from './RemoteLineChart';
import EnergyBarChart from './EnergyBarChart';
import NumberCard from './NumberCard';
import PositionMap from './PositionMap';

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

    const lastDays = 3;
    const timeUnit = 'hour';

    return (
      <Grid>
        <GridCell span="8">
          <Tile
            title="Parking Positions"
            subtitle={`Time: ${lastRequestTime}`}
            style={{ width: '54rem' }}
          >
            <PositionMap positions={positions} />
          </Tile>
        </GridCell>

        <GridCell span="4">
          <Tile style={{ width: '26rem', paddingTop: '1em' }}>
            <NumberCard title="# Scooters">{positions.length}</NumberCard>
          </Tile>

          <Tile
            title="Available Scooters"
            subtitle={`Last ${lastDays} days`}
            style={{ width: '26rem', marginTop: '10px' }}
          >
            <RemoteLineChart
              url={`http://localhost:7000/scooters/positions/count/history/days/${lastDays}`}
              data="history"
              x="time"
              y="count"
            />
          </Tile>

          <Tile
            title="Available Scooters"
            subtitle={`Per ${timeUnit}`}
            style={{ width: '26rem', marginTop: '10px' }}
          >
            <RemoteLineChart
              url={`http://localhost:7000/scooters/positions/count/per_time_unit/${timeUnit}`}
              data="distribution"
              x={timeUnit}
              y="count"
            />
          </Tile>

          <Tile
            title="Available Scooters"
            subtitle={`Per weekday`}
            style={{ width: '26rem', marginTop: '10px' }}
          >
            <RemoteLineChart
              url={`http://localhost:7000/scooters/positions/count/per_time_unit/dayOfWeek`}
              data="distribution"
              x="dayOfWeek"
              y="count"
            />
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
