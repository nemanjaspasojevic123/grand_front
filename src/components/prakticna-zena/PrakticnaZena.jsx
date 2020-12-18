import React from 'react';
import { NavBar } from '../navbar/NavBar';
import './PrakticnaZena.css'

export const PrakticnaZena = () => {
    return (
        <div className="prakticnaZena">
            <div className="prakticnaZena-leftBanner"></div>
            <div className="prakticnaZena-center">
                <NavBar />
            </div>
            <div className="prakticnaZena-rightBanner"></div>
        </div>
    )
}