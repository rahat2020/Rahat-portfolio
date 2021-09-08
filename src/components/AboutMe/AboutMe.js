import React from 'react';
import './AboutMe.css';
import Navbar from '../Navbar/Navbar';
import rahat from '../../img/rahat.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPhone, faEnvelope, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import Tilt from 'react-vanilla-tilt';
import { Link } from 'react-router-dom';
const AboutMe = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <section className="container mb-2">
                <div className="row row-container mt-5">

                    <div className="col-md-7 about-img">
                        <Tilt>
                            <img className="w-100 h-50" src={rahat} alt=""></img>
                        </Tilt>
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
                            <a href="https://drive.google.com/file/d/1x-aj9axn3_TNLV2Ytc2lW06U_5dUNBMH/view?usp=sharing" target="_blank">
                                <button className="btn-resume-one p-1 px-3">Hire me</button>
                            </a>

                            <Link to="/projects"><button className="btn-resume p-1 px-3">My Works</button></Link>

                        </div>
                    </div>
                </div>
            </section>
            {/* about skill section */}
            <section className="container">

                <h2 className="text-center skill-title main-head">❏ Here is my skill ❏</h2>
                <here></here>
                <div className="row mt-5 mb-5">
                    <div className="col-md-6 col-left">
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

                        </div>
                    </div>
                    <div className="col-md-6 col-right">
                        <div className="skill-bars">
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
                            <div class="bar">
                                <div class="info">
                                    <span>JavaScript</span>
                                </div>
                                <div class="progress-line javascript">
                                    <span></span>
                                </div>
                            </div>
                            <div class="bar">
                                <div class="info">
                                    <span>Express JS</span>
                                </div>
                                <div class="progress-line express">
                                    <span></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;