import styled from 'styled-components';
import {Card, Typography} from 'antd';
const { Title} = Typography;

export const SCircleCard = styled(Card)`
  display: flex;
  flex-direction: column;

  margin: 1rem;
  max-width: 23rem;
  min-width: 23rem;
  min-height: 15rem;
  max-height: 15rem;

  .ant-card-body {
		display: flex;
    justify-content: center;
    flex-grow: 1;
  }
`
export const SCricleCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SCricleCardTitle = styled(Title)`
	margin: 0;
`;