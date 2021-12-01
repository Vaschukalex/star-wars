import React from "react";
import { Link } from "react-router-dom";
import fistSlide from '../../img/star-wars-1.jpeg';
import secondSlide from '../../img/star-wars-2.jpeg';
import thirdSlide from '../../img/star-wars-3.jpeg';
const Home = () => {


    return (
        <div className="home_back">
            <div className="container home_wrapper">
                <div className="row">
                    <div className="col-sm ">
                        <div className="card card_home">
                            <img className="card-img-top" src={fistSlide} alt="Characters List" />
                            <div className="card_header_block"><h5 className="card-tite_m">Characters List</h5></div>
                            <div className="card-body">

                                <p className="card-text">You can view a whole list of heroes from the Star Wars universe</p>
                                <Link to="/characters/list/1" className="btn btn-warning">Characters List</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm ">
                        <div className="card card_home">
                            <img className="card-img-top" src={secondSlide} alt="Favorites List" />
                            <div className="card_header_block"><h5 className="card-tite_m">Favorites List</h5></div>
                            <div className="card-body">
                                <p className="card-text">You can view a whole list of your chosen heroes from Star Wars</p>
                                <Link to="/favorites" className="btn btn-warning">Favorites List</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm ">
                        <div className="card card_home">
                            <img className="card-img-top" src={thirdSlide} alt="Contact Form" />
                            <div className="card_header_block"><h5 className="card-tite_m">Contact Form</h5></div>
                            <div className="card-body">
                                <p className="card-text">You can leave us your message and we will definitely get back to you :)</p>
                                <Link to="/contact" className="btn btn-warning">Contact Form</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="stars"></div>
            <div id="stars2"></div>
        </div>

    )
}
export default Home;