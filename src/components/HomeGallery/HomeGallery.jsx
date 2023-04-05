import React from 'react'
import PhotoAlbum from "react-photo-album";
import { images } from '../../constants';
import HomeIcon from '../HomeIcon/HomeIcon';

const photos = [
    { src: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg", width: 800, height: 600 },
    { src: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg", width: 1600, height: 900 },
    { src: "https://us.123rf.com/450wm/dvarg/dvarg2112/dvarg211200030/178477046-silhouette-of-a-nobles-deers-flying-birds-in-magic-misty-forest-at-sunrise-illustration-of.jpg?ver=6", width: 800, height: 600 },
    { src: "https://www.photopills.com/sites/default/files/photopillers/benito-gaztelugatxe.jpg", width: 800, height: 600 },
    { src: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg", width: 800, height: 600 },
    { src: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg", width: 800, height: 600 },
    { src: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg", width: 800, height: 600 },
    { src: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg", width: 800, height: 600 },
    { src: "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg", width: 800, height: 600 },
    
];

const HomeGallery = () => {
  return (
    <div>
        <HomeIcon />
        <PhotoAlbum layout="rows" photos={photos} />;
    </div>
  )
}

export default HomeGallery