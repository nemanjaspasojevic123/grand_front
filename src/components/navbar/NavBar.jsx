import React from 'react';
import './NavBar.css'
import logo from '../../assets/logos/Grand_TV_logo.png'
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container nav-container">
                    <Link className="navbar-brand" to="/" >
                        <img src={logo} alt="no img" className="navbar-logo"/>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/showbiz">SHOWBIZ</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/zvezde-granda">ZVEZDE GRANDA</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/nikad-nije-kasno">NIKAD NIJE KASNO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/prakticna-zena">PRAKTIČNA ZENA</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/horoskop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                    HOROSKOP
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/grandoskop">GRANDOSKOP</Link>
                                    <Link className="dropdown-item" to="/horoskop">HOROSKOP</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/recepti">RECEPTI</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/grand" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                GRAND
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/emisije">EMISIJE</Link>
                                    <Link className="dropdown-item" to="/programska-sema">PROGRAMSKA ŠEMA</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" ><i className="fa fa-user-circle fa-lg"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}