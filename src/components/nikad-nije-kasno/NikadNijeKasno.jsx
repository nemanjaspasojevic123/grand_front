import React from 'react';
import { NavBar } from '../navbar/NavBar';
import './NikadNijeKasno.css'

export const NikadNijeKasno = () => {
    return (
        <div className="nikadNijeKasno">
            <div className="nikadNijeKasno-leftBanner"></div>
            <div className="nikadNijeKasno-center">
                <NavBar />
            </div>
            <div className="nikadNijeKasno-rightBanner"></div>
        </div>
    )
}