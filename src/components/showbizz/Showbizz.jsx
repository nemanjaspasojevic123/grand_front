import React from 'react';
import { NavBar } from '../navbar/NavBar';
import banner_left from "../../assets/images/sanja_levo.jpg";
import banner_right from "../../assets/images/voja_desno.jpg";
import { Carousel } from "./Carousel";
import { Poll } from "./Poll";
import { News } from "./News";
import { Footer } from '../footer/Footer';
import { NavTrack } from '../navbar/NavTrack';
import { PopularNews } from './PopularNews';
import { Shows } from './Shows';
import { MostReadNews } from './MostReadNews';

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
            <div className="showbizz-contentCenterPopularNews">
              <PopularNews />
            </div>
            <div className="showbizz-contentCenterSecond">
            <div className="showbizz-contentCenterShows">
              <Shows />
            </div>
            <div className="showbizz-contentCenterMostReadNews">
              <MostReadNews />
            </div>
            </div>
            <div className="showbizz-contentCenterFooter">
            <Footer />
            </div>
          </div>
          </div>
        </div>
    )
}