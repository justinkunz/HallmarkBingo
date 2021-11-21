import React from 'react';
import { BingoBoard, Header, Version } from './modules';
import { Flex, Wrapper } from './components';
import { version } from './version.json';

function App() {
  return (
    <Wrapper>
      <Header />
      <Flex
        justifyContent='center'
        flexDirection='column'
        height='100vh'
        scale={0.95}
        alignItems='center'
      >
        <BingoBoard />
      </Flex>
      <Version version={version} />
    </Wrapper>
  );
}

export default App;
