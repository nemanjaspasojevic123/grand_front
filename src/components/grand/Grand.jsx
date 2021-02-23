import React from 'react';
import { NavBar } from '../navbar/NavBar';

export const Grand = () => {
    return (
        <div className="grand">
            <div className="grand-navigation">
                <NavBar />
            </div>
            <div className="grand-content">
                <div className="grand-leftBanner"></div>
                <div className="grand-rightBanner"></div>
            </div>
        </div>
    )
}