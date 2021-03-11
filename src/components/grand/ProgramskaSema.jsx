import React from 'react';
import { NavBar } from '../navbar/NavBar';
import banner_left from "../../assets/images/vesna_levo.jpg";
import banner_right from "../../assets/images/dragana_desno.jpg";
import reklama from "../../assets/images/reklama.jpg";
import { NavTrack } from "../navbar/NavTrack";
import { PSPopularNews } from './PSPopularNews';
import { Footer } from '../footer/Footer';
import { PSTopNews } from './PSTopNews';
import { Premijera } from './Premijera';
import { SlikaDana } from './SlikaDana';
import { Facebook } from './Facebook';

export const ProgramskaSema = () => {
    return (
        <div className="programskaSema">
            <div className="programskaSema-navigation">
                <NavBar />
                <NavTrack />
            </div>
            <div className="programskaSema-content">
                <div className="programskaSema-leftBanner">
                    <img src={banner_left} alt="banner_left" className="programskaSema-leftBannerImage"></img>
                </div>
                <div className="programskaSema-contentCenter">
                    <PSTopNews />
                    <div className="zvezdeGranda-contentCenterReklama">
                        <img src={reklama} alt="reklama img" className="zvezdeGranda-reklamaImage"></img>
                    </div>
                    <div className="emisije-contentCenterMain">
                        <div className="emisije-contentCenterMainNews">
                            <PSPopularNews />
                        </div>
                        <div className="emisije-contentCenterPromotions">
                            <Premijera />
                            <SlikaDana />
                            <Facebook />
                        </div>
                    </div>
                    <div className="showbizz-contentCenterFooter">
                        <Footer />
                    </div>
                </div>
                <div className="programskaSema-rightBanner">
                    <img src={banner_right} alt="banner_right" className="programskaSema-rightBannerImage"></img>
                </div>
            </div>
        </div>
    )
}