import styled from "styled-components";

type GridLayoutType = {
    gridFactor: number;
};

export const GridLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props: GridLayoutType) => props.gridFactor}, 23px);
    grid-gap: 1px;
`;
