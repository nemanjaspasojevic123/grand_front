import React from 'react';
import { NavBar } from '../navbar/NavBar';
import banner_left from "../../assets/images/vesna_levo.jpg";
import banner_right from "../../assets/images/dragana_desno.jpg";
import { NavTrack } from "../navbar/NavTrack";

export const Emisije = () => {
    return (
        <div className="emisije">
            <div className="emisije-navigation">
                <NavBar />
                <NavTrack />
            </div>
            <div className="emisije-content">
                <div className="emisije-leftBanner">
                    <img src={banner_left} alt="banner_left" className="emisije-leftBannerImage"></img>
                </div>
                <div className="emisije-contentCenter">
                </div>
                <div className="emisije-rightBanner">
                    <img src={banner_right} alt="banner_right" className="emisije-rightBannerImage"></img>
                </div>
            </div>
        </div>
    )
}