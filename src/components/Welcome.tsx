import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import './Welcome.css';
import portraitImage from '../assets/priya.png';
import helloGif from '../assets/hello.gif';
import AnimatedButton from './AnimatedButton';
import { useMediaQuery } from '../hooks/useMediaQuery'; // 1. Import the new hook

const Welcome: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    // 2. Check if the screen is mobile-sized (768px or less)
    const isMobile = useMediaQuery('(max-width: 768px)');

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    };

    return (
        <section id="home" className="section welcome-section">
            <div className="welcome-content-wrapper">
                <motion.div
                    className="welcome-text-column"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="welcome-heading"
                        variants={itemVariants}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                    >
                        Hello There!
                        {/* 3. Update the condition to show the GIF on hover OR if on mobile */}
                        <AnimatePresence>
                            {(isHovered || isMobile) && (
                                <motion.img
                                    src={helloGif}
                                    alt="Waving hand animation"
                                    className="waving-hand-gif"
                                    initial={{ opacity: 0, y: 50, scale: 0.25 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                />
                            )}
                        </AnimatePresence>
                    </motion.h1>

                    <motion.h1 className="welcome-heading" variants={itemVariants}>
                        I'm Priyatosh Kumar
                    </motion.h1>

                    <motion.p className="welcome-tagline" variants={itemVariants}>
                        Based in Bihar, India, I’m a fresher exploring the tech landscape—working across and discovering my interests in data, machine learning, software development, and infrastructure. I'm driven by curiosity, a love for learning, and a problem-solving mindset focused on building clean, efficient solutions.
                    </motion.p>
                    
                    <motion.div variants={itemVariants}>
                      <AnimatedButton />
                    </motion.div>
                </motion.div>

                <motion.div
                    className="welcome-image-column"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                >
                    <motion.div
                        className="welcome-portrait-container"
                        animate={{ y: ["-10px", "10px"] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    >
                        <img
                            src={portraitImage}
                            alt="Priyatosh Kumar Portrait"
                            className="welcome-portrait"
                        />
                        <div className="welcome-portrait-shadow"></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
 };

 export default Welcome;