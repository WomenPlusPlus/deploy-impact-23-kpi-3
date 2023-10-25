import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend, ResponsiveContainer,
} from 'recharts';
import React from "react";

  interface BarchartChartProps {
    data: any;
    xKey: string;
    leftYKey: string;
    leftYColor: string;
    width: number,
    height: number,
    chartStyle?: React.CSSProperties
  }

  export default function ChartComponent({
    data,
    xKey,
    leftYKey,
    width = 500,
    height = 500,
    leftYColor,
    chartStyle
  }: BarchartChartProps) {

    return (
      <BarChart
        data={data}
        width={width}
        height={height}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
        style={chartStyle}
      >

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} />
        <YAxis dataKey={leftYKey} yAxisId="left" orientation="left" stroke={leftYColor} />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey={leftYKey} fill={leftYColor} />
      </BarChart>
    );
  }




  