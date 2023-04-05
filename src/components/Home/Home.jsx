import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../constants'
import './Home.css'


const Home = () => {
  return (
    <div className='home-buttons'>
        <Link to={'/home-menu'}>
        <div className='home-button-img'><img src={images.home} alt="" /></div>
        </Link>
        <Link to={'/gallery'}>
        <div className='home-button-img'><img src={images.gallery} alt="" /></div>
        </Link>
        <Link to={'/upload'}>
        <div className='home-button-img'><img src={images.upload} alt="" /></div>
        </Link>
    </div>
  )
}

export default Home