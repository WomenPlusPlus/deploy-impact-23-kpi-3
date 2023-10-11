 import styled from 'styled-components';
 import { Layout, Typography ,Menu} from 'antd';

 const { Header } = Layout;
 const { Title } = Typography;
 const mainColor = "#FACC48";
 
export const StyledHeader = styled(Header)`
 
 background:  ${mainColor};
 position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
 

export const StyledTitle = styled(Title)`
   color:#000 !important;
  margin: 0 1rem;
 `;

 export const StyledMenu = styled(Menu)`
 background: ${mainColor};
   `;

 