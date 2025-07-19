import React from 'react';
import { motion } from 'framer-motion';

// Define the structure of the props the component will receive
interface LeftSidebarProps {
  activeSection: string;
}

// --- THIS IS THE ARRAY TO UPDATE ---
const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' }, // ADDED: New Skills link
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];
// --- END OF THE ARRAY TO UPDATE ---

const LeftSidebar: React.FC<LeftSidebarProps> = ({ activeSection }) => {
  const variants = {
    hidden: { x: '-150%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.aside
      className="left-sidebar"
      variants={variants}
      initial="hidden"
      // The logic remains the same: show when not on the 'home' (welcome) section
      animate={activeSection !== 'home' && activeSection !== 'contact' ? 'visible' : 'hidden'}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={activeSection === link.id ? 'active' : ''}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  );
};

export default LeftSidebar;