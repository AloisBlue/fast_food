import React from "react";
import { Carousel } from 'react-bootstrap'
import sliderImage from '../../images/main1.jpg';
import sliderImage1 from '../../images/main2.jpg';

const Slider = () => {
  return (
    <div>
      <div className="top">
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            height="250"
            src={sliderImage}
            alt="First slide"
          />
        <Carousel.Caption className="text-dark">
            <h3>Welcome to Rosewood Sellers</h3>
            <p>Leading in serving best delicacies</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sliderImage1}
            height="250"
            alt="Third slide"
          />

          <Carousel.Caption className="text-dark">
            <h3>Lets continue together</h3>
            <p>Want this? Go to menu and view then purchase</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sliderImage}
            height="250"
            alt="Third slide"
          />

          <Carousel.Caption className="text-dark">
            <h3>Going beyond borders</h3>
            <p>Making deliveries at your door step</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}

export default Slider;
