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
            <div className='m-4 p-4'>
                <p className="text-center"><span>Thanks for visiting!</span> {visit}
                </p>
            </div>
            {
                isVisible &&
                <button className="animate-bounce fixed bottom-6 right-6 px-3 py-2 rounded-md bg-[#21262d] text-[#8b949e] border border-[#30363d] hover:bg-[#121D2F] hover:border-[#224D87] hover:text-[#58a6ff]" onClick={scrollToTop}>{top}</button>

            }
        </Fragment>
    );

}

export default Footer;