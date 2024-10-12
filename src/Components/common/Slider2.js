/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/img-redundant-alt */
// SliderComponent.js
import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Slider2 = () => {
  return (
    <Container fluid>
      <Carousel className="mt--120">
       {/*  <Carousel.Item>
          <video className="d-block w-100 resimSlider" autoPlay muted loop>
            <source src="/assets/İndizayn Map.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item> */}

        <Carousel.Item>
          <img
            src="assets/images/s4.png"
            className="d-block w-100 resimSlider"
            alt="Slide 3"
          />
          {/* <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>This is the third slide with an image.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="assets/images/s3.png"
            className="d-block w-100 resimSlider"
            alt="Slide 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="assets/images/slider-3.jpg"
            className="d-block w-100 resimSlider"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider2;
