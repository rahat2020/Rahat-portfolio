import React, { useEffect } from 'react';
import './ContactMe.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane,faMapMarkedAlt, faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faLinkedin, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
const ContactMe = () => {
    useEffect(() => {
        AOS.init({ offset: 120, duration: 2000});
    })
    return (
        <section>
            <Navbar/>
            <div id="contact">
                <h1 data-aos="fade-right" class="section-header">Contact</h1>

                <div class="contact-wrapper">
                    {/* message form */}
                    <form data-aos="fade-left" id="contact-form" class="form-horizontal">
                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="text" class="form-control mb-1"  placeholder="NAME" value="" required />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-12">
                                <input type="email" class="form-control mb-1"  placeholder="EMAIL" value="" required />
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-sm-12">
                                <textarea class="form-control mb-1" rows="8" placeholder="MESSAGE" required></textarea>
                            </div>

                        </div>

                        <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                            <div class="alt-send-button col-sm-12">
                                <FontAwesomeIcon icon={faPaperPlane} /> <span class="send-text">SEND</span>
                            </div>
                        </button>
                    </form>

                    {/* social icon and adderess */}
                    <div data-aos="fade-right" class="direct-contact-container">

                        <ul class="contact-list">
                            <li class="list-item"> <FontAwesomeIcon className="icon" icon={faMapMarkedAlt} /> <span class="contact-text place">Dhaka, Bangladesh</span></li>

                            <li class="list-item"><FontAwesomeIcon className="icon" icon={faPhone} /> <span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">+88018941-03578</a></span></li>
                            <li class="list-item"><FontAwesomeIcon className="icon" icon={faEnvelope} /> <span class="contact-text gmail"><a href="mailto:#" title="Send me an email">kazimdboktiar2020@gmail.com</a></span></li>

                        </ul>

                        <hr />
                        <ul class="social-media-list">
                            <li><Link to="https://github.com/rahat2020" target="_blank" class="contact-icon">
                                <FontAwesomeIcon icon={faGithub} /></Link>
                            </li>
                            <li><Link to="https://www.facebook.com/KaziRahat1020/" target="_blank" class="contact-icon">
                                <FontAwesomeIcon icon={faFacebook} /></Link>
                            </li>
                            <li><Link to="https://www.youtube.com/channel/UCHYS--t1fccbXYkgt_a8_OA" target="_blank" class="contact-icon">
                                <FontAwesomeIcon icon={faLinkedin} /></Link>
                            </li>
                            <li><Link to="" target="_blank" class="contact-icon">
                                <FontAwesomeIcon icon={faTwitter} /></Link>
                            </li>
                        </ul>
                        <hr className="mb-3" />

                        <div class="copyright">&copy; Kazi Rahat</div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ContactMe;