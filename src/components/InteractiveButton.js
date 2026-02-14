// import React from 'react';
import React, { useState } from 'react';

import './InteractiveButton.css';

const InteractiveButton = ({ text, onClick, onMouseEnter, type, onDisappear }) => {
  const [isVisible, setIsVisible] = useState(type !== 'no');

  const handleMouseEnter = (e) => {
    if (type === 'yes') {
      e.target.style.transform = 'scale(1.1)';
    } else if (type === 'no') {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 1000); // Reappears after 1 second
    }
    if (onMouseEnter) onMouseEnter();
  };

  const handleMouseLeave = (e) => {
    if (type === 'yes') {
      e.target.style.transform = 'scale(1)';
    }
  };

  const handleClick = (e) => {
    if (type === 'no') {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 1000); // Reappears after 1 second
    }
    if (onClick) onClick(e);
  };

  if (!isVisible && type === 'no') {
    return null;
  }

  return (
    <button
      className={`interactive-button ${type}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
      onMouseUp={(e) => e.target.style.transform = type === 'yes' ? 'scale(1.1)' : 'scale(1)'}
    >
      {text}
    </button>
  );
};

export default InteractiveButton;