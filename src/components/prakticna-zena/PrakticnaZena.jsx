import React from 'react';
import { NavBar } from '../navbar/NavBar';
import banner_left from "../../assets/images/Prakticna_levo.jpg";
import banner_right from "../../assets/images/Prakticna_desno.jpg";
import { NavTrack } from "../navbar/NavTrack";

export const PrakticnaZena = () => {
    return (
        <div className="prakticnaZena">
            <div className="prakticnaZena-navigation">
                <NavBar />
                <NavTrack />
            </div>
            <div className="prakticnaZena-content">
                <div className="prakticnaZena-leftBanner">
                    <img src={banner_left} alt="banner_left" className="prakticnaZena-leftBannerImage"></img>
                </div>
                <div className="prakticnaZena-contentCenter">
                </div>
                <div className="prakticnaZena-rightBanner">
                    <img src={banner_right} alt="banner_right" className="prakticnaZena-rightBannerImage"></img>
                </div>
            </div>
        </div>
    )
}