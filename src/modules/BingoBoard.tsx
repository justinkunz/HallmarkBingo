import React from 'react';
import { Box, Flex } from '../components';
import { useBingoBoard } from '../hooks';
import Card from './Card';

function BingoBoard() {
  const { rows } = useBingoBoard();

  return (
    <Box maxWidth='600px'>
      {rows.map((row, index) => (
        <Flex key={`row-${index}`} flexDirection='row' justifyContent='space-around'>
          {row.map(({ text, defaultSelected, locked, image }) => (
            <Card
              key={`card-${text}`}
              defaultSelected={defaultSelected}
              locked={locked}
              imageSrc={image}
            >
              {text}
            </Card>
          ))}
        </Flex>
      ))}
    </Box>
  );
}

export default BingoBoard;
