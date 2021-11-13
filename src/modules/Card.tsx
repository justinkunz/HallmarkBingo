import React from 'react';
import theme from '../theme.json';
import { Flex, FlexCell } from '../components';

interface CardProps {
  defaultSelected: boolean;
  locked: boolean;
}

const Card: React.FC<CardProps> = ({ children, defaultSelected, locked }) => {
  const [selected, setSelected] = React.useState<boolean>(defaultSelected);

  const handleClick = () => !locked && setSelected(!selected);

  return (
    <FlexCell backgroundColor={selected ? theme.secondary : theme.primary} onClick={handleClick}>
      <Flex
        flexDirection='column'
        justifyContent='center'
        textAlign='center'
        height='100%'
        color={theme.light}
        textTransform='capitalize'
        overflow='hidden'
      >
        {children}
      </Flex>
    </FlexCell>
  );
};

export default Card;
