import React from 'react';
import './AnimatedButton.css'; // This will be its own dedicated stylesheet



const AnimatedButton: React.FC = () => {
  return (
    <a
      href="/Priyatosh_Kumar_Resume.pdf"
      download
      className="button button--pen"
    >
      <div className="button__wrapper">
        <span className="button__text">Resume</span>
      </div>
      <div className="characterBox">
        <div className="character wakeup">
          <div className="character__face"></div>
          <div className="charactor__face2"></div>
        </div>
        <div className="character wakeup">
          <div className="character__face"></div>
          <div className="charactor__face2"></div>
        </div>
        <div className="character">
          <div className="character__face"></div>
          <div className="charactor__face2"></div>
        </div>
      </div>
    </a>
  );
};

export default AnimatedButton;