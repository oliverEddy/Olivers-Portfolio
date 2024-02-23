import React from "react";
import HeaderButton from "../layouts/HeaderButton";
import Info from '../layouts/Info';
import { header } from "../../profile";
import "./Header.css";


const Header = () => {
 

  return (
    <div className="Header">
      <div className="Header-grid">
        <h1>{header.name}</h1>
        <p className="line-1">Welcome to my portfolio showcase!</p>
        <div className="HeaderButton">
          <HeaderButton />
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Header;
