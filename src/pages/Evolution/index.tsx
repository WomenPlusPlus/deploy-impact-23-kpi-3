import { Content } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';
import { Spin, Typography } from 'antd';
import { SCardViz, SpinnerViz } from './styled';
import Barchart from "../../components/dataviz/Barchart";
import Linechart from "../../components/dataviz/Linechart";

const { Title } = Typography;



export const EvolutionPage = () => {
	const [state, setState] = useState<{
		error: string | null;
		data: Array<any> | null;
		loading: boolean;
	}>({
		error: null,
		data: null,
		loading: true,
	});

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch('http://localhost:3200/misc-circles-kpis/evolution1');
				const charts = await response.json();
				setState({
					...state,
					data: charts,
					loading: false,
				});
			} catch (e: any) {
				setState({
					...state,
					loading: false,
					error: e,
				});
			}
		};
		getData();
	}, []);

	return (
		<Content style={{ margin: '3rem', overflow: 'initial' }}>
			<div>
				<Title level={2}>Evolution of Values</Title>
			</div>
			<SCardViz bordered>
				{state.loading ? (
					<SpinnerViz>
						<Spin size="large" />
					</SpinnerViz>
				) : (
					<Barchart
						width={600}
						height={400}
						data={state.data}
						xKey="name"
						leftYKey="pv"
						leftYColor="#FACC48"
					/>
				)}
			</SCardViz>
			<SCardViz bordered>
				{state.loading ? (
					<SpinnerViz>
						<Spin size="large" />
					</SpinnerViz>
				) : (
					<Linechart
						width={600}
						height={400}
						data={state.data}
						xKey="name"
						leftYKey="pv"
						leftYColor="#FACC48"
					/>
				)}
			</SCardViz>
		</Content>
	);
};
