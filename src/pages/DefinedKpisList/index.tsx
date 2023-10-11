import {Avatar, Button, Card, Checkbox, Form, Input, List} from 'antd';
import {Content} from 'antd/es/layout/layout';
import './style.scss';
import {Typography} from 'antd';

const {Text} = Typography;

const data = [
	{
		'circle': 'HR',
		'kpi': 'share of teams constituted as circles',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 1,
		'value': 35,
	},
	{
		'circle': 'HR',
		'kpi': 'share of teams constituted as circles',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 2,
		'value': 50,
	},
	{
		'circle': 'HR',
		'kpi': 'share of teams constituted as circles',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 3,
		'value': 50,
	},
	{
		'circle': 'HR',
		'kpi': 'share of teams constituted as circles',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 4,
		'value': 55,
	},
	{
		'circle': 'HR',
		'kpi': 'share of teams constituted as circles',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 5,
		'value': 70,
	},
	{
		'circle': 'HR',
		'kpi': 'share of teams constituted as circles',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 6,
		'value': 80,
	},
	{
		'circle': 'HR',
		'kpi': 'share of teams constituted as circles',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 7,
		'value': 85,
	},
	{
		'circle': 'HR',
		'kpi': 'share of teams constituted as circles',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 8,
		'value': 90,
	},
	{
		'circle': 'HR',
		'kpi': 'share of teams constituted as circles',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 9,
		'value': '',
	},
	{
		'circle': 'HR',
		'kpi': 'share of teams constituted as circles',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 10,
		'value': '',
	},
	{
		'circle': 'HR',
		'kpi': 'share of teams constituted as circles',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 11,
		'value': '',
	},
	{
		'circle': 'HR',
		'kpi': 'share of teams constituted as circles',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 12,
		'value': '',
	},
	{
		'circle': 'HR',
		'kpi': 'share short tern leave',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 1,
		'value': 2.04,
	},
	{
		'circle': 'HR',
		'kpi': 'share short tern leave',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 2,
		'value': 2.2,
	},
	{
		'circle': 'HR',
		'kpi': 'share short tern leave',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 3,
		'value': 2.54,
	},
	{
		'circle': 'HR',
		'kpi': 'share short tern leave',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 4,
		'value': 2.17,
	},
	{
		'circle': 'HR',
		'kpi': 'share short tern leave',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 5,
		'value': 3.3,
	},
	{
		'circle': 'HR',
		'kpi': 'share short tern leave',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 6,
		'value': 2.58,
	},
	{
		'circle': 'HR',
		'kpi': 'share short tern leave',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 7,
		'value': 2.04,
	},
	{
		'circle': 'HR',
		'kpi': 'share short tern leave',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 8,
		'value': 0.93,
	},
	{
		'circle': 'HR',
		'kpi': 'share short tern leave',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 9,
		'value': '',
	},
	{
		'circle': 'HR',
		'kpi': 'share short tern leave',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 10,
		'value': '',
	},
	{
		'circle': 'HR',
		'kpi': 'share short tern leave',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 11,
		'value': '',
	},
	{
		'circle': 'HR',
		'kpi': 'share short tern leave',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 12,
		'value': '',
	},
	{
		'circle': 'HR',
		'kpi': 'involuntary headcount change (FTE)',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 1,
		'value': 2.26,
	},
	{
		'circle': 'HR',
		'kpi': 'involuntary headcount change (FTE)',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 2,
		'value': 0.98,
	},
	{
		'circle': 'HR',
		'kpi': 'involuntary headcount change (FTE)',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 3,
		'value': 1.47,
	},
	{
		'circle': 'HR',
		'kpi': 'involuntary headcount change (FTE)',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 4,
		'value': 1.46,
	},
	{
		'circle': 'HR',
		'kpi': 'involuntary headcount change (FTE)',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 5,
		'value': 0,
	},
	{
		'circle': 'HR',
		'kpi': 'involuntary headcount change (FTE)',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 6,
		'value': 0,
	},
	{
		'circle': 'HR',
		'kpi': 'involuntary headcount change (FTE)',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 7,
		'value': 0.51,
	},
	{
		'circle': 'HR',
		'kpi': 'involuntary headcount change (FTE)',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 8,
		'value': 1.01,
	},
	{
		'circle': 'HR',
		'kpi': 'involuntary headcount change (FTE)',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 9,
		'value': '',
	},
	{
		'circle': 'HR',
		'kpi': 'involuntary headcount change (FTE)',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 10,
		'value': '',
	},
	{
		'circle': 'HR',
		'kpi': 'involuntary headcount change (FTE)',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 11,
		'value': '',
	},
	{
		'circle': 'HR',
		'kpi': 'involuntary headcount change (FTE)',
		'periodicity': 'month',
		'range': '0 <= % <= 100',
		'period_year': 2023,
		'period_month': 12,
		'value': '',
	},
]

export const DefinedKpisListPage = () => {
	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	type FieldType = {
		username?: string;
		password?: string;
		remember?: string;
	};

	return (
		<Content style={{margin: '3rem', overflow: 'initial'}}>
			<div className="kpi-def-container">
				<div className="exiting-kpis-list">
					<h2>Existing KPIs</h2>
					<List
						dataSource={data}
						renderItem={(item) => (
							<List.Item key={item.email}>
								<List.Item.Meta
									title={<a href="https://ant.design">{item.name.last}</a>}
									description={item.email}
								/>
							</List.Item>
						)}
					>
					</List>
				</div>
			</div>
		</Content>
	)
}