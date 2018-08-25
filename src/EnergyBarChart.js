import * as React from 'react';
import BarChart from './BarChart';

class EnergyBarChart extends React.Component {
  state = { distribution: [] };

  async componentDidMount() {
    const response = await fetch(this.props.url);

    const json = await response.json();

    const distribution = json.distribution;

    this.setState({ distribution });
  }

  render() {
    return (
      <BarChart
        data={this.state.distribution}
        x="energy_level"
        y="count"
        hiddenYAxis
      />
    );
  }
}

export default EnergyBarChart;
