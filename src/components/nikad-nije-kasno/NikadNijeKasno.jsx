import React from 'react';
import { NavBar } from '../navbar/NavBar';

export const NikadNijeKasno = () => {
    return (
        <div className="nikadNijeKasno">
            <div className="nikadNijeKasno-navigation">
                <NavBar />
            </div>
            <div className="nikadNijeKasno-content">
                <div className="nikadNijeKasno-leftBanner"></div>
                <div className="nikadNijeKasno-rightBanner"></div>
            </div>
        </div>
    )
}