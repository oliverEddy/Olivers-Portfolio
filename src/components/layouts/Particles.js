import React, { useState, useEffect } from "react";
import Bitday1 from "../../Bitday-IMG/bitday01.png";
import Bitday2 from"../../Bitday-IMG/bitday02.png";
import Bitday3 from "../../Bitday-IMG/bitday03.png";
import Bitday4 from"../../Bitday-IMG/bitday04.png";
import Bitday5 from "../../Bitday-IMG/bitday05.png";
import Bitday6 from "../../Bitday-IMG/bitday06.png";
import Bitday7 from "../../Bitday-IMG/bitday07.png";
import Bitday8 from "../../Bitday-IMG/bitday08.png";
import Bitday9 from "../../Bitday-IMG/bitday09.png";
import Bitday10 from "../../Bitday-IMG/bitday10.png";
import Bitday11 from"../../Bitday-IMG/bitday11.png";
import Bitday12 from "../../Bitday-IMG/bitday12.png";
import "./Particles.css";

const imageValueMap = {
  [Bitday1]: 0,
  [Bitday2]: 1,
  [Bitday3]: 2,
  [Bitday4]: 3,
  [Bitday5]: 4,
  [Bitday6]: 5,
  [Bitday7]: 6,
  [Bitday8]: 7,
  [Bitday9]: 8,
  [Bitday10]: 9,
  [Bitday11]: 10,
  [Bitday12]: 11,
};

const imageUrls = Object.keys(imageValueMap);

const ParticlesBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };
  
  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  useEffect(() => {
    // Update background image based on current time
    const updateBackground = () => {
      const d = new Date();
      const hour = d.getHours();
      const cssClass = getPicture(hour);
      setCurrentImageIndex(cssClass);
    };

    // Set initial background image
    updateBackground();

    // Update background image every minute
    const interval = setInterval(updateBackground, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`particle bg-${currentImageIndex}`}>
      <div
        className="image-container"
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          backgroundImage: `url(${imageUrls[currentImageIndex]})`,
          backgroundPosition: "left top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overscrollBehavior: "none"
        }}
      ></div>
    <button onClick={previousImage} style={{ position: "absolute", left: "20px", top: "50%", zIndex: 1000 }}>Left</button>
<button onClick={nextImage} style={{ position: "absolute", right: "20px", top: "50%", zIndex: 1000 }}>Right</button>

</div>

  );
};

// Function to determine the picture index based on the hour
function getPicture(hour) {
  if (hour >= 23 || hour <= 2) return imageValueMap[imageUrls[11]];
  else if (hour >= 22) return imageValueMap[imageUrls[10]];
  else if (hour >= 21) return imageValueMap[imageUrls[9]];
  else if (hour >= 19) return imageValueMap[imageUrls[8]];
  else if (hour >= 16) return imageValueMap[imageUrls[7]];
  else if (hour >= 15) return imageValueMap[imageUrls[6]];
  else if (hour >= 13) return imageValueMap[imageUrls[5]];
  else if (hour >= 12) return imageValueMap[imageUrls[4]];
  else if (hour >= 10) return imageValueMap[imageUrls[3]];
  else if (hour >= 7) return imageValueMap[imageUrls[2]];
  else if (hour >= 5) return imageValueMap[imageUrls[1]];
  else return imageValueMap[imageUrls[0]];
}

export default ParticlesBackground;