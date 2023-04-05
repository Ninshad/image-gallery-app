import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import PhotoAlbum from "react-photo-album";
import HomeIcon from '../HomeIcon/HomeIcon';
import ReactFullscreen from 'react-easyfullscreen';
import './Gallery.css'

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



const Gallery = () => {

    const [imageClick, setImageClick] = useState(false)

    

    // const[minmizeImage, setMinimizeImage] = useState(true);
    // const [closeFullImage, setCloseFullImage] = useState(false)

    const[smallImage, setSmallImage] = useState(true);
    const[expandImage, setExpandImage] = useState(true);


    useEffect(() => {

        document.querySelector('.fullscreenImage')?.addEventListener('click',fullscreenVideo);
        var elem = document.getElementById("minimizedImage");


        function fullscreenVideo() {
           if (elem.requestFullscreen) {
              elem.requestFullscreen();
           }
           else if (elem.mozRequestFullScreen) {
              elem.mozRequestFullScreen();
           }
           else if (elem.webkitRequestFullscreen) {
              elem.webkitRequestFullscreen();
           }
           else if (elem.msRequestFullscreen) {
              elem.msRequestFullscreen();
           }
        }

        document.querySelector('.closeFullScreenImage')?.addEventListener('click',ExitFullScreen);
        var closeImage = document.getElementById("closeFullscreen");

        function ExitFullScreen() {
            if (closeImage.exitFullscreen) {
                closeImage.exitFullscreen();
            }
         }

    }, [])
    

    const fullScreenClick = () => {
        setSmallImage(false)
    }

    const closeFullscreen = () => {
        setSmallImage(true)
    }
    
    useEffect(() => {
        fullScreenClick()
        closeFullscreen()
    }, [])
    

    

  return (
    <div>
        <HomeIcon />

    
<button className={smallImage? "fullscreenImage" : "closeFullScreenImage"} onClick={fullScreenClick}>Open Video in Fullscreen Mode</button>

<div id={smallImage? 'minimizedImage' : 'fullScreenImage' }>
    <button>previous</button> <div id='closeFullscreen'> <button onClick={closeFullscreen} >Close</button> </div>
<img  src="https://www.photopills.com/sites/default/files/photopillers/benito-gaztelugatxe.jpg" controls alt="" />
    <button>Next</button>

    
</div>   
 
        <PhotoAlbum layout="rows" photos={photos} />;
        
    </div>

    
  )
}






export default Gallery