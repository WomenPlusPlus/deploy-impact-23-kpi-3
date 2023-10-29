import {CircleCard} from '../components/CircleCard';
import {Meta, StoryObj} from '@storybook/react';

const meta = {
	title: 'Example/CircleCard',
	component: CircleCard,
} satisfies Meta<typeof CircleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		circle_id: 'circle_key',
		circle_name: 'HR',
		//updated_at: '2022-05-01 17:55',
	}
};