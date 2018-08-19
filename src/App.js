import React, { Component } from 'react';
import './App.css';

import { RMWCProvider } from 'rmwc/Provider';
import { ThemeProvider } from 'rmwc/Theme';
import Toolbar from './Toolbar';
import DetailScooterPage from './DetailScooterPage';

class App extends React.Component {
  state = { markers: [] };

  render() {
    const { markers } = this.state;

    return (
      <RMWCProvider>
        <ThemeProvider options={{ primary: '#34495e', secondary: '#2980b9' }}>
          <Toolbar />

          <div className="content">
            <DetailScooterPage licensePlate="569ERE" />
          </div>
        </ThemeProvider>
      </RMWCProvider>
    );
  }
}

export default App;
