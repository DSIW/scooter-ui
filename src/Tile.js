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
            {this.props.title}
          </Typography>
          <Typography
            use="subtitle2"
            tag="h3"
            theme="text-secondary-on-background"
            style={{ marginTop: '-1rem' }}
          >
            {this.props.subtitle}
          </Typography>
          {this.props.children}
        </div>
        {/*
        <CardActions>
          <CardActionIcons>
            <CardAction use="more_vert" />
          </CardActionIcons>
        </CardActions>
        */}
      </Card>
    );
  }
}

export default Tile;
