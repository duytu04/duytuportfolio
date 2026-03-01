import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Shield, Zap, Camera, Terminal } from 'lucide-react';
import workingImg from '../assets/working.jpg';

const AboutPage: React.FC = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className="page about-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container">
                <h2 className="section-title">Technical Mindset</h2>

                <motion.div
                    className="bento-grid"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {/* Working Image Card - FULL FIDELITY */}
                    <motion.div
                        className="glass-card bento-item bento-wide bento-media-showcase"
                        variants={item}
                        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                    >
                        <div className="media-header">
                            <Camera size={16} className="accent-text" />
                            <span>Reality & Source Code</span>
                        </div>
                        <div className="media-content">
                            <motion.img
                                src={workingImg}
                                alt="Duy Tu working"
                                className="working-img-full"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.8 }}
                            />
                            <div className="media-overlay">
                                <p>Architecting sustainable solutions at 3 AM. Professional dedication.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Core Philosophy */}
                    <motion.div
                        className="glass-card bento-item bento-main"
                        variants={item}
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="card-icon"><Cpu className="accent-text" size={32} /></div>
                        <h3>System Architecture</h3>
                        <p>
                            I don't just write code; I design systems. My top priorities are scalability,
                            modular architecture, and performance optimization for critical applications.
                        </p>
                    </motion.div>

                    {/* Security Card */}
                    <motion.div
                        className="glass-card bento-item"
                        variants={item}
                        whileHover={{ x: 5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                    >
                        <div className="card-icon"><Shield className="accent-secondary-text" size={24} /></div>
                        <h4>Security at Core</h4>
                        <p>Absolute focus on data integrity and secure communication protocols.</p>
                    </motion.div>

                    {/* Performance Card */}
                    <motion.div
                        className="glass-card bento-item"
                        variants={item}
                        whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                    >
                        <div className="card-icon"><Zap className="accent-vibrant-text" size={24} /></div>
                        <h4>Optimization</h4>
                        <p>Achieving sub-millisecond latency and the most efficient resource allocation.</p>
                    </motion.div>

                    {/* Technical Stack */}
                    <motion.div
                        className="glass-card bento-item bento-tech"
                        variants={item}
                        whileHover={{ y: -5 }}
                    >
                        <div className="card-icon"><Code2 className="accent-text" size={32} /></div>
                        <h3>Full-Stack Mastery</h3>
                        <p>
                            From modern React/TypeScript interfaces to robust Node.js/Go backends,
                            blurring the gap between design and infrastructure.
                        </p>
                    </motion.div>

                    {/* Technical Vision */}
                    <motion.div
                        className="glass-card bento-item bento-wide"
                        variants={item}
                        whileHover={{ scale: 0.99 }}
                    >
                        <div className="card-icon"><Terminal className="accent-text" size={32} /></div>
                        <h3>Future Technology Vision</h3>
                        <p>
                            I am Duy Tu, a Software Engineer dedicated to pushing the boundaries of
                            modern web technology and cloud-native solutions.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
