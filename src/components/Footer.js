import React, { useEffect, useState, Fragment } from "react";
import { visit, top } from './Emojis'


const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => { 
            window.removeEventListener("scroll", toggleVisibility) 
  
        };
    }, []);




    return (
        <Fragment>
            <div className='footer'>
                <p className="center">Thanks for visiting! {visit}
                </p>
            </div>
            {
                isVisible &&
                <button className="btn-scroll" onClick={scrollToTop}>{top}</button>

            }
        </Fragment>
    );

}

export default Footer;