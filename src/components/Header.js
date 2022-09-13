import React from "react";
import { NavLink } from "react-router-dom";
import { aboutPage, projectsPage, contactPage } from "./Emojis";
import logo from "../images/logo.gif";
import ThemeMode from "./ThemeMode";
const Header = () => {
    const [colorTheme, setTheme] = ThemeMode()
    return (
        <header className="float-left mb-8 pt-2 text-center w-full bg-white dark:bg-[#0d1117]">

            <div className="mt-4 relative inline-block">
                <img className="inline-block align-middle m-0 rounded-full max-w-md h-40 border-2 border-[#d0d7de] dark:border-[#30363d] shadow-md object-cover" src={logo} alt="logo" />
                
                <span className="absolute bottom-5 right-[-2px] inline-block w-7 h-7 bg-white dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d] rounded-full">
                <button 
                className= "rounded-full w-6 h-6 border border-transparent" 
                onClick={()=> setTheme(colorTheme)}>{
                    colorTheme === "light" ?
                    <span title="Light Mode">🌝</span>
                    :
                    <span title="Dark Mode">🌚</span> 
                    }
                </button>
                </span>

            </div>  
            
            <h1 className="mt-4 text-3xl dark:text-[#c9d1d9] text-[#24292f] font-semibold">Amal Aljabri</h1>
            <h3 className="mb-4 mt-1 text-lg text-[#57606a] dark:text-[#8b949e]">Hope .. I am still learning 📖🪄</h3>

            <nav className="text-center leading-7 border-y border-[#1b1f2426] dark:border-[#30363d] w-full">
                <ul className="flex flex-nowrap mr-0 justify-center m-2 font-bold text-md">
                    <li className="w-auto flex-shrink-0">
                        <NavLink
                            exact
                            to="/"
                            className="text-[#57606a] dark:text-[#8B949E] hover:text-[#24292f] dark:hover:text-[#c9d1d9] hover:border-b-2 hover:border-[#24292f] dark:hover:border-[#F0F6FC] ease-in-out pb-3 sm:pb-3 px-3 text-center"
                            activeClassName="active"
                            onClick={() => window.scrollTo({ top: 0, })}>
                            {aboutPage} About
                        </NavLink>
                    </li>
                    <li className="w-auto flex-shrink-0">
                        <NavLink
                            exact
                            to="/projects"
                            className="text-[#57606a] dark:text-[#8B949E] hover:text-[#24292f] dark:hover:text-[#c9d1d9] hover:border-b-2 hover:border-[#24292f] dark:hover:border-[#F0F6FC] ease-in-out pb-3 sm:pb-3 px-3 text-center"
                            activeClassName="active"
                            onClick={() => window.scrollTo({ top: 0, })}>
                            {projectsPage} Projects 
                        </NavLink>
                    </li>
                    <li className="w-auto flex-shrink-0">
                        <NavLink
                            exact
                            to="/contact"
                            className="text-[#57606a] dark:text-[#8B949E] hover:text-[#24292f] dark:hover:text-[#c9d1d9] hover:border-b-2 hover:border-[#24292f] dark:hover:border-[#F0F6FC] ease-in-out pb-3 sm:pb-3 px-3 text-center"
                            activeClassName="active"
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