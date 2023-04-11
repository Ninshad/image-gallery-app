import React from 'react'
import ImageGallery from 'react-image-gallery';


const images = [
  {
    original: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
    thumbnail: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
  },
  {
    original: 'https://us.123rf.com/450wm/dvarg/dvarg2112/dvarg211200030/178477046-silhouette-of-a-nobles-deers-flying-birds-in-magic-misty-forest-at-sunrise-illustration-of.jpg?ver=6',
    thumbnail: 'https://us.123rf.com/450wm/dvarg/dvarg2112/dvarg211200030/178477046-silhouette-of-a-nobles-deers-flying-birds-in-magic-misty-forest-at-sunrise-illustration-of.jpg?ver=6',
  },
  {
    original: './nature1.jpg',
    thumbnail: './nature1.jpg',
  },
  {
    original: 'https://www.photopills.com/sites/default/files/photopillers/benito-gaztelugatxe.jpg',
    thumbnail: 'https://www.photopills.com/sites/default/files/photopillers/benito-gaztelugatxe.jpg',
  },
  {
    original: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
    thumbnail: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
  },
  {
    original: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
    thumbnail: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
  },
  {
    original: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
    thumbnail: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
  },
  {
    original: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
    thumbnail: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
  },
  {
    original: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
    thumbnail: 'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg',
  },
];

const ImagesGallery = () => {
  return (
    <ImageGallery
    additionalClass="app-image-gallery" 
    isRTL={false} 
    slideOnThumbnailOver={false} 
    // slideDuration={450}
    // slideInterval={3000}
    items={images} />
  )
}

export default ImagesGallery