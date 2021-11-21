import React from 'react';
import { Box, Text } from '../components';
import theme from '../theme.json';

interface VersionProps {
  version: string;
}

const Version: React.FunctionComponent<VersionProps> = ({ version }) => {
  return (
    <Box position='fixed' bottom='0' right='0' margin='12px'>
      <Text fontSize={16} color={theme.palette.meta} flexibleSize>
        {version}
      </Text>
    </Box>
  );
};

export default Version;
