import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Cpu, Layers } from 'lucide-react';

const skillClusters = [
    {
        title: 'Architectural Frontend',
        icon: <Layout className="accent-text" />,
        description: 'Specializing in high-performance, accessible, and scalable user interfaces.',
        skills: ['React 18', 'TypeScript', 'Next.js', 'Framer Motion', 'Tailwind CSS']
    },
    {
        title: 'Robust Backend Systems',
        icon: <Server className="accent-text" />,
        description: 'Designing distributed systems and RESTful/GraphQL APIs with Node.js and Go.',
        skills: ['Node.js', 'Express', 'Go', 'Microservices', 'GraphQL']
    },
    {
        title: 'Data & Security',
        icon: <Database className="accent-text" />,
        description: 'Ensuring data integrity and implementing advanced security protocols.',
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'OAuth2', 'JWT']
    }
];

const SkillsPage: React.FC = () => {
    return (
        <motion.div
            className="page skills-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container">
                <h2 className="section-title">Technology Ecosystem</h2>

                <div className="skills-categories-grid">
                    {skillClusters.map((cluster, idx) => (
                        <motion.div
                            key={cluster.title}
                            className="glass-card category-card"
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                        >
                            <div className="category-header">
                                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                                    {cluster.icon}
                                </motion.div>
                                <h3>{cluster.title}</h3>
                            </div>
                            <p className="cluster-desc">{cluster.description}</p>
                            <div className="skills-tags">
                                {cluster.skills.map((s) => (
                                    <motion.span
                                        key={s}
                                        className="skill-tag secondary"
                                        whileHover={{ scale: 1.1, borderColor: 'var(--accent-color)', color: 'var(--accent-color)' }}
                                    >
                                        {s}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="additional-skills-grid">
                    <motion.div
                        className="glass-card info-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ y: -5 }}
                    >
                        <Cpu size={32} className="accent-text" />
                        <h4>Computational Efficiency</h4>
                        <p>Algorithm optimization and low-level performance tuning.</p>
                    </motion.div>
                    <motion.div
                        className="glass-card info-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        whileHover={{ y: -5 }}
                    >
                        <Layers size={32} className="accent-secondary-text" />
                        <h4>DevOps & CI/CD</h4>
                        <p>Automating deployment pipelines with Docker and GitHub Actions.</p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default SkillsPage;
