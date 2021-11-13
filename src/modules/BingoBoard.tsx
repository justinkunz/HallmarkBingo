import React from 'react';
import { Flex, Card } from '../components';
import { useBingoBoard } from '../hooks';

function BingoBoard() {
  const { rows } = useBingoBoard();
  return (
    <React.Fragment>
      {rows.map((row, index) => (
        <Flex key={`row-${index}`} flexDirection='row' justifyContent='space-around'>
          {row.map(({ text, defaultSelected, locked }) => (
            <Card key={`card-${text}`} defaultSelected={defaultSelected} locked={locked}>
              {text}
            </Card>
          ))}
        </Flex>
      ))}
    </React.Fragment>
  );
}

export default BingoBoard;
