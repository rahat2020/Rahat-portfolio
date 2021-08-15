import React, { useState } from 'react';
import './Projects.css';
import Navbar from '../Navbar/Navbar';
import Data from '../../Data/Data';
import { Link } from 'react-router-dom';
const Projects = () => {
    const [items, setItems] = useState(Data);

    const filterItem = (categItem) => {
        const updatedItems = Data.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }
    return (
        <section className="project container">
            <Navbar />
            <h1 className="mt-5 text-center main-heading">Here is my project</h1>
            <hr />

            <div className="menu-tabs">
                <div className="d-flex">
                    <button className="btn btn-warning" onClick={() => filterItem('fashion')}>Fashion</button>
                    <button className="btn btn-warning" onClick={() => filterItem('food')}>Food</button>
                    <button className="btn btn-warning" onClick={() => filterItem('services')}>Services</button>
                    <button className="btn btn-warning" onClick={() => filterItem('pictures')}>Pictures</button>
                    <button className="btn btn-warning" onClick={() => filterItem('news')}>News</button>
                    <button className="btn btn-warning" onClick={() => setItems(Data)}>All</button>
                </div>
            </div>

            {/* my main items section  */}
            <div className="row mt-5">

                {
                    items.map((item) => (
                            <div className="col-md-4">
                                <div class="card">
                                    <img src={item.image} className="card-img-top image" alt="..." />
                                    <div className="card-body">
                                        <p>{item.description}</p>
                                        <h5 className="text-center">{item.name}</h5>
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
                                        <Link to="/">
                                            <button className="text btn btn-primary">View site</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Projects;