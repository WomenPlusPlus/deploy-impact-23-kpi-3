 import { Progress } from 'antd';

interface ProgressBarProps {
  percent: number;
  data?: any;  
  strokeColor?: string;
  showPercentage?: boolean;
  progressBarStyle?: React.CSSProperties
}

export default function ProgressBarComponent({
  percent,
  data,
  strokeColor = '#FACC48',
  showPercentage = false,
  progressBarStyle 
   
}: ProgressBarProps) {
  return (
    <> 
      <Progress percent={percent} showInfo={showPercentage} strokeColor={strokeColor} style={progressBarStyle} />
      {data && <h5 style={{ textAlign: 'center', marginTop: 8, marginRight: 160, fontWeight: 'normal' }} >{data}</h5>}
    </>
  );
}

