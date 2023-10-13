import styled from 'styled-components';
import {Card, Form} from 'antd';

export const SCardForm = styled(Card)`
	min-width: 100%;
	max-width: 100%;
	padding: 3rem;
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