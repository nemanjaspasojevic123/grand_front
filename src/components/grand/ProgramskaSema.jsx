import React from 'react';
import { NavBar } from '../navbar/NavBar';

export const ProgramskaSema = () => {
    return (
        <div className="programska-sema">
            <div className="programska-sema-navigation">
                <NavBar />
            </div>
            <div className="programska-sema-content">
                <div className="programska-sema-leftBanner"></div>
                <div className="programska-sema-rightBanner"></div>
            </div>
        </div>
    )
}