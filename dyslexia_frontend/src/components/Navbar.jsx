import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';

const Navbar = ({ data }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div>
        <nav className={`fixed w-full z-20 top-0 start-0 transition duration-300 ${scrolled ? 'bg-[#006273] bg-opacity-75 rounded-b-xl' : 'bg-transparent'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="My Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#5FD5E4]">Blessing Ingyape</span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" className="text-[#25d366] bg-[#075e54] hover:bg-[#128c7e] focus:ring-4 focus:outline-none focus:ring-[#25d366]/50 font-medium rounded-lg text-sm px-4 py-2 text-center">WhatsApp💬</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#5FD5E4] rounded-lg md:hidden hover:bg-[#5FD5E4]/20 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 text-outline md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-10 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-inherit">
                        <li>
                            <Link to="/home">
                                <ScrollLink 
                                to='home'
                                spy={true}
                                smooth={true}
                                duration={400}
                                >
                                 <a href="#" className="block shadow-black drop-shadow-md py-2 px-3 text-white bg-[#5FD5E4] rounded md:bg-transparent md:text-[#5FD5E4] md:p-0" aria-current="page">Home</a>
                                </ScrollLink>
                                </Link>
                            
                        </li>
                        <li>
                            <Link to="/about">
                                <ScrollLink
                                to='about'
                                spy={true}
                                smooth={true}
                                duration={400}> 
                                 <a href="#" className="block py-2 px-3 text-white rounded hover:bg-[#5FD5E4] md:hover:bg-transparent md:hover:text-[#5FD5E4] md:p-0">About</a>
                                
                                </ScrollLink>    
                            </Link>
                            
                        </li>
                        <li>
                            <Link to="/services">
                                <ScrollLink
                                  to='services'
                                  spy={true}
                                  smooth={true}
                                  duration={400} 
                                >
                                    <a href="#" className="block py-2 px-3 text-white rounded hover:bg-[#5FD5E4] md:hover:bg-transparent md:hover:text-[#5FD5E4] md:p-0">Services</a>
                                </ScrollLink>
                            </Link>
                            
                        </li>
                        <li>
                        <Link to="/services">
                                <ScrollLink
                                  to='contact'
                                  spy={true}
                                  smooth={true}
                                  duration={400} 
                                >
                                    <a href="#" className="block py-2 px-3 text-white rounded hover:bg-[#5FD5E4] md:hover:bg-transparent md:hover:text-[#5FD5E4] md:p-0">Contact</a>
                                </ScrollLink>
                            </Link>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;