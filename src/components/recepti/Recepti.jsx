import React from 'react';
import { NavBar } from '../navbar/NavBar';

export const Recepti = () => {
    return (
        <div className="recepti">
            <div className="recepti-navigation">
                <NavBar />
            </div>
            <div className="recepti-content">
                <div className="recepti-leftBanner"></div>
                <div className="recepti-rightBanner"></div>
            </div>
        </div>
    )
}