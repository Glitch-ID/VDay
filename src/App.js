import React, { useState } from 'react';
import './App.css';
import HeartAnimation from './components/HeartAnimation';
import LoveMessage from './components/LoveMessage';
import PhotoGallery from './components/PhotoGallery';
import SimpleDisappearingButton from './components/SimpleDisappearingButton';
import FlowerRain from './components/FlowerRain';
import Envelope from './components/Envelope';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [siteVisible, setSiteVisible] = useState(false);

  const handleEnvelopeOpen = () => {
    setSiteVisible(true);
    // Start confetti when envelope opens
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    setShowMessage(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleMaybeDisappear = () => {
    const newHeart = {
      id: Date.now(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    };
    setFloatingHearts(prev => [...prev, newHeart]);
    
    // Remove heart after animation
    setTimeout(() => {
      setFloatingHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
    }, 2000);
  };

  return (
    <div className="App">
      {/* Envelope that appears first */}
      <Envelope onOpen={handleEnvelopeOpen} />
      
      {/* Main site content - only visible after envelope opens */}
      {siteVisible && (
        <>
          {/* Confetti Effect */}
          {showConfetti && (
            <div className="confetti-container">
              {[...Array(150)].map((_, i) => (
                <div 
                  key={i}
                  className="confetti"
                  style={{
                    left: `${Math.random() * 100}%`,
                    backgroundColor: `hsl(${Math.random() * 360}, 100%, 60%)`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 2}s`,
                    width: `${5 + Math.random() * 10}px`,
                    height: `${5 + Math.random() * 10}px`,
                  }}
                />
              ))}
            </div>
          )}
          
          {/* Floating hearts from disappearing button */}
          {floatingHearts.map(heart => (
            <div 
              key={heart.id}
              className="floating-heart"
              style={{
                left: `${heart.x}px`,
                top: `${heart.y}px`,
              }}
            >
              ❤️
            </div>
          ))}
          
          {/* Background Animations */}
          <FlowerRain />
          <HeartAnimation />
          
          {/* Header */}
          <header className="header">
            <h1 className="title">Happy Valentine's Day, My Love! 💝</h1>
            <p className="subtitle">You make every day feel like Valentine's Day</p>
          </header>

          {/* Main Content */}
          <main className="main-content">
            {/* Love Letter */}
            <div className="love-letter">
              <h2>YO YO YO CHICO💌</h2>
              <p>
               I just cannot express properly how i feel when I'm with you. The day I asked you for the date I was just blank and not expecting that you would go out on a date with me, but MAN-o-MAN it's that day and today I am still in AWWWWWWW.....<br></br>
               Like how I got a girl like you and YOU, I'm just blessed and happy to be with you like YOU make me feel like I have never felt.
              </p>
              <p>
                Today and every day, I choose you. I love you more than words can express.
              </p>
              <p>
                <strong>P.S.</strong><br></br>
                I have made a mistake in the past but now I will not repeat it. As I had said I cannot promise that I won't hurt you but I promise I will try to make things better for you
              </p>
            </div>

            {/* Interactive Section */}
            <div className="interactive-section">
              <h3>Will you be my Valentine forever? 🌹</h3>
              <div className="button-group">
                <button 
                  className="interactive-button yes"
                  onClick={handleYesClick}
                  onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
                  onMouseUp={(e) => e.target.style.transform = 'scale(1.1)'}
                >
                  YES! Always! 💖
                </button>
                <SimpleDisappearingButton onDisappear={handleMaybeDisappear} />
              </div>
            </div>

            {/* Gallery Toggle */}
            {/* <button 
              className="gallery-toggle"
              onClick={() => setShowGallery(!showGallery)}
            >
              {showGallery ? 'Hide Our Memories 📷' : 'Show Our Memories 📸'}
            </button> */}

            {/* Photo Gallery */}
            {showGallery && <PhotoGallery />}
            
            {/* Love Message Modal */}
            {showMessage && <LoveMessage onClose={() => setShowMessage(false)} />}
          </main>

          {/* Footer */}
          <footer className="footer">
            <p>Made with ❤️ for the most amazing person in my life</p>
            <p>Forever yours, my Chico🌻</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;