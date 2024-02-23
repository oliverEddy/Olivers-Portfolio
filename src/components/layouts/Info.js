import React from 'react';
import './Info.css';

const Info = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // Open Bitday page in a new tab
    window.open('https://bitday.me/', '_blank');
  };

  return (
    <div className="info-container">
      <i className="fas fa-info-circle info-icon"></i>
      <div className="info-tooltip">
        <p className='info-spec'>Check out the inspiration behind these alternating backgrounds!<br />
          <button onClick={handleClick} className="link-style-button">BitDay Live</button>
        </p>
      </div>
    </div>
  );
}

export default Info;
