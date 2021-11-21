import React from 'react';

interface UseBingoCard {
  defaultSelected: boolean;
  locked: boolean;
}

function useBingoCard({ defaultSelected, locked }: UseBingoCard) {
  const [isSelected, setIsSelected] = React.useState<boolean>(defaultSelected);

  const handleClick = () => {
    if (!locked) setIsSelected(!isSelected);
  };

  return {
    isSelected,
    onClick: handleClick,
  };
}

export default useBingoCard;
