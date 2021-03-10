import React from 'react';
import { NavBar } from '../navbar/NavBar';
import banner_left from "../../assets/images/bakina-vanglica_levo.jpg";
import banner_right from "../../assets/images/bakina-vanglica_desno.jpg";
import reklama from "../../assets/images/reklama.jpg";
import { NavTrack } from "../navbar/NavTrack";
import { RPopularNews } from './RPopularNews';
import { Footer } from '../footer/Footer';
import { TopNews } from './TopNews';

export const Recepti = () => {
    return (
        <div className="recepti">
            <div className="recepti-navigation">
                <NavBar />
                <NavTrack />
            </div>
            <div className="recepti-content">
                <div className="recepti-leftBanner">
                    <img src={banner_left} alt="banner_left" className="recepti-leftBannerImage"></img>
                </div>
                <div className="recepti-contentCenter">
                    <TopNews />
                    <div className="zvezdeGranda-contentCenterReklama">
                        <img src={reklama} alt="reklama img" className="zvezdeGranda-reklamaImage"></img>
                    </div>
                    <RPopularNews />
                    <div className="showbizz-contentCenterFooter">
                        <Footer />
                    </div>
                </div>
                <div className="recepti-rightBanner">
                    <img src={banner_right} alt="banner_right" className="recepti-rightBannerImage"></img>
                </div>
            </div>
        </div>
    )
}