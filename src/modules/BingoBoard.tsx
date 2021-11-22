import React from 'react';
import { Box, Flex } from '../components';
import { useBingoBoard } from '../hooks';
import BingoTitle from './BingoTitle';
import Card from './Card';

function BingoBoard() {
  const { hasBingo, rows } = useBingoBoard();

  return (
    <Box maxWidth='640px' withBoxShadow>
      <BingoTitle hasBingo={hasBingo} />
      {rows.map((row, index) => (
        <Flex key={`row-${index}`} flexDirection='row' justifyContent='space-around'>
          {row.map(({ text, selected, image, onClick }) => (
            <Card
              key={`card-${text}`}
              imageSrc={image}
              text={text}
              selected={selected}
              onClick={onClick}
            />
          ))}
        </Flex>
      ))}
    </Box>
  );
}

export default BingoBoard;
