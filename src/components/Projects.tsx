import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack commerce solution with real-time inventory management.',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        link: '#',
        github: '#',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop'
    },
    {
        title: 'AI Dashboard',
        description: 'Interactive dashboard for monitoring machine learning models.',
        tech: ['Python', 'React', 'D3.js'],
        link: '#',
        github: '#',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?w=500&h=300&fit=crop'
    },
    {
        title: 'Secure Messenger',
        description: 'End-to-end encrypted chat application for privacy-focused users.',
        tech: ['TypeScript', 'Firebase', 'WebCrypto'],
        link: '#',
        github: '#',
        image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=500&h=300&fit=crop'
    }
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-card project-card">
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} className="icon-btn"><Github size={20} /></a>
                                        <a href={project.link} className="icon-btn"><ExternalLink size={20} /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <div className="project-tech">
                                    {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
