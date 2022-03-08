import style from "./App.module.css";
import Scroll from "./components/Horizontal Scroll/Scroll";
import NavBar from "./components/Nav Bar/NavBar";
import SideBar from "./components/sideBar/SideBar";
import VideoList from "./components/Videos/VideoList";

function App() {
  return (
    <div className={style.App}>
      <NavBar />
      {/* <SideBar /> */}
      {/* <div className={style.pp}> */}
        {/* <Scroll /> */}
      {/* </div>  */}
      <VideoList />
    </div>
  );
}

export default App;
