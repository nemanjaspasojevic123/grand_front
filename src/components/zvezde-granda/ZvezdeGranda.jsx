import React from "react";
import { NavBar } from "../navbar/NavBar";
import banner_left from "../../assets/images/sanja_levo.jpg";
import banner_right from "../../assets/images/voja_desno.jpg";
import reklama from "../../assets/images/reklama.jpg";
import { NavTrack } from "../navbar/NavTrack";
import { ZGPopularNews } from "./ZGPopularNews";
import { TopNews } from "./TopNews";
import { Footer } from "../footer/Footer";

export const ZvezdeGranda = () => {
  return (
    <div className="zvezdeGranda">
      <div className="zvezdeGranda-navigation">
        <NavBar />
        <NavTrack />
      </div>
      <div className="zvezdeGranda-content">
        <div className="zvezdeGranda-leftBanner">
          <img src={banner_left} alt="banner_left" className="zvezdeGranda-leftBannerImage"></img>
        </div>
        <div className="zvezdeGranda-contentCenter">
          <TopNews />
          <div className="zvezdeGranda-contentCenterReklama">
            <img src={reklama} alt="reklama img" className="zvezdeGranda-reklamaImage"></img>
          </div>
          <ZGPopularNews />
          <div className="showbizz-contentCenterFooter">
            <Footer />
          </div>
        </div>
        <div className="zvezdeGranda-rightBanner">
          <img src={banner_right} alt="banner_right" className="zvezdeGranda-rightBannerImage"></img>
        </div>
      </div>
    </div>
  );
};
