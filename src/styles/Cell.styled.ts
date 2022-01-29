import styled from "styled-components";
import { Colors } from '../helpers/Variables';

type CellStyleType = {
  backgroundColor?: string;
};

export const CellStyled = styled.div`
  background-color: ${(props: CellStyleType) => props.backgroundColor};
  padding: 0;
  cursor: pointer;
  border: 1px dotted ${Colors.dimGrey};
  outline: none;
  width: 20px;
  height: 20px;
`;

