import React from 'react';
import { NavBar } from '../navbar/NavBar';
import './Grandoskop.css'

export const Grandoskop = () => {
    return (
        <div className="grandoskop">
            <div className="grandoskop-leftBanner"></div>
            <div className="grandoskop-center">
                <NavBar />
            </div>
            <div className="grandoskop-rightBanner"></div>
        </div>
    )
}