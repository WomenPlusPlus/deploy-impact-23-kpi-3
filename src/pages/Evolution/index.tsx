import {Content} from 'antd/es/layout/layout';
import {useEffect, useState} from 'react';
import {Alert, Spin, Typography} from 'antd';
import {SCardViz, SpinnerViz} from './styled';
import BarLineChart from '../../components/dataviz/BarLineChart';

const {Title} = Typography;

export const EvolutionPage = () => {

	const [barlinechartData, setBarLinechartData] = useState<{
		error: string | null;
		data: Array<any> | null;
		loading: boolean;
	}>({
		error: null,
		data: null,
		loading: true,
	});


	useEffect(() => {
		const fetchBarLinechartData = async () => {
			try {
				const response = await fetch('http://localhost:3200/kpi/3/evolution?circleId=1');
				if (!response.ok) {
					throw new Error('HTTP error! Status: ' + response.status);
				}
				const data = await response.json();
				setBarLinechartData({
					data,
					loading: false,
					error: null,
				});
			} catch (error: any) {
				setBarLinechartData({
					data: null,
					loading: false,
					error: error.message as string,
				});
			}
		};
		fetchBarLinechartData();
	}, []);

	return (
		<Content style={{margin: '3rem', overflow: 'initial'}}>
			<div>
				<Title level={2}>Evolution of Values</Title>
			</div>
			<SCardViz bordered>
				{barlinechartData.loading ? (
					<SpinnerViz>
						<Spin size="large"/>
					</SpinnerViz>
				) : barlinechartData.error ? (
					<Alert
						style={{width: '300px', height: '250px', fontSize: '20px'}}
						message="Error"
						description={`ERROR! We couldn't fetch the data. 
						  Refresh the page or try again later`}
						type="error"
						showIcon
					/>
				) : (
					<div style={{ width: '40%' }}>
						<BarLineChart
							width={200}
							height={400}
							data={barlinechartData.data}
							xKey="formatted_date"
							leftYKey="target"
							leftYColor="#54BC84"
							barDataKey="kpi_value"
							barSize={50}
							barFill="#FACC48"
						/>
					</div>
				)}
			</SCardViz>

		</Content>
	);
};
