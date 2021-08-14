import React from 'react';
import './Projects.css';
import Navbar from '../Navbar/Navbar';
// import euro from '../../img/euro.png';
import plumber from '../../img/plumber.png';
// import barber from '../../img/barber.png';
// import hungry from '../../img/hungry.png';
const Projects = () => {
    return (
        <section className="project container">
            <Navbar />
            <div className="row card-style mt-4">
                <div className="col-md-4">
                    <div class="card">
                        <img src={plumber} className="card-img-top image" alt="..." />
                        <div className="card-body">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <h5 className="text-center">Major Technologies</h5>
                            <div className="technologies d-flex">
                                <button class="btn-sizes">Node JS</button>
                                <button class="btn-sizes">JavaScript</button>
                                <button class="btn-sizes active">React JS</button>
                                <button class="btn-sizes">Express JS</button>
                                <button class="btn-sizes">Express JS</button>
                            </div>
                        </div>
                        <div class="overlay">
                            <button className="text btn btn-primary">View site</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <img src={plumber} className="card-img-top image" alt="..." />
                        <div className="card-body">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <h5 className="text-center">Major Technologies</h5>
                            <div className="technologies d-flex">
                                <button class="btn-sizes">Node JS</button>
                                <button class="btn-sizes">JavaScript</button>
                                <button class="btn-sizes active">React JS</button>
                                <button class="btn-sizes">Express JS</button>
                                <button class="btn-sizes">Express JS</button>
                            </div>
                        </div>
                        <div class="overlay">
                            <button className="text btn btn-primary">View site</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <img src={plumber} className="card-img-top image" alt="..." />
                        <div className="card-body">
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <h5 className="text-center">Major Technologies</h5>
                            <div className="technologies d-flex">
                                <button class="btn-sizes">Node JS</button>
                                <button class="btn-sizes">JavaScript</button>
                                <button class="btn-sizes active">React JS</button>
                                <button class="btn-sizes">Express JS</button>
                                <button class="btn-sizes">Express JS</button>
                            </div>
                        </div>
                        <div class="overlay">
                            <button className="text btn btn-primary">View site</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;