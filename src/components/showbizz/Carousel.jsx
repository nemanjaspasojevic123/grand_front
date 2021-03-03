import React from "react";
import carouselImg1 from "../../assets/images/0441d459c02d91dc8bbbe04d8a2d143c8ede027f.jpg";
import carouselImg2 from "../../assets/images/a75d2b7b743ef29916a971288b31515675d69e19.jpg";
import carouselImg3 from "../../assets/images/d398e60a4b6c6551f600659ccdb6a9172251a28f.jpg";
import carouselImg4 from "../../assets/images/f99437bda3b59540a69fa785cb76d682f9f15fce.jpg";
import carouselImg5 from "../../assets/images/0f4bbac0aae9422ed4b6a8073d3de2712088c3a1.jpg";

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
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={carouselImg1} alt="First slide" />
          <div className="carousel-caption">
            <div className="carousel-captionDateTitle">
              <p>02.03.2021.</p>
              <h4>Nepoznati detalji sa svadbe Voje Nedeljkovića: "KAO PAPUČAR sam ušao u ovaj brak!"</h4>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={carouselImg2} alt="Second slide" />
          <div className="carousel-caption">
            <div className="carousel-captionDateTitle">
              <p>02.03.2021.</p>
              <h4>Nakon kritika da se izoperisala, pevačica poručila hejterima "JA GLEDAM U SVOJE DVORIŠTE A ONI..."</h4>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={carouselImg3} alt="Third slide" />
          <div className="carousel-caption">
            <div className="carousel-captionDateTitle">
              <p>01.03.2021.</p>
              <h4>SUZE ĆE VAM SAME KRENUTI Darko Lazić novu pesmu posvetio preminulom ocu (VIDEO)</h4>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={carouselImg4} alt="Fourth slide" />
          <div className="carousel-caption">
            <div className="carousel-captionDateTitle">
              <p>01.03.2021.</p>
              <h4>Ivana Peters otkrila svoj LJUBAVNI STATUS pa izjavila: ''Ljubav je POREMEĆAJ, to je treće stanje''</h4>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={carouselImg5} alt="Fifth slide" />
          <div className="carousel-caption">
            <div className="carousel-captionDateTitle">
              <p>02.03.2021.</p>
              <h4>Kaća Živković kadrovima iz teretane zapalila internet! Pevačica pokazala izvajano telo</h4>
            </div>
          </div>
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
