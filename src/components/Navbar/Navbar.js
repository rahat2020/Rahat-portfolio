import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {

    return (

        <div class="" id="home">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul class="navbar-nav nav-style text-center">
                            <li class="nav-item">
                                <Link to="/" class="nav-link nav-item" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/projects" class="nav-link nav-item">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link nav-item">Contacts</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/portfolio" class="nav-link nav-item">Portfolio</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" class="nav-link nav-item">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;