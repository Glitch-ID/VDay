import React, { useState } from 'react';
import './SmartMaybeButton.css';

const SmartMaybeButton = () => {
  const [position, setPosition] = useState({ x: '50%', y: '50%' });
  const [isVisible, setIsVisible] = useState(true);
  const [clicks, setClicks] = useState(0);
  
  const messages = [
    "Maybe? 😅",
    "Try again! 😜",
    "You can't catch me! 🏃‍♂️",
    "Still trying? 😏",
    "Almost got it! 👀",
    "One more time! 🤭",
    "Okay okay! 😂",
    "You win! 🏆"
  ];

  const moveButton = () => {
    // Move to random position
    const newX = Math.random() * 80 + 10; // 10% to 90%
    const newY = Math.random() * 80 + 10;
    
    setPosition({
      x: `${newX}%`,
      y: `${newY}%`
    });
    
    setClicks(prev => prev + 1);
    
    // Disappear after 8 clicks
    if (clicks >= 7) {
      setIsVisible(false);
      setTimeout(() => {
        setIsVisible(true);
        setClicks(0);
        setPosition({ x: '50%', y: '50%' });
      }, 3000); // Reappear after 3 seconds
    }
  };

  const handleMouseEnter = () => {
    moveButton();
  };

  const handleClick = () => {
    moveButton();
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className="smart-maybe-button"
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {messages[Math.min(clicks, messages.length - 1)]}
    </button>
  );
};

export default SmartMaybeButton;