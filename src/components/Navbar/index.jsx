import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                <a className="navbar-brand" href="#">Lorem Text</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/skills">Technical Skills </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">CRUD Operations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Animations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Graphs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contacts info</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Navbar;