import React from 'react';
import theme from '../theme.json';
import { Box, Flex, FlexCell, Text } from '../components';

interface CardProps {
  imageSrc: string | null;
  text: string;
  selected: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ onClick, imageSrc, text, selected }) => {
  return (
    <FlexCell
      backgroundColor={selected ? theme.palette.secondary : theme.palette.primary}
      onClick={onClick}
    >
      <Box clickable>
        <Flex
          flexDirection='column'
          justifyContent='center'
          textAlign='center'
          height='100%'
          color={theme.palette.light}
          textTransform='capitalize'
          overflow='hidden'
        >
          {imageSrc ? (
            <img src={imageSrc} alt='Free' height='100%' width='100%' />
          ) : (
            <Text flexibleSize>{text}</Text>
          )}
        </Flex>
      </Box>
    </FlexCell>
  );
};

export default Card;
