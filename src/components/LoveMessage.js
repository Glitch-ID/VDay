import React, { useState, useRef, useEffect } from 'react';
import './LoveMessage.css';

const LoveMessage = ({ onClose }) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const modalRef = useRef();
  
  const messages = [
    "Every day with you is better than the last 🌟",
    "Annoying you is the best and the worst thing I do🌚🌚🌚",
    "I fall for you more every single day 🍂",
    "You're my favorite person 📱❤️",
    "Loving you is easy 💞",
    "And YOU make it easy for me to love you more.💖💖💖"
  ];

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const nextMessage = () => {
    setMessageIndex((messageIndex + 1) % messages.length);
  };

  return (
    <div className="love-message-overlay">
      <div className="love-message" ref={modalRef}>
        <div className="message-content">
          {/* Close Button - Top Right Corner */}
          <button className="close-button" onClick={onClose} aria-label="Close message">
            <span className="close-icon">×</span>
          </button>
          
          <h3>Special Message Just For You 💌</h3>
          <p className="message-text">{messages[messageIndex]}</p>
          
          {/* Only Next Message Button (No Close button in footer) */}
          <button onClick={nextMessage} className="next-message-btn">
            Next Sweet Message 💖
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoveMessage;