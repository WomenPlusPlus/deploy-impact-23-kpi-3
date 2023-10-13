import styled from 'styled-components';
import {Card} from 'antd';

export const SCircleCard = styled(Card)`
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