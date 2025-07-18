import React from 'react';

const Footer = () => {
  const footerStyle = {
    borderTop: '1px solid #e9ecef',
    padding: '20px 40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    color: "#000000"
  };

  const leftTextStyle = {
    margin: 0,
    color: '#000000'
  };


  return (
    <footer style={footerStyle}>
      <p style={leftTextStyle}>
        © 2025 FormAI. All rights reserved. 
      </p>
    </footer>
  );
};

export default Footer;