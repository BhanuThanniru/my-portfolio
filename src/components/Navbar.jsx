import { useState, useEffect } from "react"
import {FaLinkedin} from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { FaArrowUp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const handleToggle = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return(
        <>
        <nav className="py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Hamburger for mobile */}
            <div className="flex w-full justify-end md:hidden px-4">
                <button onClick={handleToggle} aria-label="Toggle Menu">
                    {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </div>

            {/* Navigation Links */}
            {/* <div className={`flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 text-base sm:text-lg md:text-2xl px-4 md:px-0 py-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}> */}
            <div className={`flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4 text-base sm:text-lg md:text-2xl w-full md:w-auto py-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>    
                <a href="#technologies" onClick={closeMenu} className="hover:text-gray-400">Technologies</a>
                <a href="#experience" onClick={closeMenu} className="hover:text-gray-400">Experience</a>
                <a href="#projects" onClick={closeMenu} className="hover:text-gray-400">Projects</a>
                <a href="#contact" onClick={closeMenu} className="hover:text-gray-400">Contact</a>
            </div>

            {/* Social Icons */}
            <div className={`items-center justify-center gap-4 text-xl sm:text-2xl m-4 md:m-8 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                <a href='https://www.linkedin.com/in/BhanuSaisreeThanniru' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                    <FaLinkedin />
                </a>
                <a href='https://www.github.com/BhanuThanniru' target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                    <FaGithub />
                </a>
            </div>
        </div>
        </nav>
            {showScrollTop && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition"
                aria-label="Scroll to top"
            >
            <FaArrowUp />
            </button>
        )}
        </>
        );
    };
export default Navbar