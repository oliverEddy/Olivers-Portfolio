import React from "react";
import HeaderButton from "../layouts/HeaderButton";
import { header } from "../../profile";
import "./Header.css";

const Header = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // Open Bitday page in a new tab
    window.open('https://bitday.me/', '_blank');
  };

  return (
    <div>
      <div className="Header">
        <h1>{`${header.name}`}</h1>
        <p className="line-1">Welcome to my portfolio showcase!</p>

        <HeaderButton />

        <div className="switch">
          {/* Use FontAwesome icon here */}
          <i className="fas fa-info-circle"></i>
          <p>Check out the inspiration behind these alternating backgrounds!<br />
            {/* Replace <a> with <button> */}
            <button onClick={handleClick} className="link-style-button">BitDay Live</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;