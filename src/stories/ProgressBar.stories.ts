import ProgressBar from '../components/dataviz/ProgressBar';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Example/ProgressBar',
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percent: 50,
     data:  'Progress: 180',
	 
  },
};

export const Color: Story = {
	args: {
	  percent: 25,
	  strokeColor :"#f4c4f3",
	  data: 'Progress: 20',
	},
  };
  
  export const ShowPercentage: Story = {
	args: {
	  percent: 75,
	  strokeColor :"#93F9B9",
	  showPercentage : true,
	  progressBarStyle : {width: "60%",marginTop: "50px", marginLeft: "60px"}
	},
  };
 
  export const Secondary: Story = {
	args: {
	  percent: 40,
	  strokeColor :"#6dd5ed",
	  showPercentage : true,
	  progressBarStyle : {width: "60%",marginTop: "50px", marginLeft: "60px"}
	},
  };
  

 