import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Card} from 'antd';
import {PlusOutlined, SettingOutlined} from '@ant-design/icons';
import styled from 'styled-components'

const SCircleCard = styled(Card)`
  display: flex;
  flex-direction: column;

  margin: 1rem;
  max-width: 25rem;
  min-width: 25rem;
  min-height: 18rem;
  max-height: 18rem;

  .ant-card-body {
    flex-grow: 1;
  }
`

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
			<Link to={`circle/${circle_id}/kpis/create`}>
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
	</SCircleCard>
);