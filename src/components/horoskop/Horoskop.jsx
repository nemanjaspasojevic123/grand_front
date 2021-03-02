import React from 'react';
import { NavBar } from '../navbar/NavBar';
import banner_left from "../../assets/images/horoskop_levo.jpg";
import banner_right from "../../assets/images/horoskop_desno.jpg";
import { NavTrack } from "../navbar/NavTrack";

export const Horoskop = () => {
    return (
        <div className="horoskop">
            <div className="horoskop-navigation">
                <NavBar />
                <NavTrack />
            </div>
            <div className="horoskop-content">
                <div className="horoskop-leftBanner">
                    <img src={banner_left} alt="banner_left" className="horoskop-leftBannerImage"></img>
                </div>
                <div className="horoskop-contentCenter">
                </div>
                <div className="horoskop-rightBanner">
                    <img src={banner_right} alt="banner_right" className="horoskop-rightBannerImage"></img>
                </div>
            </div>
        </div>
    )
}