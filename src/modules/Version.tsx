import React from 'react';
import { Box, Text } from '../components';

interface VersionProps {
  version: string;
}

const Version: React.FunctionComponent<VersionProps> = ({ version }) => {
  return (
    <Box position='fixed' bottom='0' right='0' margin='12px'>
      <Text fontSize='16px' color='#464343'>
        {version}
      </Text>
    </Box>
  );
};

export default Version;
