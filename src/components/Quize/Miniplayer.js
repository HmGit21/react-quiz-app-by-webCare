import React from "react";
import img from "../../Images/web design.jpg"

const Miniplayer = () => {
  return (
    <div class="miniPlayer floatingBtn">
      <span class="material-icons-outlined open"> play_circle_filled </span>
      <span class="material-icons-outlined close"> close </span>
      <img src={img} alt="" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
};

export default Miniplayer;
