import type {Meta, StoryObj} from '@storybook/react';
import {KpisTable} from '../components/KpisTable';
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import React from 'react';

const meta = {
	title: 'Example/KpisTable',
	component: KpisTable,
} satisfies Meta<typeof KpisTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
	args: {
		rows: [{
			'kpi_title': 'KPI 1',
			'assigned_circles': 'Circle 1',
			'economist_names': 'Economist User',
			'last_entry_date': '15:00',
		}, {
			'kpi_title': 'KPI 2',
			'assigned_circles': 'Circle 1',
			'economist_names': 'Economist User',
			'last_entry_date': '2023-10-04',
		}, {
			'kpi_title': 'KPI 3',
			'assigned_circles': 'Circle 1',
			'economist_names': 'Economist User',
			'last_entry_date': 'October',
		}, {
			'kpi_title': 'KPI 4',
			'assigned_circles': 'Circle 1',
			'economist_names': 'Economist User',
			'last_entry_date': '2023',
		}, {
			'kpi_title': 'test167',
			'assigned_circles': 'Circle 1, circle222',
			'economist_names': 'Economist User',
			'last_entry_date': null,
		}],
		columns: [
			{
				title: 'KPI Title',
				dataIndex: 'kpi_title',
				key: 'kpi_title',
			},
			{
				title: 'Assigned Circles',
				dataIndex: 'assigned_circles',
				key: 'assigned_circles',
			},
			{
				title: 'Economist',
				dataIndex: 'economist_names',
				key: 'economist_names',
			},
			{
				title: 'Last Entry Date',
				dataIndex: 'last_entry_date',
				key: 'last_entry_date',
			},
			{
				title: '',
				dataIndex: 'edit_kpi_id',
				key: 'edit_kpi_id',
				render: (_, edit_kpi_id: string) => (
					<Link to={`circle/${edit_kpi_id}/kpis`}>
						<Button type="primary" style={{ backgroundColor: '#fecc33', color: '#000', borderRadius: 0, fontWeight: 600 }}>
							Edit KPI
						</Button>
					</Link>
				),
			},
		],
	},
};
export const Loading: Story = {
	args: {
		loading: true,
	},
};
