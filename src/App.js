import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import HomeMenu from './components/HomeMenu/HomeMenu';
import ImagesGallery from './components/ImagesGallery/ImagesGallery';
import NewGallery from './components/NewGallery/NewGallery';
import NewGallery2 from './components/NewGallery2/NewGallery2';

function App() {


  // https://cloudinary.com/documentation/node_image_and_video_upload

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home-menu",
      element: <HomeMenu />,
    },
    {
      path: "/gallery",
      element: <ImagesGallery />,
    },

  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  
}

export default App;
