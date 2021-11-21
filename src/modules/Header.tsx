import React from 'react';
import copyText from '../copy.json';
import { Box, Text } from '../components';
import theme from '../theme.json';

const Header: React.FC = () => {
  return (
    <Box
      position='fixed'
      top='0'
      left='0'
      right='0'
      height='64px'
      lineHeight='64px'
      backgroundColor={theme.palette.accent}
      textAlign='center'
    >
      <Text fontSize={32} asHeading flexibleSize>
        {copyText.heading}
      </Text>
    </Box>
  );
};

export default Header;
