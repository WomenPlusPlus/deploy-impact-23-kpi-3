import styled from 'styled-components';
import {Card, Form, Space} from 'antd';

export const SCardForm = styled(Card)`
	min-width: 100%;
	max-width: 100%;
	padding: 3rem;
`
export const SSpace = styled(Space)`
	display: flex;
	justify-content: center;
`

export const SFormItem = styled(Form.Item)`
	margin-bottom: 2rem;
	.ant-form-item-row {
    display: flex;
    align-items: center;	
	}
`;

export const SFormItemLabel = styled.span`
	font-size: 1.2rem;
	font-weight: bold;
`;
export const KpiTable = styled(Card)`

  display: flex;
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