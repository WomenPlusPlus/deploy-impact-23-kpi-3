import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

export interface LineChartProps {
	data: any;
	xKey: string;
	leftYKey: string;
	target: string;
	leftYColor: string;
	width: number,
	height: number,
	chartStyle?: React.CSSProperties
}

export default function Linechart({
																		data,
																		xKey,
																		leftYKey,
																		target,
																		width = 500,
																		height = 500,
																		leftYColor,
																		chartStyle,
																	}: LineChartProps) {

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
			<XAxis dataKey={xKey}/>
			<YAxis dataKey={target}/>
			<Tooltip/>
			<Legend/>
			<Line type="monotone" dataKey={leftYKey} stroke="#8884d8" activeDot={{r: 8}}/>
			<Line type="monotone" dataKey={target} stroke="#82ca9d"/>
		</LineChart>
	);
}
