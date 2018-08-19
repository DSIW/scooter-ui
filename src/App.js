import React, { Component } from 'react';
import './App.css';

import { RMWCProvider } from 'rmwc/Provider';
import { ThemeProvider } from 'rmwc/Theme';
import Toolbar from './Toolbar';
// import Tile from './Tile';
import Map from './Map';

class App extends React.Component {
  state = { drawerOpen: false };

  render() {
    return (
      <RMWCProvider>
        <ThemeProvider options={{ primary: '#34495e', secondary: '#2980b9' }}>
          <Toolbar />

          <div className="content">
            <Map />
          </div>
        </ThemeProvider>
      </RMWCProvider>
    );
  }
}

export default App;
