import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section id="about" className="section about-page-section">
      <motion.div
        ref={ref}
        className="about-section-wrapper"
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {/* --- About Me Section (Now on top) --- */}
        <div className="resume-section about-bio">
          <h2 className="resume-section-title">About Me</h2>
          <p>
            Hello! I'm a third-year B.Tech student in Computer Science and Engineering, based in Punjab, India.
          </p>
          <p>
            My journey into tech started with a fascination for how we can automate tasks and build real-world solutions using code. That curiosity quickly grew into a passion for Machine Learning, Software Development, and DevOps.
          </p>
          <p>
            As a Linux user and problem solver, I enjoy diving into challenges that push me to learn more—whether it's training ML models, writing clean code, or deploying applications. I'm currently building my skill set across tools like Python, TensorFlow, React, Docker, and GCP, and I'm open to any role where I can learn, grow, and contribute.
          </p>
          <p>
            When I’m not coding, I’m usually exploring open-source projects, experimenting with new tools, or leveling up my understanding of system design and ML workflows.
          </p>
        </div>

        {/* --- Education Section (Moved below About Me) --- */}
        <div className="resume-section">
          <h2 className="resume-section-title">Education</h2>
          <div className="education-entry">
            <p className="education-degree">Bachelor of Technology, Computer Science & Engineering</p>
            <p className="education-university">Lovely Professional University, Punjab, India</p>
            {/* Added the year and location */}
            <p className="education-year">2023 - Present</p>
          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default About;