import React from "react";
import MainHeader from "./MainHeader";
import MainNav from "./MainNav";

import "./Header.scss";

export const Header = () => {
  return (
    <div className="app-header">
      <MainHeader />
      <MainNav />
    </div>
  );
};

export default Header;
