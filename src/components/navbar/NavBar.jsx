import React from "react";
import logo from "../../assets/logos/Grand_TV_logo.png";
import { Link } from "react-router-dom";
import user from "../../assets/logos/user-solid.svg";
import instagram from "../../assets/logos/instagram-brands.svg";
import facebook from "../../assets/logos/facebook-f-brands.svg";
import youtube from "../../assets/logos/youtube-brands.svg";
import twitter from "../../assets/logos/twitter-brands.svg";


export const NavBar = () => {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container nav-container">
          <Link className="navbar-logo-placeholder" to="/">
            <img src={logo} alt="no img" className="navbar-logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link showbizz" to="/showbiz">
                  Showbizz
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link zvezde-granda" to="/zvezde-granda">
                  Zvezde Granda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nikad-nije-kasno" to="/nikad-nije-kasno">
                  Nikad nije kasno
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link prakticna-zena" to="/prakticna-zena">
                  Praktična žena
                </Link>
              </li>
              <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle horoskop" href="/horoskop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Horoskop
                                </a>
                                <div className="dropdown-menu dropdown-horoskop" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item dropdown-item-grandoskop" to="/grandoskop">Grandoskop</Link>
                                    <Link className="dropdown-item dropdown-item-horoskop" to="/horoskop">Horoskop</Link>
                                </div>
                            </li>
              <li className="nav-item">
                <Link className="nav-link recepti" to="/recepti">
                  Recepti
                </Link>
              </li>
              <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle grand" href="/grand" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Grand
                                </a>
                                <div className="dropdown-menu dropdown-grand" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item dropdown-item-emisije" to="/emisije">Emisije</Link>
                                    <Link className="dropdown-item dropdown-item-programska-sema" to="/programska-sema">Programska šema</Link>
                                </div>
                            </li>
            </ul>
              <Link className="navbar-user" to="/login">
              <img src={user} alt="user icon" className="user-icon"></img>
              </Link>
          </div>
        </div>
      </nav>
      <div className="nav-track">
          <div className="nav-track-program">
              Trenutno na programu: Zvezde Granda
          </div>
          <div className="nav-track-social">
              Pratite nas: 
              <img src={facebook} alt="facebook icon" className="nav-track-social-icon"></img>
              <img src={instagram} alt="instagram icon" className="nav-track-social-icon"></img>
              <img src={youtube} alt="youtube icon" className="nav-track-social-icon"></img>
              <img src={twitter} alt="twitter icon" className="nav-track-social-icon"></img>
          </div>
      </div>
    </div>
  );
};
