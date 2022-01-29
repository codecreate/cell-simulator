import React, { FC, useState, useCallback } from "react";
import { getCellArr } from '../helpers/CellFunctions';
import Cell from './Cell';
import { GridLayout } from '../styles/GridLayout.styled';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const CellGrid: FC = () => {

  const [gridFactor, setGridFactor] = useState<number>(6);
  const [cellArr, setCellArr] = useState<Array<number>>(getCellArr(gridFactor));
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const cellNeighbours = [
    (gridFactor-1)*-1,
    gridFactor*-1,
    (gridFactor+1)*-1,
    -1,
    1,
    gridFactor-1,
    gridFactor,
    gridFactor+1
  ];

  const onGridFactorChange = (value:number) => {
    console.log('updating the grid factor');
    // setGridFactor(value);
    // setCellArr(getCellArr(gridFactor));
  }

  const generateSimulation = useCallback((cellArr) => {
    const newCells = [...cellArr];

    for (const [i, thisCell] of cellArr.entries()) {
      // determine the fate of the cell by examining the liveliness of it's neightbours
      let liveNeighbours = 0;

      for (const neighbour of cellNeighbours) {
        const neighbourIndex = i+neighbour;
        console.log('neightbour index is ',neighbourIndex);
        if (cellArr[neighbourIndex] === 1) {
          liveNeighbours+=1;
        };
      };

      // now the liveNeightbours count is known, take the appropriate action
      if (thisCell === 1) {
        liveNeighbours < 2 || liveNeighbours > 3
        ? newCells[i] = 0
        : newCells[i] = 1;
      } else {
        liveNeighbours === 3
        ? newCells[i] = 1
        : newCells[i] = 0
      }
    };
    setCellArr(newCells);
  }, []);

  return (
    <>
      <GridLayout gridFactor={gridFactor}>
        {cellArr.map((cell, i) =>
            <Cell
                key={i}
                cellArr={cellArr}
                setCellArr={setCellArr}
                cellPos={i}
            />
          )
        }
        
      </GridLayout>
      
      <button onClick={() => { generateSimulation(cellArr); }}>Generate</button>
      <Slider
        min={6}
        max={36}
        onChange={onGridFactorChange}
        step={6}
        dots={true}
      />
    </>
  );
};

export default CellGrid;
