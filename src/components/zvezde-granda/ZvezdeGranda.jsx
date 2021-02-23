import React from "react";
import { NavBar } from "../navbar/NavBar";
import banner_left from "../../assets/images/sanja_levo.jpg";
import banner_right from "../../assets/images/voja_desno.jpg";
import { Carousel } from "./Carousel";
import { Poll } from "./Poll";

export const ZvezdeGranda = () => {
  return (
    <div className="zvezdeGranda">
      <div className="zvezdeGranda-navigation">
        <NavBar />
      </div>
      <div className="zvezdeGranda-content">
        <div className="zvezdeGranda-leftBanner">
          <img src={banner_left} alt="banner_left"></img>
        </div>
        <div className="zvezdeGranda-contentCenter">
        <Carousel />
        <Poll />
        </div>
        <div className="zvezdeGranda-rightBanner">
          <img src={banner_right} alt="banner_right"></img>
        </div>
      </div>
    </div>
  );
};
