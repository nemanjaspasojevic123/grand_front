import React from "react";
import { NavBar } from "../navbar/NavBar";
import banner_left from "../../assets/images/sanja_levo.jpg";
import banner_right from "../../assets/images/voja_desno.jpg";
import { NavTrack } from "../navbar/NavTrack";

export const ZvezdeGranda = () => {
  return (
    <div className="zvezdeGranda">
      <div className="zvezdeGranda-navigation">
        <NavBar />
        <NavTrack />
      </div>
      <div className="zvezdeGranda-content">
        <div className="zvezdeGranda-leftBanner">
          <img src={banner_left} alt="banner_left"></img>
        </div>
        <div className="zvezdeGranda-contentCenter">
        </div>
        <div className="zvezdeGranda-rightBanner">
          <img src={banner_right} alt="banner_right"></img>
        </div>
      </div>
    </div>
  );
};
