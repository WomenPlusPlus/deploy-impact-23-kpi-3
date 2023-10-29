import Barchart from '../components/dataviz/Barchart';
import {Meta, StoryObj} from '@storybook/react';

const meta = {
	title: 'Example/Barchart',
	component: Barchart,
} satisfies Meta<typeof Barchart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		width: 600,
		height: 400,
		xKey: 'month',
		leftYKey: 'temperature',
		data: [
			{
				month: 'Jan',
				temperature: 6000,
				wind: 2400,
				amt: 2000,
			},
			{
				month: 'Feb',
				temperature: 4000,
				wind: 2000,
				amt: 1800,
			},
		],
	},
};

export const Color: Story = {
	args: {
		width: 600,
		height: 400,
		xKey: 'name',
		leftYKey: 'pv',
		leftYColor: '#FACC48',
		data: [
			{
				name: 'Jan',
				uv: 6000,
				pv: 2400,
				amt: 2000,
			},
			{
				name: 'Feb',
				uv: 4000,
				pv: 2000,
				amt: 1800,
			},
			{
				name: 'Mar',
				uv: 3000,
				pv: 1200,
				amt: 1600,
			},
			{
				name: 'Apr',
				uv: 4200,
				pv: 1400,
				amt: 1000,
			},
			{
				name: 'May',
				uv: 5000,
				pv: 2200,
				amt: 1200,
			},
			{
				name: 'Jun',
				uv: 1000,
				pv: 2200,
				amt: 2600,
			},
		],
	},
};
export const Shop: Story = {
	args: {
		width: 600,
		height: 400,
		xKey: 'sale_date',
		leftYKey: 'turnover',
		leftYColor: '#FACC48',
		data: [
			{
				'sale_date': '2023-10-01',
				'turnover': 11599.77,
			},
			{
				'sale_date': '2023-10-02',
				'turnover': 7399.84,
			},
			{
				'sale_date': '2023-10-03',
				'turnover': 9799.79,
			},
			{
				'sale_date': '2023-10-04',
				'turnover': 13499.73,
			},
			{
				'sale_date': '2023-10-05',
				'turnover': 15199.7,
			},
		],
	},
};