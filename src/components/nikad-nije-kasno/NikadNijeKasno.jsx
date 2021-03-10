import React from 'react';
import { NavBar } from '../navbar/NavBar';
import banner_left from "../../assets/images/dragana_levo.jpg";
import banner_right from "../../assets/images/zika_desno.jpg";
import { NavTrack } from "../navbar/NavTrack";
import { NNKPopularNews } from './NNKPopularNews';
import { Footer } from '../footer/Footer';

export const NikadNijeKasno = () => {
    return (
        <div className="nikadNijeKasno">
            <div className="nikadNijeKasno-navigation">
                <NavBar />
                <NavTrack />
            </div>
            <div className="nikadNijeKasno-content">
                <div className="nikadNijeKasno-leftBanner">
                    <img src={banner_left} alt="banner_left" className="nikadNijeKasno-leftBannerImage"></img>
                </div>
                <div className="nikadNijeKasno-contentCenter">
                    <NNKPopularNews />
                    <div className="showbizz-contentCenterFooter">
                        <Footer />
                    </div>
                </div>
                <div className="nikadNijeKasno-rightBanner">
                    <img src={banner_right} alt="banner_right" className="nikadNijeKasno-rightBannerImage"></img>
                </div>
            </div>
        </div>
    )
}