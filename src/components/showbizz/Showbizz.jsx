import React from 'react';
import { NavBar } from '../navbar/NavBar';
import banner_left from "../../assets/images/sanja_levo.jpg";
import banner_right from "../../assets/images/voja_desno.jpg";
import { Carousel } from "./Carousel";
import { Poll } from "./Poll";
import { News } from "./News";
import { Footer } from '../footer/Footer';
import { NavTrack } from '../navbar/NavTrack';

export const Showbizz = () => {
    return (
        <div className="showbizz">
          <NavBar />
          <NavTrack />
          <div className="showbizz-content">
          <div className="showbizz-leftBanner">
            <img src={banner_left} alt="banner_left" className="showbizz-leftBannerImage"></img>
          </div>
          <div className="showbizz-rightBanner">
            <img src={banner_right} alt="banner_right" className="showbizz-rightBannerImage"></img>
          </div>
          <div className="showbizz-contentCenter">
            <div className="showbizz-contentCenterCarousel">
              <Carousel />
              <Poll />
            </div>
            <div className="showbizz-contentCenterNews">
              <News />
            </div>
            <Footer />
          </div>
          </div>
        </div>
    )
}