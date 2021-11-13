import React from 'react';
import { BingoBoard, Header } from './modules';
import { Flex, Wrapper } from './components';

function App() {
  return (
    <Wrapper>
      <Header />
      <Flex justifyContent='center' flexDirection='column' height='100vh' scale={0.95}>
        <BingoBoard />
      </Flex>
    </Wrapper>
  );
}

export default App;
