import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import rahat from '../../img/rahat.jpeg';
import './HeaderMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const HeaderMain = () => {
    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000});
    })
    return (
        <div className="container p-4 mb-4 mt-4">
            <div className="row">
                <div data-aos="fade-left" className="col-md-6 left-col-1">
                    <div   className="header-container mt-5 pt-5 font_primary">
                        <h1 className="title">Kazi Md. Boktiar Uddin Rahat</h1>
                        <div className="d-flex text-left ">
                            <h5 className="title-rank">Front End Developer</h5>
                            <h5 className="title-rank">Web Designer</h5>
                        </div>
                        <p className="title-description font_description">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    </div>
                    <div className="btn-header">
                        <button className="btn btn1">Download resume</button>
                        <button className="btn btn1 btn-one">visit my works</button>
                    </div>
                </div>
                <div className="col-md-6 mt-5 pt-5 d-flex justify-content-center">
                    <div data-aos="fade-right"  className="header-img">
                        <span></span>
                        <div className="col-right-img">
                            <img className="head-img" src={rahat} alt="" />
                        </div>
                        <div className="photo-details">
                            <h5>Kazi Rahat</h5>
                            <FontAwesomeIcon className="icon mt-4" icon={faFacebookF} />
                            <FontAwesomeIcon className="icon mt-4" icon={faGithub} />
                            <FontAwesomeIcon className="icon mt-4" icon={faLinkedin} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;