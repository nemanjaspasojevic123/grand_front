import React from 'react';
import { NavBar } from '../navbar/NavBar';

export const Showbiz = () => {
    return (
        <div className="showbiz">
            <div className="showbiz-navigation">
                <NavBar />
            </div>
            <div className="showbiz-content">
                <div className="showbiz-leftBanner"></div>
                <div className="showbiz-rightBanner"></div>
            </div>
        </div>
    )
}