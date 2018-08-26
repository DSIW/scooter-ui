import React, { Component } from 'react';
import { TextField } from 'rmwc/TextField';

import { withRouter } from 'react-router-dom';

class SearchForm extends Component {
  static defaultProps = {
    licensePlate: ''
  };

  constructor(props) {
    super(props);

    this.state = { licensePlate: this.props.licensePlate };

    this.handleChange = this.handleChange.bind(this);
    this.detectEnter = this.detectEnter.bind(this);
  }

  detectEnter(event) {
    const { licensePlate } = this.state;

    if (event.key === 'Enter') {
      this.props.history.push(`/scooters/${licensePlate}`);
    }
  }

  handleChange(event) {
    const { value } = event.target;

    this.setState({ licensePlate: value });
  }

  render() {
    const { licensePlate } = this.state;

    return (
      <TextField
        outlined
        withLeadingIcon="search"
        label="License Plate"
        onKeyDown={this.detectEnter}
        onChange={this.handleChange}
        value={licensePlate}
      />
    );
  }
}

export default withRouter(SearchForm);
