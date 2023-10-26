import {Content} from 'antd/es/layout/layout';
import React from 'react';
import {Typography} from 'antd';
import {SCardViz} from './styled';
import Barchart from "../../components/dataviz/Barchart";
import Linechart from "../../components/dataviz/Linechart";

const {Title} = Typography;
// endpoint for test: http://localhost:3200/misc-circles-kpis/evolution1

export const EvolutionPage = ()=>(
	<Content style={{margin: '3rem', overflow: 'initial'}}>
		<div>
			<Title level={2}>Evolution of Values</Title>
		</div>
		<SCardViz bordered>
			<Barchart
				width={600}
				height={400}
				data={data}
				xKey="name"
				leftYKey="pv"
				leftYColor="#FACC48"
			/>
		</SCardViz>
		<SCardViz bordered>
			<Linechart
				width={600}
				height={400}
				data={lineData}
				xKey="name"
				leftYKey="pv"
				leftYColor="#FACC48"
			/>
		</SCardViz>
	</Content>
)

const data = [
	{
		name: "Jan",
		uv: 6000,
		pv: 2400,
		amt: 2000
	},
	{
		name: "Feb",
		uv: 4000,
		pv: 2000,
		amt : 1800
	},
	{
		name : "Mar",
		uv : 3000,
		pv : 1200,
		amt : 1600
	},
	{
		name: "Apr",
		uv: 4200,
		pv: 1400,
		amt: 1000
	},
	{
		name: "May",
		uv: 5000,
		pv: 2200,
		amt : 1200
	},
	{
		name : "Jun",
		uv : 1000,
		pv : 2200,
		amt : 2600
	}
];
const lineData = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];