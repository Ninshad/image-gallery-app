import React, { useState } from 'react';
import './NewGallery2.css';

// Array of image URLs
const images = [
  'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
  'https://us.123rf.com/450wm/dvarg/dvarg2112/dvarg211200030/178477046-silhouette-of-a-nobles-deers-flying-birds-in-magic-misty-forest-at-sunrise-illustration-of.jpg?ver=6',
  'https://www.photopills.com/sites/default/files/photopillers/benito-gaztelugatxe.jpg',
  'https://via.placeholder.com/500x500?text=Image+4',
  'https://via.placeholder.com/500x500?text=Image+5',
  'https://via.placeholder.com/500x500?text=Image+6',
];

function NewGallery2() {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  function handleImageClick(imageIndex) {
    // Set the clicked image as fullscreen image
    setFullscreenImage(imageIndex);
    // Request fullscreen mode on the clicked image element
    const clickedImage = document.getElementById(`image-${imageIndex}`);
    if (clickedImage) {
      clickedImage.requestFullscreen();
    }
  }

  function exitFullscreen() {
    // Exit fullscreen mode and set fullscreenImage to null
    document.exitFullscreen();
    setFullscreenImage(null);
  }

  return (
    <div className="image-grid">
      {/* Render each image with an ID */}
      {images.map((imageUrl, index) => (
        <>
        <div>
          {fullscreenImage !== null && (
        <button className="exit-button" onClick={exitFullscreen}>
          Exit Fullscreen
        </button>
      )}
        <img
          key={index}
          id={`image-${index}`}
          className={`image-box ${fullscreenImage === index && 'image-box-fullscreen'}`}
          src={imageUrl}
          onClick={() => handleImageClick(index)}
        />
        </div>
        </>
      ))}

      {/* Conditional rendering for the exit button */}
      {/* {fullscreenImage !== null && (
        <button className="exit-button" onClick={exitFullscreen}>
          Exit Fullscreen
        </button>
      )} */}
    </div>
  );
}

export default NewGallery2;
