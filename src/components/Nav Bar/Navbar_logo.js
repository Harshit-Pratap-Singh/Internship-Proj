import React from 'react'
import style from './Navbar_logo.module.css'
import ytLogo from '../../Assests/youtube-logo-png-2069.png'

function Navbar_logo() {
  return (
    <div className={style.container}>
    <div className={style.sidebar}>
    <i className="fa-solid fa-bars"></i>
    </div>
        <div className={style.logo}>
        <img src={ytLogo} alt="logo" />
        <h2>YouTube</h2>
        </div>
    </div>
  )
}

export default Navbar_logo