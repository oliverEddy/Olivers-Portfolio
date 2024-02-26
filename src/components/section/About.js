import React, { useEffect } from 'react';
import Skills from '../layouts/Skills';
import { about, skillsBar, section2title } from '../../profile';
import './About.css';

const About = () => {
  // Resize text based on container's width
  const adjustTextSize = () => {
    const container = document.querySelector('.grid-item.about'); // Container
    if (!container) return; // Guard clause if container is not found

    const textElements = container.querySelectorAll('p, h1, .lead'); // Text elements to resize
    let containerWidth = container.offsetWidth; // Get the container's width
    let scaleFactor = 0.035; // Adjust this scale factor as needed

    textElements.forEach(element => {
        let newSize = containerWidth * scaleFactor; // Initial font size calculation
        newSize = Math.max(newSize, 10); // Allow smaller sizes if necessary
        newSize = Math.min(newSize, 18); // Set a maximum size if needed
        element.style.fontSize = `${newSize}px`;
      });
      
  };

  useEffect(() => {
    adjustTextSize(); // Adjust text size on mount
    const handleResize = () => adjustTextSize(); // Create a resize event handler

    window.addEventListener('resize', handleResize); // Add resize event listener

    return () => window.removeEventListener('resize', handleResize); // Cleanup
  }, []);

  return (
    <div id="about" className="effect2">
      <div className="grid-container">
        <div className="grid-item Photo" id="not-dark2"></div>
        <div className="grid-item about">
          <div className="About-title-box">
            <h1 id="About" className="red-line">{section2title}</h1>
          </div>
          <p className="lead about-text">
            {about.paragraph}
          </p>
        </div>
        <div className="grid-item skills" id="Skills">
          {skillsBar.map((x) =>
            <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
