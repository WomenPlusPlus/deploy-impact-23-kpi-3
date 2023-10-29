import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Typography} from 'antd';
import {SCircleCard, SCricleCardContent, SCricleCardTitle} from './styled';

const {Text} = Typography;
export interface CardProps {
	circle_id: string,
	circle_name: string,
	//updated_at: string,
}
export const CircleCard = ({ circle_id, circle_name}: CardProps) => (
	<SCircleCard
		key={circle_id}
		bordered
	>
		<SCricleCardContent>
			<SCricleCardTitle level={4}>{circle_name}</SCricleCardTitle>
			<Link to={`circle/${circle_id}/analytics`}>
				<Button type="primary">Enter Circle</Button>
			</Link>
		</SCricleCardContent>
	</SCircleCard>
);
/*const formatTime = (timestamp: string): string => {
	const d= new Date(timestamp);
	const splitted = {
		date: timestamp.split('T')[0],
		h: d.getHours(),
		m: d.getMinutes(),
		s: d.getSeconds()
	};
	return `${splitted.date} at ${splitted.h}:${splitted.m}:${splitted.s}`
}*/