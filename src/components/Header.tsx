import React, { FC } from "react";
import { HeaderLayout } from '../styles/HeaderLayout.styled';

const Header: FC = () => {

  return (
    <HeaderLayout>
      <h1>
        Cell Simulator
      </h1>
      <p>Select and deselect cells to initialise the grid then procede to create generations or clear the grid and start again.</p>
      <p>Use the slider to update the number of cells</p>
    </HeaderLayout>
  );
};

export default Header;
