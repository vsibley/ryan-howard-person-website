import React, { useState, useEffect } from 'react';
import {  AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/RyHowLogo2.png'
import MobileLogo from '../assets/RyHowLogo3.png'



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);


    useEffect(() => {
        const scrollShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', scrollShadow);
    }, []);


    const changeNav = () => {
        setNav(!nav)
    }

    return (
        <div className={shadow ? 'sticky top-0 container mx-auto bg-white shadow-md shadow-white z-50' : 'container mx-auto'}>
            <div className='flex justify-between items-center  h-full px-3'>
                <a href='/'>
                    <img src={MobileLogo} alt='vs logo' width='25%' height='25%' className='pt-3' aria-label="routes to home page" />
                </a>
                <div>
                    <ul className='hidden md:flex'>
                        <a href='/'>
                            <li className='ml-10 text-sm hover:border-b border-gray-700'>Home</li>
                        </a>
                        <a href='/#about'>
                            <li className='ml-10 text-sm hover:border-b border-gray-700'>About</li>
                        </a>
                        <a href='/#skills'>
                            <li className='ml-10 text-sm hover:border-b border-gray-700'>Services</li>
                        </a>
                        <a href='/#projects'>
                            <li className='ml-10 text-sm hover:border-b border-gray-700'>FAQ</li>
                        </a>
                        
                    </ul>


                    <div className='md:hidden' onClick={changeNav}>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            {/* Side-Mobile Menu  */}

            <div className={nav ? 'md:hidden fixed left-0 top-0 right-0 w-full h-screen bg-white/90  z-50' : ''}>
                <div
                    className={
                        nav
                            ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray/50 p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex w-full justify-end pb-2'>
                            <div className='rounded-full shadow-lg p-3 shadow-gray-500 cursor-pointer' onClick={changeNav}>
                                <AiOutlineClose size={25} />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-3'>

                        </div>
                    </div>
                    <div className='py-2 flex flex-col'>
                        <ul className='uppercase'>
                            <a href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                            </a>
                            <a href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                            </a>
                            <a href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>Services</li>
                            </a>
                            <a href='/#projects'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>FAQ's</li>
                            </a>
                         
                       
                        </ul>
                        {/* Social Media Connect */}
                        <div className='py-20 '>
                            <p className='uppercase tracking-widest'>Let's connect!</p>
                            <div className='flex items-center justify-around my-4 w-full sm:w-[80%]'>
                                <div className='rounded-xl shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <a href="https://www.linkedin.com/in/vanessa-sibley/" target="_blank" aria-label='routes to linkedin'><FaLinkedin /></a>

                                </div>
                               
                                <div className='rounded-xl shadow-lg shadow-gray-400  p-3 cursor-pointer hover:scale-105 ease-in duration-500'>
                                    <a href="https://www.instagram.com/gitinit.ness/?igshid=YmMyMTA2M2Y%3D" target="_blank" aria-label='routes to instagram'>
                                        <FaInstagram />

                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar
