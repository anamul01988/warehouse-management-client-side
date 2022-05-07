import React, { useState } from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import slide1 from "../../asset/Banner/slide-1.jpg";
import slide2 from "../../asset/Banner/slide-2.jpg";
import slide3 from "../../asset/Banner/slide-3.jpg";
const Banner = () => {
  //   const [index, setIndex] = useState(0);

  //   const handleSelect = (selectedIndex, e) => {
  //     setIndex(selectedIndex);
  //   };
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block" alt="slide1" />
            <div className="carousel-caption carousel-content  d-md-block text-dark">
              <h5>
                Smart Electronic <br />
                Monitor
              </h5>

              <p>Up to 40% off on electronic monitor</p>
              <div className="btn-carousel d-flex ">
                <button className="carousel-btn">View More</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block " alt="slide2" />
            <div className="carousel-caption carousel-content d-md-block text-dark">
              <h5>
                The Gold <br /> standard of Watch
              </h5>
              <p>Up to 30% off on digital watch</p>
              <div className="btn-carousel d-flex ">
                <button className="carousel-btn">View More</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block" alt="slide3" />
            <div className="carousel-caption carousel-content d-md-block text-dark">
              <h5>
                Electronic best <br />
                accessories
              </h5>
              <p>Up to 40% off</p>
   
              <div className="btn-carousel d-flex ">
                <button className="carousel-btn">View More</button>
              </div>
            
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
