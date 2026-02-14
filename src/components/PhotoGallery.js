import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './PhotoGallery.css';

const PhotoGallery = () => {
  // Replace these with your own photo URLs or base64 images
  const photos = [
    { id: 1, emoji: '📸', caption: 'Our First Date' },
    { id: 2, emoji: '🎉', caption: 'Celebrating Together' },
    { id: 3, emoji: '🌅', caption: 'Beautiful Sunset' },
    { id: 4, emoji: '🎄', caption: 'Holiday Memories' },
    { id: 5, emoji: '🍕', caption: 'Food Adventures' },
    { id: 6, emoji: '🏖️', caption: 'Beach Days' },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="photo-gallery">
      <h3>Our Beautiful Memories 💝</h3>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="photo-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="photo-placeholder">
              <span className="photo-emoji">{photo.emoji}</span>
              {/* Replace with actual image:
              <img src={photo.url} alt={photo.caption} />
              */}
            </div>
            <p className="photo-caption">{photo.caption}</p>
          </motion.div>
        ))}
      </div>
      
      {selectedPhoto && (
        <motion.div 
          className="photo-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="modal-content">
            <div className="modal-emoji">{selectedPhoto.emoji}</div>
            <h4>{selectedPhoto.caption}</h4>
            <p>One of our special moments together ❤️</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PhotoGallery;