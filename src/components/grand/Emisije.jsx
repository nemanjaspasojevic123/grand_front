import React from 'react';
import { NavBar } from '../navbar/NavBar';

export const Emisije = () => {
    return (
        <div className="emisije">
            <div className="emisije-navigation">
                <NavBar />
            </div>
            <div className="emisije-content">
                <div className="emisije-leftBanner"></div>
                <div className="emisije-rightBanner"></div>
            </div>
        </div>
    )
}