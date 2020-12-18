import React from 'react';
import { NavBar } from '../navbar/NavBar';
import './Showbiz.css'

export const Showbiz = () => {
    return (
        <div className="showbiz">
            <div className="showbiz-leftBanner"></div>
            <div className="showbiz-center">
                <NavBar />
            </div>
            <div className="showbiz-rightBanner"></div>
        </div>
    )
}