import React from "react";
import sliderImage from '../../images/main1.jpg';

const Slider = () => {
  return (
    <div>
      <div className="top">
      </div>
      <div className="slider">
        <img
          width="1110"
          height="250"
          src={sliderImage}
          alt="slider"
        />
      </div>
    </div>
  );
}

export default Slider;
