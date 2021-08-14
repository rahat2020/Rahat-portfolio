import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import rahat from '../../img/rahat.jpeg';
import './HeaderMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
const HeaderMain = () => {
    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000 });
    })
    return (
        <div className="container p-4 mb-4 mt-4">
            <div className="row">
                <div data-aos="fade-left" className="col-md-6 left-col-1">
                    <div className="header-container mt-5 pt-5 font_primary">
                        <h1 className="title">Kazi Md. Boktiar Uddin Rahat</h1>
                        <div className="d-flex  ">
                            <h5 className="title-rank text-sm-start">Front End Developer</h5>
                            <h5 className="title-rank">Web Designer</h5>
                        </div>
                        <p className="title-description font_description">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    </div>
                    <div className="">
                        <ul class="social-icon d-flex justify-content-start">
                            <li><Link to="https://github.com/rahat2020" target="_blank" class="contact">
                                <FontAwesomeIcon icon={faGithub} /></Link>
                            </li>
                            <li><Link to="https://www.facebook.com/KaziRahat1020/" target="_blank" class="contact">
                                <FontAwesomeIcon icon={faFacebook} /></Link>
                            </li>
                            <li><Link to="https://www.youtube.com/channel/UCHYS--t1fccbXYkgt_a8_OA" target="_blank" class="contact">
                                <FontAwesomeIcon icon={faLinkedin} /></Link>
                            </li>
                            <li><Link to="" target="_blank" class="contact">
                                <FontAwesomeIcon icon={faTwitter} /></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="btn-header">
                        <Link to="/https://drive.google.com/file/d/1x-aj9axn3_TNLV2Ytc2lW06U_5dUNBMH/view?usp=sharing"> <button className="btn btn1">Download resume</button></Link>
                        <Link to="/projects"><button className="btn btn1 btn-one">visit my works</button></Link>

                    </div>
                </div>
                <div className="col-md-6 mt-5 pt-5 d-flex justify-content-center">
                    <div data-aos="fade-right" className="header-img">
                        <span></span>
                        <div className="col-right-img">
                            <img className="head-img" src={rahat} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;