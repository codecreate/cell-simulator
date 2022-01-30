import React from "react";
import { render } from "@testing-library/react";
import Cell from '../Cell';

describe("Cell Component Test", () => {
	it("renders the component", async () => {

        const cellArr = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];

        const setCellArr = () => {}

        render(
			<Cell
                cellArr={cellArr}
                setCellArr={setCellArr}
                cellPos={0}
            />
		);
	});
});
