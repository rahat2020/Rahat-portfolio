import React from 'react';
import './AboutMe.css';
import Navbar from '../Navbar/Navbar';
import rahat from '../../img/rahat.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPhone, faEnvelope, faHouseUser } from '@fortawesome/free-solid-svg-icons'
const AboutMe = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <section className="container">
                <div className="row row-container mt-5">
                    <div className="col-md-7 about-img">
                        <img className="" src={rahat} alt=""></img>

                    </div>
                    <div className="col-md-5 about">
                        <div className="about-description">
                            <h6 className="about-hey">HELLO THERE, I AM</h6>
                            <h1 className="about-name">Kazi <br /> Rahat</h1>
                            <h4 className="about-title">Front end developer | Web Designer</h4>
                            <p className="about-para mt-2 pt-3">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <ul className="about-info">
                            <li> <FontAwesomeIcon className="about-icon mt-4" icon={faCalendar} /> <span className="about-text font_description">10th november, 2001</span></li>
                            <li> <FontAwesomeIcon className="about-icon mt-4" icon={faPhone} /> <span className="about-text font_description">+8801894-103578</span></li>
                            <li> <FontAwesomeIcon className="about-icon mt-4" icon={faEnvelope} /> <span className="about-text font_description">kazimdboktiar2020@gmail.com</span></li>
                            <li> <FontAwesomeIcon className="about-icon mt-4" icon={faHouseUser} /> <span className="about-text font_description">Chattogram, Bnagladesh</span></li>
                        </ul>
                        <div className="button">
                            <button className="btn-resume-one p-1 px-3">Hire me</button>
                            <button className="btn-resume p-1 px-3">My Works</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* about skill section */}
            <section className="container">
                <div className="row mt-5">
                    <div className="col-md-7 col-left">
                        <div class="skill-bars">
                            <div class="bar">
                                <div class="info">
                                    <span>React JS</span>
                                </div>
                                <div class="progress-line html">
                                    <span></span>
                                </div>
                            </div>
                            <div class="bar">
                                <div class="info">
                                    <span>HTML5 and CSS</span>
                                </div>
                                <div class="progress-line html">
                                    <span></span>
                                </div>
                            </div>
                            <div class="bar">
                                <div class="info">
                                    <span>Bootstrap and React Bootstrap</span>
                                </div>
                                <div class="progress-line html">
                                    <span></span>
                                </div>
                            </div>
                            <div class="bar">
                                <div class="info">
                                    <span>MongoDB</span>
                                </div>
                                <div class="progress-line html">
                                    <span></span>
                                </div>
                            </div>
                            <div class="bar">
                                <div class="info">
                                    <span>Node JS</span>
                                </div>
                                <div class="progress-line css">
                                    <span></span>
                                </div>
                            </div>
                            <div class="bar">
                                <div class="info">
                                    <span>JavaScript</span>
                                </div>
                                <div class="progress-line jquery">
                                    <span></span>
                                </div>
                            </div>
                            <div class="bar">
                                <div class="info">
                                    <span>React Native</span>
                                </div>
                                <div class="progress-line python">
                                    <span></span>
                                </div>
                            </div>
                            <div class="bar">
                                <div class="info">
                                    <span>Redux</span>
                                </div>
                                <div class="progress-line mysql">
                                    <span></span>
                                </div>
                            </div>
                            <div class="bar">
                                <div class="info">
                                    <span>Material UI</span>
                                </div>
                                <div class="progress-line mysql">
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-right">

                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;