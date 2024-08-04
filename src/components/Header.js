import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        setIsActive(false); // Close the menu after clicking
    };

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const handleScrollEvent = () => {
        const sections = document.querySelectorAll('section');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 60) {
                currentSection = section.getAttribute('id');
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollEvent);
        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    return (
        <header className="header">
            <div className="logo" onClick={() => handleScroll('home')}>Ledger Shift</div>
            <nav className={`nav ${isActive ? 'active' : ''}`}>
                <ul className="nav-links">
                    <li>
                        <a 
                            href="#home" 
                            onClick={() => handleScroll('home')} 
                            className={activeSection === 'home' ? 'active' : ''}
                        >Home</a>
                    </li>
                    <li>
                        <a 
                            href="#about" 
                            onClick={() => handleScroll('about')} 
                            className={activeSection === 'about' ? 'active' : ''}
                        >About</a>
                    </li>
                    <li>
                        <a 
                            href="#services" 
                            onClick={() => handleScroll('services')} 
                            className={activeSection === 'services' ? 'active' : ''}
                        >Services</a>
                    </li>
                    <li>
                        <a 
                            href="#blog" 
                            onClick={() => handleScroll('blog')} 
                            className={activeSection === 'blog' ? 'active' : ''}
                        >Blogs</a>
                    </li>
                    <li>
                        <a 
                            href="#contact" 
                            onClick={() => handleScroll('contact')} 
                            className={activeSection === 'contact' ? 'active' : ''}
                        >Contact</a>
                    </li>
                </ul>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className={`fas ${isActive ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
