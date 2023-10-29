import type {Meta, StoryObj} from '@storybook/react';
import {AddValueForm} from '../components/AddValueForm';

const meta = {
	title: 'Example/AddValueForm',
	component: AddValueForm,
} satisfies Meta<typeof AddValueForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const MonthlyPercentage: Story = {
	args: {
		data: {
			kpiValue: {
				id: 3,
				periodicity: 'MONTHLY',
				unit: 'Percentage',
				unitMin: '0',
				unitMax: '100',
				target: '100',
				value: '55'
			},
			kpiSumTarget: {
				"target_value": 500000,
				"total_kpi_value": 400228
			}
		},
	}
};
export const YearlyCount: Story = {
	args: {
		data: {
			kpiValue: {
				id: 4,
				periodicity: 'YEARLY',
				unit: 'Count',
				unitMin: '0',
				unitMax: null,
				target: '100',
				value: undefined
			},
			kpiSumTarget: {
				"target_value": 500000,
				"total_kpi_value": 400228
			}
		},
	}
};
export const Loading: Story = {
	args: {
		loading: true,
		data: null,
		onSubmit: (enteredData: any) => {
			console.log(enteredData);
		}
	}
};
