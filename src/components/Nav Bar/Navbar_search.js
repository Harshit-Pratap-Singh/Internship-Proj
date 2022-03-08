import React, { useState } from "react";
import style from "./Navbar_search.module.css";
import searchIcon from "../../Assests/search.png";
import jsonpAdapter from "axios-jsonp";
import axios from "axios";

function Navbar_search() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const [isFocus, setFocus] = useState(false);

  const handleChange = (e) => {
    setItem(e.target.value);

    suggest(e.target.value).then((items) => {
      if (item == "" || item == null) setItems([]);
      else setItems(items);
    });
  };

  const toggleFocus = () => {
    setFocus(!isFocus);
  };

  return (
    <div className={style.container}>
      <div className={style.searchInput}>
        <input
          type="text"
          className={style.searchInput}
          value={item}
          onChange={handleChange}
          placeholder="Search"
          onFocus={toggleFocus}
          onBlur={toggleFocus}
        />
        <div
          className={`${style.suggestionContainer} ${
            items.length > 0 && isFocus && style.enable
          }`}
        >
          {items.map((item, id) => {
            return <SearchContainer id={id} item={item} />;
          })}
        </div>
      </div>
      <div className={style.searchButton}>
        <img src={searchIcon} alt="searchButton" />
      </div>
    </div>
  );
}

function SearchContainer({ id, item }) {
  return (
    <div className={style.searchItem} key={id} id={id}>
      <span>{item}</span>
    </div>
  );
}

export const suggest = (term) => {
  const GOOGLE_AC_URL = `https://clients1.google.com/complete/search`;
  return axios({
    // A YT undocumented API for auto suggest search queries
    url: GOOGLE_AC_URL,
    adapter: jsonpAdapter,
    params: {
      client: "youtube",
      hl: "en",
      ds: "yt",
      q: term,
    },
  }).then((res) => {
    console.log("jsonp results >> ", res);
    if (res.status !== 200) {
      throw Error("Suggest API not 200!");
    }
    return res.data[1].map((item) => item[0]);
  });
};

export default Navbar_search;
