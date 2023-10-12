import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Card} from 'antd';
import {PlusOutlined, SettingOutlined} from '@ant-design/icons';
import styled from 'styled-components';


const KpiCard = styled(Card)`

display:;
  flex-direction:column;
  margin: 1rem;
  max-width: 25rem;
  min-width: 25rem;
  min-height: 10rem;
  max-height: 10rem;

  .ant-card-body {
    flex-grow: 1;
  }

  `
export interface CardProps{

  KpiTable_name: string,
  
}

export const KpiTableCard = ({ KpiTable_name}: CardProps) =>(
   <KpiCard
   title={KpiTable_name}
		bordered
		actions={[
      <Link to ={"../DefineKpiForm"}>

      <Button type = "link"> Add Value</Button>
			</Link>
			
			
			
		]}
	       >
	</KpiCard>
);


    