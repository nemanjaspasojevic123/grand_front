import React from "react";
import showbizzImg1 from "../../assets/images/de22b6bc325b4cc3593b7cf7252bf0c156c2b28e.jpg";
import showbizzImg2 from "../../assets/images/c3b7d134fc9268bee50baab49ec1f2c07b2e2a65.jpg";
import showbizzImg3 from "../../assets/images/9ee9aae3a19b81f777a5447e81cda96b266999f7.jpg";
import showbizzImg4 from "../../assets/images/5e457019b10d0855da8ec84e2c61d71d49a10484.jpg";
import { Link } from "react-router-dom";

export const News = () => {
  return (
    <section className="showbizz-news">
      <div className="showbizz-newsItems">
      <Link to="/newsTest">
        <div className="showbizz-newsBrand">
          <p className="showbizz-newsBrandText showbizz-nikadNijeKasno">NIKAD NIJE KASNO</p>
        </div>
        <div className="showbizz-newsItemsImage">
          <img
            src={showbizzImg1}
            alt="showbizz img1"
            className="showbizz-newsItem"
          />
        </div>
        <div className="showbizz-newsTitle">
          <span className="showbizz-newsItemTitle">Znamo ga kao markantnog, ali nekada je furao TOTALNO DRUGI STIL! Pogledajte kako je Mare izgledao ranije</span>
        </div>
      </Link>
      </div>
      <div className="showbizz-newsItems">
        <div className="showbizz-newsBrand">
          <p className="showbizz-newsBrandText showbizz-grand">GRAND</p>
        </div>
        <div className="showbizz-newsItemsImage">
          <img
            src={showbizzImg2}
            alt="showbizz img2"
            className="showbizz-newsItem"
          />
        </div>
        <div className="showbizz-newsTitle">
            <span className="showbizz-newsItemTitle">Zoran Pejić Peja otvoreno o braku: "Žena mi UVEK OBUVA ČARAPE!"</span>
        </div>
      </div>
      <div className="showbizz-newsItems">
        <div className="showbizz-newsBrand">
          <p className="showbizz-newsBrandText showbizz-grand">GRAND</p>
        </div>
        <div className="showbizz-newsItemsImage">
          <img
            src={showbizzImg3}
            alt="showbizz img3"
            className="showbizz-newsItem"
          />
        </div>
        <div className="showbizz-newsTitle">
            <span className="showbizz-newsItemTitle">PONOVO NA NOGAMA! Amadeus bend se DIŽE IZ PEPELA i nastavlja u novom sastavu!</span>
        </div>
      </div>
      <div className="showbizz-newsItems">
        <div className="showbizz-newsBrand">
          <p className="showbizz-newsBrandText showbizz-grand">GRAND</p>
        </div>
        <div className="showbizz-newsItemsImage">
          <img
            src={showbizzImg4}
            alt="showbizz img4"
            className="showbizz-newsItem"
          />
        </div>
        <div className="showbizz-newsTitle">
            <span className="showbizz-newsItemTitle">Pevač godinu dana živi u KOLIBI, završio u ZATVORU i zakukao „Nadam se da ću uskoro doći u Srbiju“</span>
        </div>
      </div>
    </section>
  );
};
