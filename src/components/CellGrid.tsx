import React, { FC, useState, useCallback } from "react";
import { getCellArr } from '../helpers/CellFunctions';
import Cell from './Cell';
import { GridLayout } from '../styles/GridLayout.styled';
import useInterval from '../hooks/useInterval';

const gridFactor = 6;

const cellNeighbours = [
  -gridFactor-1,
  -gridFactor,
  -gridFactor+1,
  -1,
  +1,
  +gridFactor-1,
  +gridFactor,
  +gridFactor+1
];

const CellGrid: FC = () => {

  const [cellArr, setCellArr] = useState<Array<number>>(getCellArr(gridFactor));
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const generateSimulation = useCallback((cellArr) => {
    console.log('generate the simulation');

    const newCells = [...cellArr];

    console.log('newCells is ', cellArr);

    for (const [i, thisCell] of cellArr.entries()) {
      // determine the fate of the cell by examining the liveliness of it's neightbours
      let liveNeighbours = 0;

      for (const neighbour of cellNeighbours) {
        if (cellArr[cellArr[i+neighbour]] === 1) {liveNeighbours+=1;};
      };

      // now the liveNeightbours count is known, take the appropriate action
      if (thisCell === 1) {
        console.log('deal with a live cell I have ', liveNeighbours, 'live neighbours');
        liveNeighbours < 2 || liveNeighbours > 3
        ? newCells[i] = 0
        : newCells[i] = 1;
      }
      // }else {
      //   liveNeighbours === 3
      //   ? newCells[i] = 1
      //   : newCells[i] = 0
      // }

      console.log('newCells is  ', newCells);
    };

    setCellArr(newCells);
    
  }, []);

  return (
    <GridLayout>
      {cellArr.map((cell, i) =>
          <Cell
              key={i}
              cellArr={cellArr}
              setCellArr={setCellArr}
              cellPos={i}
          />
        )
      }
      <button onClick={() => { generateSimulation(cellArr); }}>Generate</button>
    </GridLayout>
  );
};

export default CellGrid;
