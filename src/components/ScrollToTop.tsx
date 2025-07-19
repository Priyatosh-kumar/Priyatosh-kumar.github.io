import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '../hooks/useScroll';

const UpArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
);

const ScrollToTop: React.FC = () => {
  const scrolled = useScroll(100); // Only show after scrolling 100px

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <UpArrowIcon />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;