import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Card} from 'antd';
import {PlusOutlined, SettingOutlined} from '@ant-design/icons';
import './style.scss';

export interface CardProps {
	circle_id: string,
	circle_name: string,
	circle_description: string,
}
export default ({ circle_id, circle_name, circle_description }: CardProps) => (
	<Card
		key={circle_id}
		title={circle_name}
		bordered
		actions={[
			<Link to={`circle/${circle_id}/kpis`}>
				<Button type="link" icon={<PlusOutlined/>}>
					New KPI
				</Button>
			</Link>,
			<Link to={`circle/${circle_id}/analytics`}>
				<Button type="link" icon={<SettingOutlined />}>
					Configure Data
				</Button>
			</Link>
		]}
	>
		<div>
			{circle_description}
		</div>
	</Card>
);