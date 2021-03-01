import React from 'react';
import instagram from "../../assets/logos/instagram-brands.svg";
import facebook from "../../assets/logos/facebook-f-brands.svg";
import youtube from "../../assets/logos/youtube-brands.svg";
import twitter from "../../assets/logos/twitter-brands.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="https://grand.online/policy" target="_blank" rel="noreferrer" className="footer-link">Politika privatnosti</a>
                <a href="https://grand.online/tos" target="_blank" rel="noreferrer" className="footer-link">Uslovi korišćenja</a>
                <a href="https://grand.online/cookie" target="_blank" rel="noreferrer" className="footer-link">Politika kolačića</a>
            </div>
            <div className="footer-icons">
              <img src={facebook} alt="facebook icon" className="nav-track-social-icon"></img>
              <img src={instagram} alt="instagram icon" className="nav-track-social-icon"></img>
              <img src={youtube} alt="youtube icon" className="nav-track-social-icon"></img>
              <img src={twitter} alt="twitter icon" className="nav-track-social-icon"></img>
            </div>
            <div>
                <h6 className="footer-copyright">© Grand Online 2021</h6>
            </div>
        </footer>
    )
}