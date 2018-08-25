import React, { Component } from 'react';
import './App.css';

import { RMWCProvider } from 'rmwc/Provider';
import { ThemeProvider } from 'rmwc/Theme';
import Toolbar from './Toolbar';
import DetailScooterPage from './DetailScooterPage';
import OverviewScooterPage from './OverviewScooterPage';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  state = { markers: [] };

  render() {
    const { markers } = this.state;

    return (
      <RMWCProvider>
        <ThemeProvider options={{ primary: '#34495e', secondary: '#2980b9' }}>
          <Toolbar />

          <div className="content">
            <Router>
              <Route
                render={({ location }) => (
                  <Switch key={location.key}>
                    <Route
                      exact
                      path="/scooters/current"
                      location={location}
                      component={OverviewScooterPage}
                    />
                    <Route
                      exact
                      path="/scooters/:license_plate"
                      location={location}
                      component={DetailScooterPage}
                    />
                  </Switch>
                )}
              />
            </Router>
          </div>
        </ThemeProvider>
      </RMWCProvider>
    );
  }
}

export default App;
