import React from 'react';
import { NavBar } from '../navbar/NavBar';
import './ZvezdeGranda.css';
import banner_left from '../../assets/images/sanja_levo.jpg';
import banner_right from '../../assets/images/voja_desno.jpg';

export const ZvezdeGranda = () => {
    return (
        <div className="zvezdeGranda">
            <div className="zvezdeGranda-leftBanner">
                <img src={banner_left} alt="banner_left"></img>
            </div>
            <div className="zvezdeGranda-center">
                <NavBar />
            </div>
            <div className="zvezdeGranda-rightBanner">
                <img src={banner_right} alt="banner_right"></img>
            </div>
        </div>
    )
}