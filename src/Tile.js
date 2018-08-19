import * as React from 'react';

import {
  Card,
  CardPrimaryAction,
  CardAction,
  CardActionButtons,
  CardActions,
  CardActionIcons
} from 'rmwc/Card';

import { Typography } from 'rmwc/Typography';

class Tile extends React.Component {
  render() {
    return (
      <Card style={this.props.style}>
        <div style={{ padding: '0 1rem 1rem 1rem' }}>
          <Typography use="headline6" tag="h2">
            Current scooters
          </Typography>
          <Typography
            use="subtitle2"
            tag="h3"
            theme="text-secondary-on-background"
            style={{ marginTop: '-1rem' }}
          >
            Berlin
          </Typography>
          {this.props.children}
        </div>
      </Card>
    );
  }
}

export default Tile;
