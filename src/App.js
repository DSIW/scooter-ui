import React, { Component } from 'react';
import './App.css';

import { RMWCProvider } from 'rmwc/Provider';
import { ThemeProvider } from 'rmwc/Theme';
import Toolbar from './Toolbar';
// import Tile from './Tile';
import Map from './Map';

class App extends React.Component {
  state = { drawerOpen: false, markers: [] };

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
    return (
      <RMWCProvider>
        <ThemeProvider options={{ primary: '#34495e', secondary: '#2980b9' }}>
          <Toolbar />

          <div className="content">
            <Map markers={this.state.markers} />
          </div>
        </ThemeProvider>
      </RMWCProvider>
    );
  }
}

export default App;
