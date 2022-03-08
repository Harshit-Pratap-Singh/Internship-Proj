import React from "react";
import style from "./NavBar.module.css";
import NavbarLogo from "./NavbarLogo";
import NavbarRight from "./NavbarRight";
import NavbarSearch from "./NavbarSearch";

function NavBar() {
  return (
    <div className={style.container}>
      <NavbarLogo />
      <NavbarSearch />
      <NavbarRight />
    </div>
  );
}

export default NavBar;
