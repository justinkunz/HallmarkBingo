import styled from 'styled-components';
import theme from '../theme.json';

const Wrapper = styled.div`
  font-family: 'Ubuntu', sans-serif;
  font-size: 12px;
  background-color: ${theme.light};

  @media (max-width: 325px) {
    font-size: 10px;
  }
`;

export default Wrapper;
