import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Phone, Facebook, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <motion.div
            className="page contact-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <div className="glass-card contact-container">
                    <div className="contact-info">
                        <h3>Let's build something elite</h3>
                        <p>I'm always open to discussing new projects, creative ideas or architectural challenges.</p>

                        <div className="contact-links">
                            <a href="mailto:duytu78204@gmail.com" className="contact-item">
                                <Mail className="accent-text" />
                                <span>duytu178204@gmail.com</span>
                            </a>
                            <a href="tel:0979401426" className="contact-item">
                                <Phone className="accent-text" />
                                <span>0979 401 426</span>
                            </a>
                            <a href="https://www.facebook.com/duy.tu.898011/" target="_blank" rel="noreferrer" className="contact-item">
                                <Facebook className="accent-text" />
                                <span>Facebook</span>
                            </a>
                            <a href="https://www.instagram.com/_ldtu_/" target="_blank" rel="noreferrer" className="contact-item">
                                <Instagram className="accent-text" />
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>

                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email Address" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="What technical solution do you need?" rows={5} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">
                            <span>Send Specs</span>
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
