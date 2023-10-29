import React from 'react';
import { Progress, Typography } from 'antd';

interface ProgressBarProps {
  percent: number;
  data?: string;
  strokeColor?: string;
  showPercentage?: boolean;
  progressBarStyle?: React.CSSProperties;
}

export default function ProgressBarComponent({
  percent,
  data,
  strokeColor = '#FACC48',
  showPercentage = false,
  progressBarStyle,
}: ProgressBarProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%' }}>
      <Progress percent={percent} showInfo={showPercentage} strokeColor={strokeColor} style={progressBarStyle} />
      {data && <Typography.Text>{data}</Typography.Text>}
    </div>
  );
}

