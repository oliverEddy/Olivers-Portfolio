import React from "react";
import HeaderButton from "../layouts/HeaderButton";
import { header } from "../../profile";

const Header = () => {
  return (
    <div>
      <div className="Header">
        <h1>{`${header.name}`}</h1>
        <p className="line-1">and this is my portfolio... </p>

        <HeaderButton />
      </div>
    </div>
  );
};

export default Header;
