import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Container } from './styles/Container.styled';
import Header from './components/Header';
import CellGrid from './components/CellGrid';

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
          <Header>Cell Simulator</Header>
          <CellGrid />
      </Container>
    </>
  );
}

export default App;
