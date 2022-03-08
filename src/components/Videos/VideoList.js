import axios from "axios";
import { React, useState, useEffect } from "react";
import ReactPlayer from "react-player";
import AdComp from "./AdComp";
import style from "./VideoList.module.css";

function VideoList() {
  const [vidInfo, setvidInfo] = useState();

  useEffect(async () => {
    const pp = await axios.get(
      "https://storage.googleapis.com/publicmaxtap-prod.appspot.com/data/ads_data_assignment.json"
    );
    setvidInfo(pp.data);
  }, []);

  const [showControls, setShowControls] = useState(false);
  const [ad1, setAd1] = useState({ vidId: "", url: "", redirect: "" });
  const [ad2, setAd2] = useState({ vidId: "", url: "", redirect: "" });
  const vidList = ["https://bit.ly/3LKGtzI", "https://bit.ly/3v8ZuGa"];
  //   let vidInfo;

  async function showAd(e, vidId) {
    const time = parseInt(e.playedSeconds);
    const subList = vidInfo.filter((item) => {
      if (item.video_id === vidId) return true;
      else return false;
    });

    if (vidId == "v1") {
      var i;
      for (i = 0; i < subList.length; i++) {
        var item = subList[i];
        if (
          item.ad_start_time <= time ? (item.ad_end_time >= time ? 1 : 0) : 0
        ) {
          console.log("ajshkdkhskfjbsdkjfds");
          let temp = ad1;
          temp.vidId = vidId;
          temp.url = item.ad_image;
          temp.redirect = item.on_click;
          setAd1({ ...temp });
          break;
        } else {
          let temp = ad1;
          temp.vidId = "";
          temp.url = "";
          temp.redirect = "";
          setAd1({ ...temp });
        }
      }
    } else {
      var i;
      for (i = 0; i < subList.length; i++) {
        var item = subList[i];
        if (
          item.ad_start_time <= time ? (item.ad_end_time >= time ? 1 : 0) : 0
        ) {
          console.log("ajshkdkhskfjbsdkjfds");
          let temp = ad2;
          temp.vidId = vidId;
          temp.url = item.ad_image;
          temp.redirect = item.on_click;
          setAd2({ ...temp });
          break;
        } else {
          let temp = ad2;
          temp.vidId = "";
          temp.url = "";
          temp.redirect = "";
          setAd2({ ...temp });
        }
      }
    }
    console.log(time);
    console.log(ad1);
    console.log(ad2);
  }

  return (
    <div className={style.container}>
      <div className={style.video}>
        <ReactPlayer
          className={style.vid}
          url={vidList[0]}
          id={"v1"}
          controls={showControls}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          onProgress={(e) => {
            showAd(e, "v1");
          }}
        />
        {ad1.vidId != "" && <AdComp ad={ad1} />}
      </div>
      <div className={style.video}>
        <ReactPlayer
          className={style.vid}
          url={vidList[1]}
          id={"v2"}
          controls={showControls}
          onClick={() => setShowControls(true)}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          onProgress={(e) => {
            showAd(e, "v2");
          }}
        />
        {ad2.vidId != "" && <AdComp ad={ad2} />}
      </div>
    </div>
  );
}

export default VideoList;
