import {Content} from 'antd/es/layout/layout';
import {useEffect, useState} from 'react';
import {Alert, Spin, Typography} from 'antd';
import {SCardViz, SpinnerViz} from './styled';
import Barchart from '../../components/dataviz/Barchart';
import Linechart from '../../components/dataviz/Linechart';

const {Title} = Typography;

export const EvolutionPage = () => {

	const [barchartData, setBarchartData] = useState<{
		error: string | null;
		data: Array<any> | null;
		loading: boolean;
	}>({
		error: null,
		data: null,
		loading: true,
	});


	const [linechartData, setLinechartData] = useState<{
		error: string | null;
		data: Array<any> | null;
		loading: boolean;
	}>({
		error: null,
		data: null,
		loading: true,
	});


	useEffect(() => {
		const fetchBarchartData = async () => {
			try {
				const response = await fetch('http://localhost:3200/kpi/3/evolution?circleId=1');
				if (!response.ok) {
					throw new Error('HTTP error! Status: ' + response.status);
				}
				const data = await response.json();
				setBarchartData({
					data,
					loading: false,
					error: null,
				});
			} catch (error: any) {
				setBarchartData({
					data: null,
					loading: false,
					error: error.message as string,
				});
			}
		};


		const fetchLinechartData = async () => {
			try {
				const response = await fetch('http://localhost:3200/kpi/3/evolution?circleId=1');
				if (!response.ok) {
					throw new Error('HTTP error! Status: ' + response.status);
				}
				const data = await response.json();
				setLinechartData({
					data,
					loading: false,
					error: null,
				});
			} catch (error: any) {
				setLinechartData({
					data: null,
					loading: false,
					error: error.message as string,
				});
			}
		};


		fetchBarchartData();
		fetchLinechartData();
	}, []);

	return (
		<Content style={{margin: '3rem', overflow: 'initial'}}>
			<div>
				<Title level={2}>Evolution of Values</Title>
			</div>
			<SCardViz bordered>
				{barchartData.loading ? (
					<SpinnerViz>
						<Spin size="large"/>
					</SpinnerViz>
				) : barchartData.error ? (
					<Alert
						style={{width: '300px', height: '250px', fontSize: '20px'}}
						message="Error"
						description={`ERROR! We couldn't fetch the data. 
						  Refresh the page or try again later`}
						type="error"
						showIcon
					/>
				) : (
					<Barchart
						width={600}
						height={400}
						data={barchartData.data}
						xKey="formatted_date"
						leftYKey="kpi_value"
						leftYColor="#FACC48"
					/>
				)}
			</SCardViz>
			<SCardViz bordered>
				{linechartData.loading ? (
					<SpinnerViz>
						<Spin size="large"/>
					</SpinnerViz>
				) : linechartData.error ? (
					<Alert
						style={{width: '300px', height: '250px', fontSize: '20px'}}
						message="Error"
						description={`ERROR! We couldn't fetch the data. 
						  Refresh the page or try again later`}
						type="error"
						showIcon
					/>
				) : (
					<Linechart
						width={600}
						height={400}
						data={linechartData.data}
						target="target"
						xKey="formatted_date"
						leftYKey="kpi_value"
						leftYColor="#FACC48"
					/>
				)}
			</SCardViz>
		</Content>
	);
};
