import React from "react";
import { BingoBoard, Header, Version } from "./modules";
import { Wrapper } from "./components";
import { version } from "./version.json";

function App() {
  return (
    <Wrapper>
      <Header />
      <BingoBoard />

      <Version version={version} />
    </Wrapper>
  );
}

export default App;
