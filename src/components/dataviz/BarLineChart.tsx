import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,  
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface BarLineChartProps {
  data: any; 
  xKey: string;
  leftYKey: string;
  leftYColor: string;
  width: number;
  height: number;
  barDataKey: string;  
  barSize: number;  
  barFill: string;  
  chartStyle?: React.CSSProperties; 
}

const BarLineChart: React.FC<BarLineChartProps> = ({
  data,
  xKey,
  leftYKey,
  leftYColor,
  width,
  height,
  barDataKey,  
  barSize,  
  barFill
}) => (
  <ResponsiveContainer width="100%" height={height}>
    <ComposedChart width={width} height={height} data={data}>
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey={xKey} scale="band" />
      <YAxis />
      <Tooltip
      itemStyle={{color: '#444444'}}/>
      <Legend/>
      <Bar
        dataKey={barDataKey}
        barSize={barSize}
        fill={barFill}
        name="KPI value"
       />
      <Line
        type="linear"
        dataKey={leftYKey}
        stroke={leftYColor}
        name="Target"
      />
    </ComposedChart>
  </ResponsiveContainer>
);

export default BarLineChart;
