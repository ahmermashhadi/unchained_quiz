import React from "react";
import { Logo } from "../../../components/Logo/Logo";
import { MobileSideNav } from "../../../components/MobileSideNav/MobileSideNav";
import { NavigationBar } from "../../../components/NavigationBar/NavigationBar";
import { SearchBar } from "../../../components/SearchBar/SearchBar";
import { ShoppingCart } from "../../ShoppingCart/ShoppingCart";

import "./MainHeader.scss";

export const MainHeader = () => {
  return (
    <div className="main-header w-full">
      <Logo />
      <SearchBar />
      <NavigationBar />
      <ShoppingCart />
      <MobileSideNav />
    </div>
  );
};

export default MainHeader;
