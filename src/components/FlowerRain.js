import React from 'react';
import './FlowerRain.css';

const FlowerRain = () => {
  const flowers = ['🌹', '🌸', '💮', '🏵️', '🌺', '🌻', '🌼'];
  
  return (
    <div className="flower-rain">
      {[...Array(30)].map((_, i) => (
        <div 
          key={i}
          className="flower"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
            fontSize: `${20 + Math.random() * 20}px`
          }}
        >
          {flowers[Math.floor(Math.random() * flowers.length)]}
        </div>
      ))}
    </div>
  );
};

export default FlowerRain;