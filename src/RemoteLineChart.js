import * as React from 'react';
import LineChart from './LineChart';

class RemoteLineChart extends React.Component {
  state = { data: [] };

  async componentDidMount() {
    const response = await fetch(this.props.url);

    const json = await response.json();

    const data = json[this.props.data];

    this.setState({ data });
  }

  render() {
    return (
      <LineChart data={this.state.data} x={this.props.x} y={this.props.y} />
    );
  }
}

export default RemoteLineChart;
