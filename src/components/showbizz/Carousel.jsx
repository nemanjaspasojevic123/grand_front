import React from "react";
import chicago from "../../assets/images/chicago-1791002_1280.jpg";
import newyork from "../../assets/images/city-1150026_1280.jpg";
import london from "../../assets/images/london-2393098_1280.jpg";
import belgrade from "../../assets/images/most-na-adi-4569762_1280.jpg";

export const Carousel = () => {
  return (
      <div className="showbizz-carousel">
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={chicago} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={london} alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={newyork} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={belgrade} alt="Fourth slide" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </div>
  );
};
