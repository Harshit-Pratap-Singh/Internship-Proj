import React from "react";
import style from "./AdComp.module.css";

function AdComp(props) {
  //   useEffect(() => {
  //     const p = document.querySelector("#123");
  //     p.requestFullscreen();
  //   });
  return (
    <div className={style.container} id="123">
      <a href={props.ad.redirect} target="_blank" rel="noreferrer">
        <img src={props.ad.url} alt="ad" className={style.adImg} />
      </a>
    </div>
  );
}

export default AdComp;
