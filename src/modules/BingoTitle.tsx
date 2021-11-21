import React from 'react';
import { Box, Text } from '../components';
import copy from '../copy.json';
import theme from '../theme.json';

interface BingoTitleProps {
  hasBingo: boolean;
}

const BingoTitle: React.FC<BingoTitleProps> = ({ hasBingo }) => {
  return (
    <Box
      height='42px'
      textAlign='center'
      lineHeight='42px'
      backgroundColor={hasBingo ? theme.palette.secondary_accent : theme.palette.accent}
      withBorder
    >
      <Text color={hasBingo ? theme.palette.light : theme.palette.dark} fontSize={24} bold>
        {copy.bingoTitle}
      </Text>
    </Box>
  );
};

export default BingoTitle;
