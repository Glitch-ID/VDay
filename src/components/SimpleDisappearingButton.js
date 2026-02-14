import React, { useState, useRef } from 'react';
import './SimpleDisappearingButton.css';
import { calculateDustPosition } from '../utils/mathHelpers';

const SimpleDisappearingButton = ({ onDisappear }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationState, setAnimationState] = useState('');
  const [buttonText, setButtonText] = useState('Maybe? 😅');
  const [clickCount, setClickCount] = useState(0);
  const [showDust, setShowDust] = useState(false);
  const buttonRef = useRef(null);

  const messages = [
    "Maybe? 😅",
    "I am inevitable... 😈",
    "You should have gone for the head! 💀",
    "Perfectly balanced... ⚖️",
    "As all things should be. ✨",
    "The hardest choices... 🤔",
    "Require the strongest wills. 💪",
    "Dread it. Run from it. 😏",
    "Destiny arrives all the same. 🕰️",
    "I am... inevitable! 💀✨"
  ];

  const createDustEffect = () => {
    setShowDust(true);
    setTimeout(() => {
      setShowDust(false);
    }, 1500);
  };

  const handleInteraction = (e) => {
    if (animationState === 'snap-disappear') return;
    
    const nextIndex = (clickCount + 1) % messages.length;
    
    // Start snap animation
    setAnimationState('snap-start');
    
    if (onDisappear) {
      onDisappear();
    }
    
    setClickCount(nextIndex);
    
    // After glow effect, create dust and disappear
    setTimeout(() => {
      setAnimationState('snap-disappear');
      createDustEffect();
      
      // Disappear completely after dust animation
      setTimeout(() => {
        setIsVisible(false);
        setAnimationState('');
        
        // Reappear after delay
        setTimeout(() => {
          setIsVisible(true);
          setAnimationState('reappear');
          setButtonText(messages[nextIndex]);
          
          // Reset animation state after reappearing
          setTimeout(() => {
            setAnimationState('');
          }, 1000);
        }, 2000);
      }, 1200); // Match this with CSS animation duration
    }, 500);
  };

  if (!isVisible) {
    return (
      <div className="countdown-message">
        Reassembling... ⏳
      </div>
    );
  }

  return (
    <div className="disappearing-button-container">
      {/* Dust Overlay that covers the button area */}
      {showDust && (
        <div className="dust-overlay">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="dust-particle"
              style={{
                '--particle-size': `${2 + Math.random() * 6}px`,
                '--particle-color': `hsl(${30 + Math.random() * 30}, 70%, ${50 + Math.random() * 20}%)`,
                '--delay': `${Math.random() * 0.5}s`,
                '--distance': `${30 + Math.random() * 70}px`,
                '--angle': `${Math.random() * 360}deg`,
                '--rotation': `${Math.random() * 720}deg`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      )}
      
      <button
        ref={buttonRef}
        className={`disappearing-button ${animationState}`}
        onMouseEnter={handleInteraction}
        onClick={handleInteraction}
      >
        <span className="button-text">{buttonText}</span>
        {/* Inner dust effect that follows the button */}
        {animationState === 'snap-disappear' && (
          <div className="button-dust-effect">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="button-dust-particle" />
            ))}
          </div>
        )}
      </button>
    </div>
  );
};

// In the dust particle creation:
const dustParticles = Array.from({ length: 40 }).map((_, i) => {
  const angle = Math.random() * 360;
  const distance = 30 + Math.random() * 70;
  const position = calculateDustPosition(angle, distance);
  
  return {
    key: i,
    style: {
      '--particle-size': `${2 + Math.random() * 6}px`,
      '--particle-color': `hsl(${30 + Math.random() * 30}, 70%, ${50 + Math.random() * 20}%)`,
      '--delay': `${Math.random() * 0.5}s`,
      '--distance': `${distance}px`,
      '--angle': `${angle}deg`,
      '--offset-x': `${position.x}px`,
      '--offset-y': `${position.y}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }
  };
});

export default SimpleDisappearingButton;