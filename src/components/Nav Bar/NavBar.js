import React from "react";
import style from "./NavBar.module.css";
import Navbar_logo from "./Navbar_logo";
import Navbar_right from "./Navbar_right";
import Navbar_search from "./Navbar_search";

function NavBar() {
  return (
    <div className={style.container}>
      <Navbar_logo />
      <Navbar_search />
      <Navbar_right />
    </div>
  );
}

export default NavBar;
