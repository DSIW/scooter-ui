import * as React from 'react';

import { SimpleTopAppBar } from 'rmwc/TopAppBar';

import './Toolbar.css';

class Toolbar extends React.Component {
  render() {
    return (
      <SimpleTopAppBar
        fixed={true}
        title={<a href="/scooters/current">Scooter UI</a>}
        style={{ zIndex: 2000 }}
        className="Toolbar"
        actionItems={[
          { onClick: () => window.location.reload(), use: 'refresh' }
        ]}
      />
    );
  }
}

export default Toolbar;
