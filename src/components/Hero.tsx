import React from 'react';
import { Terminal, Github, Facebook, Instagram, Mail, Code2, Globe } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import avatar from '../assets/avatar.jpg';
import Magnetic from './Magnetic';

const Hero: React.FC = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="hero-section">
            <div className="bg-blobs">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>
            <div className="container hero-container">
                <motion.div
                    className="hero-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            className="tech-badges"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <motion.div
                                className="hero-badge"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            >
                                <Code2 size={14} className="accent-text" />
                                <span>Full-Stack Engineer</span>
                            </motion.div>
                            <motion.div
                                className="hero-badge"
                                animate={{ y: [0, -5, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                            >
                                <Globe size={14} className="accent-secondary-text" />
                                <span>Digital Architect</span>
                            </motion.div>
                        </motion.div>

                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.02,
                                        delayChildren: 0.4
                                    }
                                }
                            }}
                        >
                            {"Welcome to".split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            <br />
                            {"my ".split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            <span className="gradient-text">
                                {"Portfolio".split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 }
                                        }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h1>

                        <motion.p
                            className="hero-description"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            I am Duy Tu — an expert in high-performance system architecture,
                            breakthrough user experiences, and large-scale software solutions.
                        </motion.p>

                        <motion.div
                            className="hero-cta"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                        >
                            <Magnetic>
                                <motion.a
                                    href="#work"
                                    className="btn btn-primary"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span>View Portfolio</span>
                                </motion.a>
                            </Magnetic>
                            <div className="social-links">
                                <Magnetic><motion.a whileHover={{ y: -3, color: 'var(--accent-color)' }} href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={22} /></motion.a></Magnetic>
                                <Magnetic><motion.a whileHover={{ y: -3, color: 'var(--accent-secondary)' }} href="https://www.facebook.com/duy.tu.898011/" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={22} /></motion.a></Magnetic>
                                <Magnetic><motion.a whileHover={{ y: -3, color: 'var(--accent-vibrant)' }} href="https://www.instagram.com/_ldtu_/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={22} /></motion.a></Magnetic>
                                <Magnetic><motion.a whileHover={{ y: -3, color: 'var(--accent-color)' }} href="mailto:duytu78204@gmail.com" aria-label="Email"><Mail size={22} /></motion.a></Magnetic>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero-media"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            perspective: "1000px"
                        }}
                    >
                        <motion.div
                            className="professional-frame"
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d"
                            }}
                        >
                            <div className="frame-border"></div>
                            <div className="inner-frame">
                                <div className="frame-tech-overlay">
                                    <Terminal size={400} className="floating-icon" />
                                </div>
                                <img src={avatar} alt="Duy Tu Portfolio" className="hero-avatar-full" />
                            </div>
                        </motion.div>
                        <div className="frame-glow"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};


export default Hero;
