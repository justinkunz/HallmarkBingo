import React from 'react';
import theme from '../theme.json';
import { Flex, FlexCell } from '../components';
import { useBingoCard } from '../hooks';

interface CardProps {
  defaultSelected: boolean;
  locked: boolean;
  imageSrc: string | null;
}

const Card: React.FC<CardProps> = ({ children, defaultSelected, locked, imageSrc }) => {
  const { isSelected, onClick } = useBingoCard({ defaultSelected, locked });

  return (
    <FlexCell backgroundColor={isSelected ? theme.secondary : theme.primary} onClick={onClick}>
      <Flex
        flexDirection='column'
        justifyContent='center'
        textAlign='center'
        height='100%'
        color={theme.light}
        textTransform='capitalize'
        overflow='hidden'
      >
        {imageSrc ? <img src={imageSrc} alt='Free' height='100%' width='100%' /> : children}
      </Flex>
    </FlexCell>
  );
};

export default Card;
