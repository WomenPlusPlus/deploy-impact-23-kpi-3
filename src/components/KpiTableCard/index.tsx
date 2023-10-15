
import React from 'react';
import { StyleCard, StyleForm } from './styled';
import {Button, Card} from 'antd';
import {Link} from 'react-router-dom';

interface CardProps {
  KpiTable_name: string 
  onAddClick: () => void;
}

export const KpiTableCard = ({ KpiTable_name, onAddClick }: CardProps) => {
  return (
    <StyleForm
		title = {KpiTable_name}
		actions={[
			<Link to = {"/DefinedKpiList"}>
				<Button type="link">
					Add Value
				</Button>
			</Link>
		]}
	>
  </StyleForm>
  );
};








    