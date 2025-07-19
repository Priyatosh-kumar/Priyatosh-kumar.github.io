import React, { useState, useEffect } from 'react'; // 1. Import useEffect
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useScroll } from '../hooks/useScroll';

// --- Icon Components (no changes needed) ---
const HamburgerIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg> );
const CloseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> );
const LinkedInIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> );
const GitHubIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> );
const MailIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> );

const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

const Header: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScroll();

  // 2. Add a state to track the initial page load
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    // After a very short delay, allow the scroll animation to work
    const timer = setTimeout(() => setHasLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const headerVariants: Variants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: '-150%', opacity: 0 }
  };

  return (
    <>
      <motion.header
        className="floating-header"
        variants={headerVariants}
        // 3. Update the animate logic to check the 'hasLoaded' state
        animate={hasLoaded && scrolled && !isMenuOpen ? 'hidden' : 'visible'}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      >
        <div className="desktop-nav">
          {navLinks.map(link => (
            <a href={`#${link.id}`} key={link.id} className="nav-link">
              {link.title}
            </a>
          ))}
        </div>
        
        <a href="#home" className="mobile-logo" onClick={closeMenu}>
          priyatosh.
        </a>

        <button className="hamburger-button" onClick={toggleMenu}>
          <HamburgerIcon />
        </button>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="mobile-menu-close" onClick={toggleMenu}>
              <CloseIcon />
            </button>
            <nav className="mobile-menu-nav">
              {navLinks.map(link => (
                 <a href={`#${link.id}`} key={link.id} onClick={closeMenu}>
                    {link.title}
                 </a>
              ))}
            </nav>
            <div className="mobile-menu-socials">
              <a href="https://linkedin.com" onClick={closeMenu} target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
              <a href="https://github.com" onClick={closeMenu} target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
              <a href="mailto:priyatosh.dev@gmail.com" onClick={closeMenu} target="_blank" rel="noopener noreferrer"><MailIcon/></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;