import React, { useContext, useState } from "react";
import style from "./Scroll.module.css";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import arrow from "../../Assests/next.png";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function Scroll() {
  const [items, setItems] = useState(getItems);
  const [selected, setSelected] = useState("element-0");
  const [position, setPosition] = useState(0);

  const isItemSelected = (id) => id == selected;

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      console.log(selected);
      setSelected(id);
    };

  return (
    <div className={style.container}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {items.map(({ id }) => (
          <Card
            itemId={id} // NOTE: itemId is required for track items
            title={id}
            key={id}
            onClick={handleClick(id)}
            selected={selected}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <div
      onClick={() => scrollPrev()}
      className={`${style.scrollButton} ${
        isFirstItemVisible && style.disable
      } ${style.left}`}
    >
      <img src={arrow} alt="Left Button" />
    </div>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <div
      onClick={() => scrollNext()}
      className={`${style.scrollButton} ${isLastItemVisible && style.disable} ${
        style.right
      }`}
    >
      <img src={arrow} alt="Right Button" />
    </div>
  );
}

function Card({ onClick, selected, title, itemId }) {
  const visibility = useContext(VisibilityContext);
  //   console.log(selected);
  return (
    <button
      onClick={() => onClick(visibility)}
      className={`${style.card}  ${itemId === selected && style.selected}`}
    >
      {title}
    </button>
  );
}

export default Scroll;
