import React from "react";
import carouselImg1 from "../../assets/images/0441d459c02d91dc8bbbe04d8a2d143c8ede027f.jpg";
import carouselImg2 from "../../assets/images/a75d2b7b743ef29916a971288b31515675d69e19.jpg";
import carouselImg3 from "../../assets/images/d398e60a4b6c6551f600659ccdb6a9172251a28f.jpg";
import carouselImg4 from "../../assets/images/f99437bda3b59540a69fa785cb76d682f9f15fce.jpg";
import carouselImg5 from "../../assets/images/0f4bbac0aae9422ed4b6a8073d3de2712088c3a1.jpg";
import Carousel from 'react-bootstrap/Carousel'

export const ShowbizzCarousel = () => {
  return (
    <div className="showbizz-carousel">
      <Carousel slide={true} interval={5000}>
        <Carousel.Item>
          <img className="d-block w-100" src={carouselImg1} alt="First slide" />
          <Carousel.Caption>
            <div className="carousel-captionDateTitle">
              <p>02.03.2021.</p>
              <h4>
                Nepoznati detalji sa svadbe Voje Nedeljkovića: "KAO PAPUČAR sam
                ušao u ovaj brak!"
              </h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImg2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="carousel-captionDateTitle">
              <p>02.03.2021.</p>
              <h4>
                Nakon kritika da se izoperisala, pevačica poručila hejterima "JA
                GLEDAM U SVOJE DVORIŠTE A ONI..."
              </h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carouselImg3} alt="Third slide" />

          <Carousel.Caption>
            <div className="carousel-captionDateTitle">
              <p>01.03.2021.</p>
              <h4>
                SUZE ĆE VAM SAME KRENUTI Darko Lazić novu pesmu posvetio
                preminulom ocu (VIDEO)
              </h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carouselImg4} alt="Third slide" />

          <Carousel.Caption>
            <div className="carousel-captionDateTitle">
              <p>01.03.2021.</p>
              <h4>
                Ivana Peters otkrila svoj LJUBAVNI STATUS pa izjavila: ''Ljubav
                je POREMEĆAJ, to je treće stanje''
              </h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carouselImg5} alt="Third slide" />

          <Carousel.Caption>
            <div className="carousel-captionDateTitle">
              <p>02.03.2021.</p>
              <h4>
                Kaća Živković kadrovima iz teretane zapalila internet! Pevačica
                pokazala izvajano telo
              </h4>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
