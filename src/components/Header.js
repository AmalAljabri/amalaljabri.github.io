import React from 'react';
import { NavLink } from 'react-router-dom';
import { aboutPage, projectsPage, contactPage } from './Emojis';
import logo from '../images/logo.gif';
const Header = () => {
    return (
        <header className='float-left mb-8 pt-2 text-center w-full bg-[#161B22]'>
            <h1 className='mt-4'>
                <img className='inline-block align-middle m-0 rounded-full max-w-md h-40 border border-[#30363d] shadow-md bg-center object-center' src={logo} alt="logo" />
            </h1>
            <h1 className='mt-4 text-3xl'>Amal Aljabri</h1>
            <h3 className='mb-4 mt-1 text-lg text-[#8B949E]'>Hope .. I am still learning 📖🪄</h3>
            <nav className='text-center leading-7 bg-[#161B22] border-y border-[#30363d] w-full '>
                <ul className='flex flex-nowrap mr-0 justify-center m-2 font-bold text-md'>
                    <li className='w-auto flex-shrink-0'>
                        <NavLink
                            exact
                            to="/"
                            className='text-[#8B949E] hover:text-[#F0F6FC] hover:border-b-2 hover:border-[#8B949E] ease-in-out pb-3 sm:pb-3 px-3 text-center'
                            activeStyle={{
                                color: '#F0F6FC',
                                borderBottom: '2px solid #58A6FF'
                            }}
                            onClick={() => window.scrollTo({ top: 0, })}>
                            {aboutPage} About
                        </NavLink>
                    </li>
                    <li className='w-auto flex-shrink-0'>
                        <NavLink
                            exact
                            to="/projects"
                            className='text-[#8B949E] hover:text-[#F0F6FC] hover:border-b-2 hover:border-[#8B949E] ease-in-out pb-3 sm:pb-3 px-3 text-center'
                            activeStyle={{
                                color: '#F0F6FC',
                                borderBottom: '2px solid #58A6FF'
                            }}
                            onClick={() => window.scrollTo({ top: 0, })}>
                            {projectsPage} Projects 
                        </NavLink>
                    </li>
                    <li className='w-auto flex-shrink-0'>
                        <NavLink
                            exact
                            to="/contact"
                            className='text-[#8B949E] hover:text-[#F0F6FC] hover:border-b-2 hover:border-[#8B949E] ease-in-out pb-3 sm:pb-3 px-3 text-center'
                            activeStyle={{
                                color: '#F0F6FC',
                                borderBottom: '2px solid #58A6FF'
                            }}
                            onClick={() => window.scrollTo({ top: 0, })}>
                            {contactPage} Contact 
                        </NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Header;