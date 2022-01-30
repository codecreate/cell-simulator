import styled from "styled-components";
import { Colors } from '../helpers/Variables';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  background-color: ${Colors.cultured};
  margin: 0 auto;
  max-width: 960px;
  padding: 0 32px;
  border-left: 2px solid ${Colors.lightGrey};
  border-right: 2px solid ${Colors.lightGrey};
  height: 100%;

  & h1 {
    color: ${Colors.blackCoffee};
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 4rem;
    margin: 1.6rem 0;
  }

  & p {
    color: ${Colors.blackCoffee};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    margin: 1rem 0;
  }

  & button {
    display:inline-block;
    padding:0.35em 1.2em;
    background-color: ${Colors.lightGrey};
    border:0.1em solid ${Colors.blackCoffee};
    border-radius: 0.2em;
    margin:0 0.3em 0.3em 0;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:${Colors.blackCoffee};
    text-align:center;
    transition: all 0.2s;
    margin: 10px 10px 20px;
    cursor: pointer;

    &:hover {
      color:#000000;
      background-color:${Colors.goldMetallic};
    }
  }
`;