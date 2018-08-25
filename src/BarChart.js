import * as React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

class BarChart extends React.Component {
  static defaultProps = {
    hiddenXAxis: false,
    hiddenYAxis: false
  };

  render() {
    return (
      <RechartsBarChart
        width={400}
        height={140}
        data={this.props.data}
        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
      >
        <XAxis dataKey={this.props.x} hide={this.props.hiddenXAxis} />
        <YAxis dataKey={this.props.y} hide={this.props.hiddenYAxis} />
        <Tooltip />
        <Bar dataKey={this.props.y} fill="#34495e" />
      </RechartsBarChart>
    );
  }
}

export default BarChart;
