import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Hero from '../components/Hero';
import { ExternalLink, Github, Cpu, Code2 } from 'lucide-react';

const projects = [
    {
        title: 'Enterprise ERP Architecture',
        specs: 'Next.js 14 • Headless • PostgreSQL • Stripe',
        challenge: 'Designed a high-concurrency inventory locking system with sub-50ms latency.',
        tech: ['System Design', 'Redis', 'PostgreSQL'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop',
        color: 'var(--accent-color)'
    },
    {
        title: 'Nebula AI Vision Platform',
        specs: 'Python • TensorFlow • React • WebSockets',
        challenge: 'Real-time multi-dimensional neural data stream processing for predictive analytics.',
        tech: ['AI/ML', 'WebRTC', 'FastAPI'],
        image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?w=1200&h=800&fit=crop',
        color: 'var(--accent-secondary)'
    },
    {
        title: 'Secure Cloud Infrastructure',
        specs: 'Go • Docker • Kubernetes • OAuth2',
        challenge: 'Implemented a Zero-Trust security model across distributed microservices.',
        tech: ['DevOps', 'Security', 'Cloud Native'],
        image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=800&fit=crop',
        color: 'var(--accent-vibrant)'
    }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
        <motion.div
            className="featured-project-item"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: "1000px"
            }}
        >
            <div className="project-display" style={{ transform: "translateZ(50px)" }}>
                <div className="project-bg-blob" style={{ backgroundColor: project.color }}></div>
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="project-hero-img-full"
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
            </div>

            <div className="project-details" style={{ transform: "translateZ(30px)" }}>
                <div className="project-header-meta">
                    <span className="tech-specs"><Cpu size={14} /> {project.specs}</span>
                </div>
                <motion.h3
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                >{project.title}</motion.h3>
                <p className="project-challenge"><strong>Solution:</strong> {project.challenge}</p>

                <div className="tech-chips-list">
                    {project.tech.map((t: string, i: number) => (
                        <motion.span
                            key={t}
                            className="tech-chip-v2"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: 'var(--accent-color)',
                                color: '#000',
                                boxShadow: '0 0 20px rgba(0, 242, 255, 0.4)'
                            }}
                        >{t}</motion.span>
                    ))}
                </div>

                <div className="project-actions">
                    <motion.a whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} href="#" className="btn btn-outline"><Github size={18} /> Source</motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05, x: 5, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="btn btn-primary btn-icon"
                    >
                        Live Demo <ExternalLink size={18} />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

const Home: React.FC = () => {
    return (
        <motion.div
            className="page home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />

            {/* Technical Specialization */}
            <section className="spec-section">
                <div className="container">
                    <motion.div
                        className="spec-grid"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="spec-card glass-card">
                            <Code2 className="accent-text" size={32} />
                            <h4>Full-Cycle Development</h4>
                            <p>End-to-end engineering from system design to high-performance interface execution.</p>
                        </div>
                        <div className="spec-card glass-card">
                            <Cpu className="accent-secondary-text" size={32} />
                            <h4>Performance Optimization</h4>
                            <p>Fine-tuning critical path operations for maximum scale and minimal latency.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section id="work" className="work-section">
                <div className="container">
                    <motion.div
                        className="section-header-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title-left">Featured Projects</h2>
                        <p className="section-subtitle">Solving technical challenges with optimized technology solutions.</p>
                    </motion.div>

                    <div className="featured-projects-list">
                        {projects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>

        </motion.div>
    );
};

export default Home;
