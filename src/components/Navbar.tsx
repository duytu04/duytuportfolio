import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import Magnetic from './Magnetic';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Contact', path: '/contact' },
    ];

    const handleNavClick = (link: any) => {
        if (link.isAnchor) {
            if (location.pathname !== '/') {
                navigate('/');
                // Wait for navigation to complete then scroll
                setTimeout(() => {
                    const element = document.getElementById('work');
                    element?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const element = document.getElementById('work');
                element?.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container nav-container">
                <Magnetic>
                    <NavLink to="/" className="nav-logo" onClick={() => window.scrollTo(0, 0)}>
                        <Code2 className="accent-text" />
                        <span>DUY <span className="gradient-text">TU</span></span>
                    </NavLink>
                </Magnetic>

                {/* Desktop Links */}
                <div className="nav-links">
                    {navLinks.map((link: any) => (
                        link.isAnchor ? (
                            <motion.button
                                key={link.name}
                                onClick={() => handleNavClick(link)}
                                className="nav-link anchor-link"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.name}
                            </motion.button>
                        ) : (
                            <Magnetic>
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                >
                                    <motion.span whileHover={{ y: -2 }} style={{ display: 'inline-block' }}>
                                        {link.name}
                                    </motion.span>
                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="nav-underline"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </NavLink>
                            </Magnetic>
                        )
                    ))}
                </div>

                <button
                    className="nav-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="mobile-menu glass-card"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <ul>
                                {navLinks.map((link: any) => (
                                    <li key={link.name}>
                                        {link.isAnchor ? (
                                            <button onClick={() => handleNavClick(link)} className="nav-link anchor-link">
                                                {link.name}
                                            </button>
                                        ) : (
                                            <NavLink
                                                to={link.path}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                            >
                                                {link.name}
                                            </NavLink>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
