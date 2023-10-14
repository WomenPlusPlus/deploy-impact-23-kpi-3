import type { Meta, StoryObj } from '@storybook/react';
import KpiTable from "../components/KpiTable";


const meta = {
    title: 'KpiTable',
    component: KpiTable,
} satisfies Meta<typeof KpiTable>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
    args: {
        KpiTable_name: 'KPI Title',


    },
};
