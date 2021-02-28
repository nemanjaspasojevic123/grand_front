import React from 'react';
import instagram from "../../assets/logos/instagram-brands.svg";
import facebook from "../../assets/logos/facebook-f-brands.svg";
import youtube from "../../assets/logos/youtube-brands.svg";
import twitter from "../../assets/logos/twitter-brands.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-icons">
              <img src={facebook} alt="facebook icon" className="nav-track-social-icon"></img>
              <img src={instagram} alt="instagram icon" className="nav-track-social-icon"></img>
              <img src={youtube} alt="youtube icon" className="nav-track-social-icon"></img>
              <img src={twitter} alt="twitter icon" className="nav-track-social-icon"></img>
            </div>
        </footer>
    )
}