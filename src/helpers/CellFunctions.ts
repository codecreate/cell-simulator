export const getCellArr = (gridFactor:number) => {
    const cellArr = [];
    for (let i = 0; i < gridFactor*gridFactor; i++) {
        cellArr.push(0);
    }
    return cellArr;
};
