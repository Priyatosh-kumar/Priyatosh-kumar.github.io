import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>&copy; {currentYear} Priyatosh Kumar. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;