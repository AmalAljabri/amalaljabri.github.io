import React from 'react';
import { NavLink } from 'react-router-dom';
import { aboutPage, projectsPage, contactPage } from './Emojis';
import logo from '../images/logo.gif';
const Header = () => {
     return (
        <header>
            <h1><img src={logo} className="logo-img" alt="logo" /></h1>
            <h1>Amal Aljabri</h1>
            <h3>I am a Developer and Researcher</h3>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/">
                            {aboutPage} About&nbsp;
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/projects">
                            {projectsPage} Projects&nbsp;
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact">
                            {contactPage} Contact&nbsp;
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Header;