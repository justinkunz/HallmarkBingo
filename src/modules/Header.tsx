import React from 'react';
import styled from 'styled-components';
import { FixedNav } from '../components';

const Header: React.FC = () => {
  return (
    <FixedNav>
      <StyledH1>Hallmark Christmas Bingo</StyledH1>
    </FixedNav>
  );
};

const StyledH1 = styled.h1`
  margin: 0;
  font-size: 38px;
`;
export default Header;
