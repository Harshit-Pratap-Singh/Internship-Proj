import React from 'react'
import style from './SideBar.module.css'
import home from '../../Assests/homepage.png'
import explore from '../../Assests/explore.png'
import subs from '../../Assests/subscription.png'
import library from '../../Assests/library.png'




function SideBar() {
  return (
    <div className={style.container}>
        <div className={style.row}>
            <img src={home} alt="home button" />
            <span>Home</span>
        </div>
        <div className={style.row}>
            <img src={explore} alt="Explore button" />
            <span>Explore</span>
        </div>
        <div className={style.row}>
            <img src={subs} alt="Subscriptions button" />
            <span>Subscriptions</span>
        </div>
        <div className={style.row}>
            <img src={library} alt="Library button" />
            <span>Library</span>
        </div>
    </div>
  )
}

export default SideBar