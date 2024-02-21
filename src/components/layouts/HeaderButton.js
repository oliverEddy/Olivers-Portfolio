import React from 'react';

const HeaderButton = () => {
  return (
    <div className="mx-auto">
      {/* Wrap the button in an anchor tag for navigation */}
      <a href="#about" className="see-anchor">
        <button className="see">
          <span className="text-icon-wrapper">Checkout Portfolio<i className="fas fa-hand-point-down"></i></span>
        </button>
      </a>
    </div>
  );
}

export default HeaderButton;