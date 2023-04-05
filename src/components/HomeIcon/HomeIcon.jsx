import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../constants'
import './HomeIcon.css'

const HomeIcon = () => {
  return (
    <Link to={'/'}>
    <div className='home-icon'>
        <img src={images.homeIcon} alt="" />
    </div>
    </Link>
  )
}

export default HomeIcon