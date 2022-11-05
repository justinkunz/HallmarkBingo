import React from "react";
import Confetti from "react-confetti";
import { Box, Button, Flex } from "../components";
import { useBingoBoard } from "../hooks";
import BingoTitle from "./BingoTitle";
import Card from "./Card";

function BingoBoard() {
  const { clearBoardCopy, hasBingo, rows, onClearBoardClick } = useBingoBoard();

  return (
    <React.Fragment>
      {hasBingo && (
        <Box position="fixed" top="0px" left="0px" right="0px" zIndex={99}>
          <Confetti />
        </Box>
      )}
      <Flex
        justifyContent="center"
        flexDirection="column"
        height="100vh"
        scale={0.95}
        alignItems="center"
      >
        <Box maxWidth="640px" withBoxShadow>
          <BingoTitle hasBingo={hasBingo} />
          {rows.map((row, index) => (
            <Flex
              key={`row-${index}`}
              flexDirection="row"
              justifyContent="space-around"
            >
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
        <Box position="fixed" bottom="0" margin="8px">
          <Button onClick={onClearBoardClick}>{clearBoardCopy}</Button>
        </Box>
      </Flex>
    </React.Fragment>
  );
}

export default BingoBoard;
