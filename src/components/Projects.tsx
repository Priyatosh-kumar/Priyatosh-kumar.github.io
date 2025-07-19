import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projectData = [
  {
    title: "AI-Powered Customer Support Chatbot",
    description: "A chatbot using Natural Language Processing to understand and respond to customer queries in real-time. The system is containerized and deployed on a scalable infrastructure.",
    stack: "Python, TensorFlow, Flask, Docker, Kubernetes, React",
    liveUrl: "#",
    codeUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1555949963-ff98c67262d3?w=500&q=80",
  },
  {
    title: "CI/CD Pipeline for Microservices",
    description: "An automated CI/CD pipeline that builds, tests, and deploys multiple microservices. This setup dramatically reduces deployment time and manual errors.",
    stack: "Jenkins, GitLab CI, Docker, Ansible, AWS",
    liveUrl: "#",
    codeUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&q=80",
  },
  {
    title: "E-commerce Analytics Dashboard",
    description: "A full-stack web application that provides real-time analytics for an e-commerce platform, featuring sales trends, user behavior, and inventory management.",
    stack: "React, Node.js, Express, MongoDB, D3.js",
    liveUrl: "#",
    codeUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80",
  },
  {
    title: "Image Recognition API for Defect Detection",
    description: "A machine learning model exposed via a REST API that identifies manufacturing defects from images, built with a convolutional neural network.",
    stack: "Python, PyTorch, FastAPI, Docker",
    liveUrl: "#",
    codeUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1614741118884-62ac16ac5616?w=500&q=80",
  },
];

const Projects: React.FC = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 }
    }

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <motion.div
        ref={ref}
        className="projects-grid"
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {projectData.map((project, index) => (
          <motion.div key={index} className="project-card" variants={item}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Stack:</strong> {project.stack}</p>
              <div className="project-links">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;