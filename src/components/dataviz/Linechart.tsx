import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

interface BarchartChartProps {
	data: any;
	xKey: string;
	leftYKey: string;
	leftYColor: string;
	width: number,
	height: number,
	chartStyle?: React.CSSProperties
}

export default function Linechart({
																				 data,
																				 xKey,
																				 leftYKey,
																				 width = 500,
																				 height = 500,
																				 leftYColor,
																				 chartStyle,
																			 }: BarchartChartProps) {

	return (
		<LineChart
			width={500}
			height={300}
			data={data}
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<CartesianGrid strokeDasharray="3 3"/>
			<XAxis dataKey="name"/>
			<YAxis/>
			<Tooltip/>
			<Legend/>
			<Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
			<Line type="monotone" dataKey="uv" stroke="#82ca9d"/>
		</LineChart>
	);
}
