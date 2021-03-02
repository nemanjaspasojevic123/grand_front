import React from 'react';
import { NavBar } from '../navbar/NavBar';
import banner_left from "../../assets/images/horoskop_levo.jpg";
import banner_right from "../../assets/images/horoskop_desno.jpg";
import { NavTrack } from "../navbar/NavTrack";

export const Grandoskop = () => {
    return (
        <div className="grandoskop">
            <div className="grandoskop-navigation">
                <NavBar />
                <NavTrack />
            </div>
            <div className="grandoskop-content">
                <div className="grandoskop-leftBanner">
                    <img src={banner_left} alt="banner_left" className="grandoskop-leftBannerImage"></img>
                </div>
                <div className="grandoskop-contentCenter">
                </div>
                <div className="grandoskop-rightBanner">
                    <img src={banner_right} alt="banner_right" className="grandoskop-rightBannerImage"></img>
                </div>
            </div>
        </div>
    )
}