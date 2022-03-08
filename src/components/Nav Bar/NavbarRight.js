import React from "react";
import style from "./Navbar_right.module.css";
import camIcon from "../../Assests/video-player.png";
import dotboxIcon from "../../Assests/setup-dots.png";
import notificationIcon from "../../Assests/notification.png";
import user from "../../Assests/user.png";

function Navbar_right() {
  return (
    <div className={style.container}>
      <img
        src={camIcon}
        alt="cam Icon"
        className={`${style.camIcon} ${style.icon}`}
      />

      <img
        src={dotboxIcon}
        alt="Apps Icon"
        className={`${style.dotboxIcon} ${style.icon}`}
      />

      <img
        src={notificationIcon}
        alt="Notification Icon"
        className={`${style.notificationIcon} ${style.icon}`}
      />

      <img
        src={user}
        alt="User"
        className={`${style.userProfile} ${style.icon}`}
      />
    </div>
  );
}

export default Navbar_right;
