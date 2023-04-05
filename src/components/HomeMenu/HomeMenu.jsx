import React from 'react'
import HomeGallery from '../HomeGallery/HomeGallery'
import { scaleRotate as Menu } from 'react-burger-menu'

const HomeMenu = () => {

    var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '36px',
          top: '36px'
        },
        bmBurgerBars: {
          background: '#373a47'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#063146',
          // background: 'rgb(195 33 33)',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em',
          width: '100%',
          overflow: 'hidden'
      
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        },
    
      }

  return (
    <div id="outer-container">
      {/* <HomeMenu pageWrapId={"page-wrap"} outerContainerId={ "outer-container" } /> */}


  <Menu styles={styles}  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
    <div className='menu-items'>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}

        </div>
        </Menu>
      <div id="page-wrap">
      <HomeGallery />
      </div>
    </div>
  )
}

export default HomeMenu