import React, { useState } from 'react';
import './Envelope.css';

const Envelope = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    
    // Animate envelope opening
    setTimeout(() => {
      setIsOpen(true);
      
      // Call onOpen after envelope opens
      setTimeout(() => {
        if (onOpen) onOpen();
      }, 800);
    }, 800);
  };

  if (isOpen) return null;

  return (
    <div className={`rose-envelope-container ${isOpening ? 'opening' : ''}`}>
      <div className="rose-envelope">
        {/* Rose Pattern Background */}
        <div className="rose-pattern"></div>
        
        {/* Romantic Border */}
        <div className="romantic-border">
          <div className="border-roses">
            <span>🌹</span>
            <span>🌹</span>
            <span>🌹</span>
          </div>
        </div>
        
        {/* Decorative Corners */}
        <div className="corner-decoration top-left">
          <span>🌹</span>
        </div>
        <div className="corner-decoration top-right">
          <span>🌹</span>
        </div>
        <div className="corner-decoration bottom-left">
          <span>🌹</span>
        </div>
        <div className="corner-decoration bottom-right">
          <span>🌹</span>
        </div>
        
        {/* Romantic Quote */}
        <div className="envelope-quote">
          <p className="quote-text">"A rose speaks of love silently"</p>
          <p className="quote-author">- Valentine's Secret</p>
        </div>
        
        {/* To/From Labels */}
        <div className="vintage-labels">
          <div className="to-label">
            <span className="label-text">To:</span>
            <span className="name-text">My Beloved</span>
          </div>
          <div className="from-label">
            <span className="label-text">From:</span>
            <span className="name-text">Your Valentine</span>
          </div>
        </div>
        
        {/* Rose Seal - Main Attraction */}
        <div className="rose-seal" onClick={handleOpen}>
          <div className="seal-wax-base"></div>
          <div className="seal-impression">
            <div className="rose-stamp">
              <div className="rose-petal petal-1"></div>
              <div className="rose-petal petal-2"></div>
              <div className="rose-petal petal-3"></div>
              <div className="rose-petal petal-4"></div>
              <div className="rose-petal petal-5"></div>
              <div className="rose-center"></div>
              <div className="rose-leaf leaf-left"></div>
              <div className="rose-leaf leaf-right"></div>
            </div>
          </div>
          <div className="seal-wax-drip drip-1"></div>
          <div className="seal-wax-drip drip-2"></div>
          <div className="seal-wax-drip drip-3"></div>
          <div className="seal-glow"></div>
        </div>
        
        {/* Envelope Flaps */}
        <div className="rose-flap top-flap">
          <div className="flap-rose-pattern"></div>
        </div>
        <div className="rose-flap left-flap">
          <div className="flap-rose-pattern"></div>
        </div>
        <div className="rose-flap right-flap">
          <div className="flap-rose-pattern"></div>
        </div>
        <div className="rose-flap bottom-flap">
          <div className="flap-rose-pattern"></div>
        </div>
        
        {/* Envelope Body */}
        <div className="rose-envelope-body">
          <div className="rose-envelope-content">
            <div className="rose-message">
              <div className="message-card">
                <div className="card-roses">
                  <span>🌹</span>
                  <span>🌹</span>
                  <span>🌹</span>
                </div>
                <h2 className="message-title">A Secret Awaits</h2>
                <div className="message-divider">✧ ✿ ✧</div>
                <p className="message-instruction">Press the rose seal to open</p>
                <div className="message-hearts">
                  <span>💕</span>
                  <span>🌹</span>
                  <span>💕</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envelope;