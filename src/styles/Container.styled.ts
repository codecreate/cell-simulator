import styled from "styled-components";
import { Colors } from '../helpers/Variables';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  margin: 0 auto;
  max-width: 960px;
  padding: 0 32px;
  border-left: 1px solid ${Colors.lightGrey};
  border-right: 1px solid ${Colors.lightGrey};
  height: 100%;

  & h1 {
    color: ${Colors.blackCoffee};
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 4rem;
  }

`;