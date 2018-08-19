import * as React from 'react';
import {
  LineChart as RechartLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

class LineChart extends React.Component {
  render() {
    return (
      <RechartLineChart
        width={400}
        height={150}
        data={this.props.data}
        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
      >
        <XAxis dataKey={this.props.x} hide={true} />
        <YAxis unit="%" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey={this.props.y}
          stroke="#34495e"
          dot={false}
        />
      </RechartLineChart>
    );
  }
}

export default LineChart;
