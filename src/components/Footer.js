import React, { useEffect, useState} from "react";
import { visit, top } from "./Emojis";


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
        <footer className="bg-[#f6f8fa] dark:bg-[#010409] text-center">

            <div className="m-4 p-4 inline-block">
                <p className="text-[#57606a] dark:text-[#8b949e]">
                    <span>Thanks for visiting!</span>
                    {visit}
                </p>
            </div>

            {
                isVisible &&
                <button
                    className="fixed bottom-6 right-6 px-3 py-2 rounded-md bg-white dark:bg-[#0d1117] border border-[#d0d7de] dark:border-[#30363d] hover:bg-[#ddf4ff] dark:hover:bg-[#388bfd26] hover:text-[#0969da] hover:border-[#54aeff66] dark:hover:border-[#388bfd66]"
                    onClick={scrollToTop}>{top}
                </button>
            }
            
        </footer>
    );

}

export default Footer;