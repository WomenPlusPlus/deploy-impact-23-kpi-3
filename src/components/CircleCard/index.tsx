import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import {PlusOutlined, SettingOutlined} from '@ant-design/icons';
import {SCircleCard} from './styled';
export interface CardProps {
	circle_id: string,
	circle_name: string,
	circle_description: string,
}
export const CircleCard = ({ circle_id, circle_name, circle_description }: CardProps) => (
	<SCircleCard
		key={circle_id}
		title={circle_name}
		bordered
		actions={[
			<Link to={`circle/${circle_id}/kpis`}>
				<Button type="link" icon={<PlusOutlined/>}>
					KPIs List
				</Button>
			</Link>,
			<Link to={`circle/${circle_id}/analytics`}>
				<Button type="link" icon={<SettingOutlined />}>
					Configure Kpis
				</Button>
			</Link>
		]}
	>
		<div>
			{circle_description}
		</div>
	</SCircleCard>
);