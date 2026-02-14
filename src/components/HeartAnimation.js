import React from 'react';
import './HeartAnimation.css';

const HeartAnimation = () => {
  return (
    <div className="heart-container">
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`,
            fontSize: `${20 + Math.random() * 30}px`
          }}
        >
          {i % 3 === 0 ? '💖' : i % 3 === 1 ? '💗' : '💕'}
        </div>
      ))}
    </div>
  );
};

export default HeartAnimation;