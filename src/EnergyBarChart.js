import * as React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

class EnergyBarChart extends React.Component {
  state = { markers: [] };

  async componentDidMount() {
    const response = await fetch(this.props.url);

    const json = await response.json();

    const distribution = json.distribution;

    this.setState({ distribution });
  }

  render() {
    return (
      <BarChart
        width={400}
        height={140}
        data={this.state.distribution}
        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
      >
        <XAxis dataKey="energy_level" hide={false} />
        <Tooltip />
        <Bar dataKey="count" fill="#34495e" />
      </BarChart>
    );
  }
}

export default EnergyBarChart;
