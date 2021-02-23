import React from 'react';
import { NavBar } from '../navbar/NavBar';

export const Horoskop = () => {
    return (
        <div className="horoskop">
            <div className="horoskop-navigation">
                <NavBar />
            </div>
            <div className="horoskop-content">
                <div className="horoskop-leftBanner"></div>
                <div className="horoskop-rightBanner"></div>
            </div>
        </div>
    )
}