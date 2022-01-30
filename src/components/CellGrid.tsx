import React, { FC, useState } from "react";
import { getCellArr, isOutsideBoundary } from "../helpers/CellFunctions";
import Cell from "./Cell";
import { GridLayout } from "../styles/GridLayout.styled";
import { SliderStyled } from "../styles/Slider.styled";
import { GridControls } from "../styles/GridControls.styled";
import { CellCount } from "../styles/CellCount.styled";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const CellGrid: FC = () => {
  const [gridFactor, setGridFactor] = useState<number>(6);
  const [cellArr, setCellArr] = useState<Array<number>>(getCellArr(gridFactor));

  const cellNeighbours = [
    // neighbouring positions of cells not accounting for edges
    (gridFactor + 1) * -1,
    gridFactor * -1,
    (gridFactor - 1) * -1,
    -1,
    1,
    gridFactor - 1,
    gridFactor,
    gridFactor + 1,
  ];

  const onGridFactorChange = (value: number) => {
    setGridFactor(value);
    resetSimulation(value);
  };

  const resetSimulation = (cellCount:number) => {
    // reset all the cells to 0
    setCellArr(getCellArr(cellCount));
  };

  const generateSimulation = () => {

    const newCells = [...cellArr];

    for (let cellIndex = 0; cellIndex < cellArr.length; cellIndex++) {
      // if newCells[cellIndex] is already different from cellArr[cellIndex]
      // there has been a previous manipulation so continue
      if (newCells[cellIndex] !== cellArr[cellIndex]) continue;

      // determine the fate of the cell by examining the liveliness of it's neightbours
      let liveNeighbours = 0;
      let neighbourIndex;
      const cellValue = cellArr[cellIndex];

      if (cellValue === 1) {
        for (const neighbourOffset of cellNeighbours) {
          neighbourIndex = cellIndex + neighbourOffset;
          if (
            cellArr[neighbourIndex] === 1 &&
            !isOutsideBoundary(gridFactor, cellIndex, neighbourIndex)
          ) {
            liveNeighbours += 1;
          }
        }
        //
        liveNeighbours < 2 || liveNeighbours > 3
          ? (newCells[cellIndex] = 0)
          : (newCells[cellIndex] = 1);
      } else {
        // test dead cells
        // dead cells with 3 neighbours can be spawned off the board
        for (const neighbourOffset of cellNeighbours) {
          neighbourIndex = cellIndex + neighbourOffset;
          if (cellArr[neighbourIndex] === 1) {
            liveNeighbours++;
          }
        }
        if (liveNeighbours === 3) {
          // TODO: Improve the positioning of the spawned cells that appear on opposite side
          newCells[cellIndex] = 1;
        } else {
          newCells[cellIndex] = 0;
        }
      }
    };
    setCellArr(newCells);
  };

  return (
    <>
      <SliderStyled>
        <Slider
          min={6}
          max={24}
          onChange={onGridFactorChange}
          step={6}
          dots={true}
        />
      </SliderStyled>
      <CellCount>
        {`${gridFactor*gridFactor} cells`}
      </CellCount>
      <GridControls>
        <button
          onClick={() => {
            generateSimulation();
          }}
        >
          Next Generation
        </button>
        <button
          onClick={() => {
            resetSimulation(gridFactor);
          }}
        >
          Reset Grid
        </button>
      </GridControls>
      <GridLayout gridFactor={gridFactor} id="grid_layout">
        {cellArr.map((cell, i) => (
          <Cell key={i} cellArr={cellArr} setCellArr={setCellArr} cellPos={i} />
        ))}
      </GridLayout>
    </>
  );
};

export default CellGrid;
