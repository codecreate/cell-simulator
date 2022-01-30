export const getCellArr = (gridFactor: number) => {
  const cellArr = [];
  for (let i = 0; i < gridFactor * gridFactor; i++) {
    cellArr.push(0);
  }
  return cellArr;
};

export const isOutsideBoundary = (
  gridFactor: number,
  cellIndex: number,
  neighbourIndex: number,
  isDead = false
) => {
  // Only left and right boundaries need to be calculated.
  // Top and bottom are indexes outside the cellArr

  if (isDead) {
      // TODO: Add improved handling of boundry checking for dead cell neaighbours
  } else {
    if (cellIndex % gridFactor === 0) {
      return (neighbourIndex + 1) % gridFactor === 0;
    } else if (cellIndex % gridFactor === gridFactor - 1) {
      return neighbourIndex % gridFactor === 0;
    }
  }
  return false;
};
