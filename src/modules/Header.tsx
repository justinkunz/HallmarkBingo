import React from 'react';
import copyText from '../copy.json';
import { FixedNav, Heading } from '../components';

const Header: React.FC = () => {
  return (
    <FixedNav>
      <Heading>{copyText.heading}</Heading>
    </FixedNav>
  );
};

export default Header;
