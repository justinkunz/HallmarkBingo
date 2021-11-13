import React from 'react';
import { Flex, Card } from '../components';
import { useBingoBoard } from '../hooks';

function BingoBoard() {
  const { rows } = useBingoBoard();
  return (
    <React.Fragment>
      {rows.map((row, index) => (
        <Flex key={`row-${index}`} flexDirection='row' justifyContent='space-around'>
          {row.map((text) => (
            <Card key={`card-${text}`}>{text}</Card>
          ))}
        </Flex>
      ))}
    </React.Fragment>
  );
}

export default BingoBoard;
