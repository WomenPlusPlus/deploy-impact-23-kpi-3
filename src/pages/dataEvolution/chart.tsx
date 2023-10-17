import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

  interface ReusableBarChartProps {
    data: any;  
    xKey: string;
    leftYKey: string;
    rightYKey: string;
    leftYColor: string;
    rightYColor: string;
    chartStyle?: React.CSSProperties
  }
  
  export default function ChartComponent({
    data,
    xKey,
    leftYKey,
    rightYKey,
    leftYColor,
    rightYColor,
    chartStyle
  }: ReusableBarChartProps) {
  
    return (
      <BarChart
      width={500}
      height={300}
      data={data}
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
        <YAxis yAxisId="left" orientation="left" stroke={leftYColor} />
        <YAxis yAxisId="right" orientation="right" stroke={rightYColor} />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey={leftYKey} fill={leftYColor} />
        <Bar yAxisId="right" dataKey={rightYKey} fill={rightYColor} />
      </BarChart>
    );
  }
  