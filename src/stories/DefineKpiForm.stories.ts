import type {Meta, StoryObj} from '@storybook/react';
import {DefineKpiForm} from '../components/DefineKpiForm';

const meta = {
	title: 'Example/DefineKpiForm',
	component: DefineKpiForm,
} satisfies Meta<typeof DefineKpiForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
	args: {
		data: {
			frequencies: [
				{
					label: 'Hourly',
					value: 'HOURLY',
				},
				{
					label: 'Daily',
					value: 'DAILY',
				},
				{
					label: 'Weekly',
					value: 'WEEKLY',
				},
				{
					label: 'Monthly',
					value: 'MONTHLY',
				},
				{
					label: 'Quarterly',
					value: 'QUARTERLY',
				},
				{
					label: 'Semi-annually',
					value: 'SEMI-ANNUALLY',
				},
				{
					label: 'Yearly',
					value: 'YEARLY',
				},
			],
			circles: [
				{
					label: 'HR',
					value: 'hr',
				},
				{
					label: 'Fundraising',
					value: 'fundraising',
				},
			],
			units: [
				{
					label: 'Count',
					value: 'count',
				},
				{
					label: 'Percentage',
					value: 'percentage',
				},
			],
		},
	}
};
export const Loading: Story = {
	args: {
		loading: true,
		data: null,
	}
};
