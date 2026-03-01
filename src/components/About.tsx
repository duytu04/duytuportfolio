import React from 'react';
import { User, Code2, Rocket } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-grid">
                    <div className="glass-card about-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <div className="card-icon">
                            <User className="accent-text" size={28} />
                        </div>
                        <h3>Who I Am</h3>
                        <p>
                            I am a dedicated IT enthusiast with a strong foundation in software development.
                            I love solving complex problems and turning creative ideas into functional digital solutions.
                        </p>
                    </div>

                    <div className="glass-card about-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="card-icon">
                            <Code2 className="accent-text" size={28} />
                        </div>
                        <h3>What I Do</h3>
                        <p>
                            My expertise covers Frontend and Backend development, with a deep love for React,
                            TypeScript, and modern UI/UX design principles.
                        </p>
                    </div>

                    <div className="glass-card about-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <div className="card-icon">
                            <Rocket className="accent-text" size={28} />
                        </div>
                        <h3>My Goal</h3>
                        <p>
                            I strive to continuously learn and adapt to new technologies, aiming to contribute
                            to impactful projects that make a difference in the tech world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
