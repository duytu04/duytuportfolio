import React from 'react';
import { Layout, Server, Database, Smartphone, Globe, Shield } from 'lucide-react';

const skills = [
    { name: 'Frontend Dev', icon: <Layout size={24} />, description: 'React, TypeScript, Next.js' },
    { name: 'Backend Dev', icon: <Server size={24} />, description: 'Node.js, Express, Python' },
    { name: 'Databases', icon: <Database size={24} />, description: 'PostgreSQL, MongoDB, Redis' },
    { name: 'Mobile App', icon: <Smartphone size={24} />, description: 'React Native, Flutter' },
    { name: 'Web Security', icon: <Shield size={24} />, description: 'OAuth, JWT, Hashing' },
    { name: 'Cloud Ops', icon: <Globe size={24} />, description: 'AWS, Docker, CI/CD' },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">My Expertise</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div key={index} className="glass-card skill-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="card-icon">{skill.icon}</div>
                            <h3>{skill.name}</h3>
                            <p>{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
