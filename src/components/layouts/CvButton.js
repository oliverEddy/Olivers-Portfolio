import React from 'react';
import './CvButton.css';

const CvButton = () => {
  return (
    <div> 
      <a href="URL_TO_YOUR_CV_HERE" download>
        <button className="cvButton">
          <span>Download CV <i className="fas fa-download"></i></span>
        </button>
      </a>
    </div>
  );
}

export default CvButton;
