import React, { FC } from "react";
import { CellStyled } from '../styles/Cell.styled';
import { Colors } from '../helpers/Variables';

type CellType = {
  cellArr: Array<number>;
  setCellArr: (cellArr:Array<number>) => void;
  cellPos: number;
};

const Cell:FC<CellType> = ({cellArr, setCellArr, cellPos}) => {

    return (
        <CellStyled
            backgroundColor= { cellArr[cellPos] ? Colors.goldMetallic : Colors.grey}
            onClick={() => {
                const newCells = [...cellArr];
                newCells[cellPos] = cellArr[cellPos] === 0 ? 1 : 0;
                setCellArr(newCells);
            }}
        />
    );
};

export default Cell;
