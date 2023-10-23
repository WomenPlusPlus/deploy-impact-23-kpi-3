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
			id: 3,
			periodicity: 'MONTHLY',
			unit: 'Percentage',
			unitMin: '0',
			unitMax: '100',
			target: '100',
			value: '55'
		},
	}
};
export const YearlyCount: Story = {
	args: {
		data: {
			id: 4,
			periodicity: 'YEARLY',
			unit: 'Count',
			unitMin: '0',
			unitMax: null,
			target: '100',
			value: undefined
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
