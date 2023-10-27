import {Content} from 'antd/es/layout/layout';
import {useEffect, useState} from 'react';
import {Alert, Button, Dropdown, MenuProps, Spin, Steps, Typography} from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import {SCardViz, SpinnerViz} from './styled';
import BarLineChart from '../../components/dataviz/BarLineChart';

const {Title} = Typography;
const items: MenuProps['items'] = [
	{
		key: '1',
		label: 'Download',
	},
	{
		key: '2',
		label: 'Edit',
	},
	{
		key: '3',
		label: 'Compare',
	},
	{
		key: '4',
		label: 'Change',
	},
];
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
			<div style={{width: '100%', display: 'flex'}}>
				<SCardViz bordered extra={
					<Dropdown menu={{items}} placement="bottomRight" arrow={{pointAtCenter: true}}>
						<Button icon={<MoreOutlined />}></Button>
					</Dropdown>
				}
				>
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
					)}
				</SCardViz>
				<div style={{
					marginLeft: '5rem',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					marginBottom: '1.5rem',
				}}>
					<Steps
						progressDot
						direction="vertical"
						items={[
							{
								title: 'Coming soon',
								description: 'Next sprint',
							},
							{
								title: 'Simon updated the data for December: 100000',
								description: '02/01/023',
							},
							{
								title: 'Simon updated the data for November: 100000',
								description: '02/01/023',
							},
							{
								title: 'Simon updated the data for October: 100000',
								description: '02/01/023',
							},
							{
								title: 'Simon updated the data for September: 100000',
								description: '02/01/023',
							},
							{
								title: 'Simon updated the data for February: 345000',
								description: '02/01/023',
							},
						]}
					/>
					<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
						<Button style={{marginBottom: '0.5rem'}}>Edit Data</Button>
						<Button type="primary">Share Progress</Button>
					</div>
				</div>
			</div>

		</Content>
	);
};
