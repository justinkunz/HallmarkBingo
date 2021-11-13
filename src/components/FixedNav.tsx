import styled from 'styled-components';
import theme from '../theme.json';

const FixedNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: ${theme.accent};
  line-height: 64px;
  text-align: center;
  font-size: 36px;
  font-family: 'Comforter Brush', cursive;
`;

export default FixedNav;
