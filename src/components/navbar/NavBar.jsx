import React from "react";
import logo from "../../assets/logos/Grand_TV_logo.png";
import { Link } from "react-router-dom";

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
              <li className="nav-item">
                <Link className="nav-link horoskop" to="/horoskop">
                  Horoskop
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/horoskop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Horoskop
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/grandoskop">Grandoskop</Link>
                                    <Link className="dropdown-item" to="/horoskop">Horoskop</Link>
                                </div>
                            </li> */}
              <li className="nav-item">
                <Link className="nav-link recepti" to="/recepti">
                  Recepti
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link grand" to="/grand">
                  Grand
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/grand" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Grand
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/emisije">Emisije</Link>
                                    <Link className="dropdown-item" to="/programska-sema">Programska šema</Link>
                                </div>
                            </li> */}
            </ul>
              <Link className="navbar-user" to="/login">
                <i className="fa fa-user fa-lg"></i>
              </Link>
          </div>
        </div>
      </nav>
      <div className="nav-track">
          <div className="nav-track-program">
              Trenutno na programu: Zvezde Granda
          </div>
          <div className="nav-track-social">
              Pratite nas: <i className="fa fa-instagram fa-lg"></i><i className="fa fa-facebook fa-lg"></i>
          </div>
      </div>
    </div>
  );
};
