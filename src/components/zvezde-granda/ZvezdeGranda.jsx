import React from "react";
import { NavBar } from "../navbar/NavBar";
import banner_left from "../../assets/images/sanja_levo.jpg";
import banner_right from "../../assets/images/voja_desno.jpg";
import { NavTrack } from "../navbar/NavTrack";
import { ZGPopularNews } from "./ZGPopularNews";
import { ZGAllNews } from "./ZGAllNews";
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
          <ZGAllNews />
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
