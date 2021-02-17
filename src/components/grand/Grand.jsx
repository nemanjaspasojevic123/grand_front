import React from 'react';
import { NavBar } from '../navbar/NavBar';

export const Grand = () => {
    return (
        <div className="grand">
            <div className="grand-leftBanner"></div>
            <div className="grand-center">
                <NavBar />
            </div>
            <div className="grand-rightBanner"></div>
        </div>
    )
}