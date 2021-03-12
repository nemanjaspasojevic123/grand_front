import React from "react";
import logo from "../../assets/logos/top-bar-logo.svg";
import { Link } from "react-router-dom";
import user from "../../assets/logos/user.svg";

export const NavBar = () => {
  return (
    <div className="navigationBar">
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
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
              <li className="nav-item showbizzLink">
                <Link className="nav-link" to="/showbizz">
                  Showbizz
                </Link>
              </li>
              <li className="nav-item zvezde-grandaLink">
                <Link className="nav-link" to="/zvezde-granda">
                  Zvezde Granda
                </Link>
              </li>
              <li className="nav-item nikad-nije-kasnoLink">
                <Link className="nav-link" to="/nikad-nije-kasno">
                  Nikad nije kasno
                </Link>
              </li>
              <li className="nav-item prakticna-zenaLink">
                <Link className="nav-link" to="/prakticna-zena">
                  Praktična žena
                </Link>
              </li>
              <li className="nav-item dropdown horoskopLink">
                                <a className="nav-link dropdown-toggle" href="/horoskop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    Horoskop
                                </a>
                                <div className="dropdown-menu dropdown-horoskop" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item dropdown-item-grandoskop" to="/grandoskop">Grandoskop</Link>
                                    <Link className="dropdown-item dropdown-item-horoskop" to="/horoskop">Horoskop</Link>
                                </div>
                            </li>
              <li className="nav-item receptiLink">
                <Link className="nav-link" to="/recepti">
                  Recepti
                </Link>
              </li>
              <li className="nav-item dropdown grandLink">
                                <a className="nav-link dropdown-toggle" href="/grand" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Grand
                                </a>
                                <div className="dropdown-menu dropdown-grand" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item dropdown-item-emisije" to="/emisije">Emisije</Link>
                                    <Link className="dropdown-item dropdown-item-programska-sema" to="/programska-sema">Programska šema</Link>
                                </div>
                            </li>
            </ul>
            <div className="navbar-user">
              <Link to="/login">
              <img src={user} alt="user icon" className="user-icon"></img>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
