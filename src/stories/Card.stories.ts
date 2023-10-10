import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card';

const meta = {
	title: 'Example/Card',
	component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
	args: {
		circle_id: 'id',
		circle_description: 'description for children KPI',
		circle_name: 'Childhood KPI',
	},
};
