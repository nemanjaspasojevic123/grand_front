import React from 'react';
import { NavBar } from '../navbar/NavBar';

export const Grandoskop = () => {
    return (
        <div className="grandoskop">
            <div className="grandoskop-navigation">
                <NavBar />
            </div>
            <div className="grandoskop-content">
                <div className="grandoskop-leftBanner"></div>
                <div className="grandoskop-rightBanner"></div>
            </div>
        </div>
    )
}