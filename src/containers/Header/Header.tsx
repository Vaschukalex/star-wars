import React from "react";
import logoImg from '../../img/logo_header.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (

        <nav className="navbar sticky-top navbar-expand-lg navbar_my">
            <Link className="navbar-brand logo_link" to="/"><img className="img-fluid logo_header" alt="logo-star-wars" src={logoImg}></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar_right_block" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav_link" to="/characters/list/1">Characters</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav_link" to="/favorites">Favorites</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav_link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
export default Header;