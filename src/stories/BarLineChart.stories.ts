import BarLineChart from '../components/dataviz/BarLineChart';
 import {Meta, StoryObj} from '@storybook/react';

const meta = {
	title: 'Example/BarLineChart',
	component: BarLineChart,
} satisfies Meta<typeof BarLineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		        width:200,
				height:400,
 				xKey:"formatted_date",
				leftYKey:"target",
				leftYColor:"#54BC84",
				barDataKey:"kpi_value"  ,
				barSize:50,
				barFill:"#FACC48" ,
		data: [
            {
              "formatted_date": "2023-02",
              "kpi_value": 345345,
              "target": 400000
            },
            {
              "formatted_date": "2023-09",
              "kpi_value": 98987,
              "target": 400000
            },
            {
              "formatted_date": "2023-10",
              "kpi_value": 99113,
              "target": 400000
            },
            {
              "formatted_date": "2023-11",
              "kpi_value": 101081,
              "target": 400000
            },
            {
              "formatted_date": "2023-12",
              "kpi_value": 100678,
              "target": 400000
            }
          ]
	}
};

export const Color: Story = {
	args: {
		        width:200,
				height:400,
 				xKey:"formatted_date",
				leftYKey:"target",
				leftYColor:"#8CCAF9",
				barDataKey:"kpi_value"  ,
				barSize:50,
				barFill:"#EC4384" ,
		data: [
            {
              "formatted_date": "2023-02",
              "kpi_value": 345345,
              "target": 500000
            },
            {
              "formatted_date": "2023-04",
              "kpi_value": 485345,
              "target": 500000
            }
            ,
            {
              "formatted_date": "2023-05",
              "kpi_value": 445345,
              "target": 500000
            },
            {
              "formatted_date": "2023-10",
              "kpi_value": 99113,
              "target": 500000
            },
            {
              "formatted_date": "2023-11",
              "kpi_value": 101081,
              "target": 500000
            },
            {
              "formatted_date": "2023-12",
              "kpi_value": 120678,
              "target": 500000
            }
          ]
	}
};