import React from 'react';

const HeaderButton = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const aboutSection = document.getElementById('about');
    const style = window.getComputedStyle(aboutSection);
    const marginTop = parseInt(style.marginTop.replace('px', ''));
    const topPosition = aboutSection.offsetTop - marginTop;
    window.scrollTo({ top: topPosition, behavior: 'smooth' });
  };

  return (
    <div className="mx-auto">
      <a href="#about" className="see-anchor" onClick={handleClick}>
        <button className="see">
          <span className="text-icon-wrapper">Checkout Portfolio<i className="fas fa-hand-point-down"></i></span>
        </button>
      </a>
    </div>
  );
}

export default HeaderButton;