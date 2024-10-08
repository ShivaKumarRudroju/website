import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

export default function SampleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed:3000,
  };
  return (
    <Slider {...settings}>
      <div className="image-container">
        <img
          src="https://pbs.twimg.com/media/GHtE2rVWcAAo6dy?format=jpg&name=4096x4096"
          alt="img-1"
          className="banner-image"
        />
      </div>
      <div className="image-container">
        <img
          src="https://pbs.twimg.com/media/GHtE2rVWcAAo6dy?format=jpg&name=4096x4096"
          alt="img-2"
          className="banner-image"
        />
      </div>
      <div className="image-container">
        <img
          src="https://pbs.twimg.com/media/GHtE2rVWcAAo6dy?format=jpg&name=4096x4096"
          alt="img-3"
          className="banner-image"
        />
      </div>
      <div className="image-container">
        <img
          src="https://pbs.twimg.com/media/GHtE2rVWcAAo6dy?format=jpg&name=4096x4096"
          alt="img-4"
          className="banner-image"
        />
      </div>
      <div className="image-container">
        <img
          src="https://pbs.twimg.com/media/GHtE2rVWcAAo6dy?format=jpg&name=4096x4096"
          alt="img-5"
          className="banner-image"
        />
      </div>
      <div className="image-container">
        <img
          src="https://pbs.twimg.com/media/GHtE2rVWcAAo6dy?format=jpg&name=4096x4096"
          alt="img-6"
          className="banner-image"
        />
      </div>
    </Slider>
  );
}
