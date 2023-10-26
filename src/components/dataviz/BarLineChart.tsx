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
  barFill,   
}) => (
  <div style={{ width: '50%'}}>
    <ResponsiveContainer width="100%" height={height}>
      <ComposedChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 40,
        }}
      >
        <CartesianGrid stroke="#f5f5f5"/>
        <XAxis dataKey={xKey} scale="band" style={{ marginLeft: 300}}/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={barDataKey} barSize={barSize} fill={barFill} name="KPI value"/> 
        <Line type="linear" dataKey={leftYKey} stroke={leftYColor}  name="Target"/>
       </ComposedChart>
    </ResponsiveContainer>
  </div>
);

export default BarLineChart;
