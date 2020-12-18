import React from 'react';
import { NavBar } from '../navbar/NavBar';
import './ProgramskaSema.css'

export const ProgramskaSema = () => {
    return (
        <div className="programskaSema">
            <div className="programskaSema-leftBanner"></div>
            <div className="programskaSema-center">
                <NavBar />
            </div>
            <div className="programskaSema-rightBanner"></div>
        </div>
    )
}