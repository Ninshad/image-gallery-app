import React, { useState } from 'react';
import './NewGallery.css';

// Array of image URLs
const images = [
  'https://via.placeholder.com/500x500?text=Image+1',
  'https://via.placeholder.com/500x500?text=Image+2',
  'https://via.placeholder.com/500x500?text=Image+3',
  'https://via.placeholder.com/500x500?text=Image+4',
  'https://via.placeholder.com/500x500?text=Image+5',
  'https://via.placeholder.com/500x500?text=Image+6',
];

function NewGallery() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  function handleImageClick(imageIndex) {
    // Set the clicked image as fullscreen image
    setFullscreenImage(imageIndex);
    // Request fullscreen mode on the document
    document.documentElement.requestFullscreen();
  }

  function exitFullscreen() {
    // Exit fullscreen mode and set fullscreenImage to null
    document.exitFullscreen();
    setFullscreenImage(null);
  }

  return (
    <div className="image-grid">
      {/* Render each image in a square box */}
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className="image-box"
          style={{ backgroundImage: `url(${imageUrl})` }}
          onClick={() => handleImageClick(index)}
        />
      ))}

      {/* Conditional rendering for the exit button */}
      {fullscreenImage !== null && (
        <button className="exit-button" onClick={exitFullscreen}>
          Exit Fullscreen
        </button>
      )}
    </div>
  );
}

export default NewGallery;
