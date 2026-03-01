import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const [cursorText, setCursorText] = useState('');

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            const interactive = target.closest('a, button, .featured-project-item');

            setIsPointer(!!interactive);

            if (target.closest('.featured-project-item')) {
                setCursorText('VIEW');
            } else {
                setCursorText('');
            }
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        document.body.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    <motion.div
                        className="cursor-dot"
                        animate={{
                            x: position.x - 4,
                            y: position.y - 4,
                            scale: isPointer ? 1.5 : 1,
                        }}
                        transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.5 }}
                    />
                    <motion.div
                        className="cursor-ring"
                        animate={{
                            x: position.x - 20,
                            y: position.y - 20,
                            scale: cursorText ? 2.5 : (isPointer ? 1.5 : 1),
                            opacity: isPointer ? 0.5 : 0.3,
                            backgroundColor: cursorText ? 'var(--accent-color)' : 'transparent'
                        }}
                        transition={{ type: 'spring', damping: 20, stiffness: 100, mass: 0.8 }}
                    >
                        {cursorText && (
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="cursor-text"
                            >
                                {cursorText}
                            </motion.span>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CustomCursor;
