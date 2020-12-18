import React from 'react';
import { NavBar } from '../navbar/NavBar';
import './Horoskop.css'

export const Horoskop = () => {
    return (
        <div className="horoskop">
            <div className="horoskop-leftBanner"></div>
            <div className="horoskop-center">
                <NavBar />
            </div>
            <div className="horoskop-rightBanner"></div>
        </div>
    )
}