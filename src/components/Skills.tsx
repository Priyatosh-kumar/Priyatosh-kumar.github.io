import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css'; // Import the new dedicated stylesheet

// Organize skills into categories
const skillCategories = {
  "Languages": ["Python", "C/C++", "Java", "JavaScript", "TypeScript","SQL"],
  "Machine Learning & Data Science": ["TensorFlow", "OpenCV", "NumPy", "Pandas", "Matplotlib"],
  "Web Development": ["React", "TypeScript"],
  "DevOps & Tools": ["Docker", "Git", "GitHub", "Linux", "Google Cloud Platform (GCP)"]
};

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="section">
      <motion.div
        ref={ref}
        className="skills-section-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 className="skills-heading" variants={itemVariants}>
          Tech Stack
        </motion.h2>

        {(Object.keys(skillCategories) as Array<keyof typeof skillCategories>).map((category) => (
          <motion.div key={category} className="skills-category" variants={itemVariants}>
            <h3 className="skills-category-title">{category}</h3>
            <div className="skills-badge-container">
              {skillCategories[category].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill-badge"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  transition={{ delay: index * 0.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;