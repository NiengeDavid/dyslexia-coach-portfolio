'use client';
import React, { useState, useEffect } from 'react';
import {Link as ScrollLink} from 'react-scroll';
import { Navbar } from 'flowbite-react';

const NavBar = ({ data, menu }) => {
    function mapDataToArray(data) {
        try {
          return Object.keys(data).map((key) => data[key]);
        } catch (error) {
          console.error("An error occurred while mapping data:", error);
          return [];
        }
    }
    
    const bioFeed = mapDataToArray(data);
    const menuFeed = mapDataToArray(menu);

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
        <Navbar className={`fixed w-full z-20 py-5 top-0 start-0 transition duration-300 ${scrolled ? 'bg-[#006273] bg-opacity-75 rounded-b-xl' : 'bg-transparent'}` }>
            <Navbar.Brand href="/">
                {bioFeed.map((item, index) =>  (
                    <div className="flex items-center space-x-3 rtl:space-x-reverse" key={index}>
                        <img src={item.logo.asset.url} className="h-8" alt={item.yourname} />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#5FD5E4]">{item.yourname}</span>
                    </div>
                ))}
            </Navbar.Brand>
            <div className="flex items-center justify-center md:order-2">
                {bioFeed.map((item, index) =>  (
                    <a key={index} href={item.button} className="text-[#25d366] cursor-pointer mr-1 bg-[#075e54] hover:bg-[#128c7e] focus:ring-4 focus:outline-none focus:ring-[#25d366]/50 font-medium rounded-lg text-[9px] px-2 py-2 text-center md:py-2 md:px-4 md:text-sm md:mr-0">WhatsApp💬</a>
                ))}
                <Navbar.Toggle className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#5FD5E4] rounded-lg md:hidden hover:bg-[#5FD5E4]/20 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-sticky" aria-expanded="false"/>
            </div>
            <Navbar.Collapse className={`mt-2 rounded-lg  ${scrolled ? 'bg-transparent' : 'bg-[#006273] bg-opacity-75 md:bg-transparent'}`}>
                {menuFeed.map((item, index) => (
                        <ScrollLink  
                            key={index}
                            to={item.item}
                            spy={true}
                            smooth={true}
                            duration={400}
                            className="block shadow-black drop-shadow-md py-2 px-3 text-white bg-[#5FD5E4]/40 hover:bg-[#5FD5E4]/60 my-1 mx-3 rounded cursor-pointer md:hover:bg-transparent md:bg-transparent md:hover:text-[#5FD5E4] md:m-0 md:p-0" aria-current="page"
                        >
                            {item.item} 
                        </ScrollLink> 
                ))}
            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}

export default NavBar;