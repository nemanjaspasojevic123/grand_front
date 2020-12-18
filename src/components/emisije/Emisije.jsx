import React from 'react';
import { NavBar } from '../navbar/NavBar';
import './Emisije.css'

export const Emisije = () => {
    return (
        <div className="emisije">
            <div className="emisije-leftBanner"></div>
            <div className="emisije-center">
                <NavBar />
            </div>
            <div className="emisije-rightBanner"></div>
        </div>
    )
}