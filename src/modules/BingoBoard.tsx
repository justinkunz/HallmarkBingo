import React from 'react';
import { Box, BoxShadow, Flex } from '../components';
import { useBingoBoard } from '../hooks';
import Card from './Card';

function BingoBoard() {
  const { rows } = useBingoBoard();

  return (
    <Box maxWidth='720px'>
      <BoxShadow>
        {rows.map((row, index) => (
          <Flex key={`row-${index}`} flexDirection='row' justifyContent='space-around'>
            {row.map(({ text, defaultSelected, locked, image }) => (
              <Card
                key={`card-${text}`}
                defaultSelected={defaultSelected}
                locked={locked}
                imageSrc={image}
                text={text}
              />
            ))}
          </Flex>
        ))}
      </BoxShadow>
    </Box>
  );
}

export default BingoBoard;
