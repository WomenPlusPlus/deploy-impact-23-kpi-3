import type { Meta, StoryObj } from '@storybook/react';
import { KpiTableCard } from '../components/KpiTableCard';

const meta = {
	title: 'KpiTableCard',
	component: KpiTableCard,
} satisfies Meta<typeof KpiTableCard>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
	args: {
		KpiTable_name: 'KPI Title',
	

	},
};
