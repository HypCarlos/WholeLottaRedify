import React from "react";
import "../main/main.css";
import COVER from "../../img/cover.jpeg";

function Main() {
  return (
    <div className="main-container">
      <div className="cover-container">
        <div className="cover-img">
          <img id="cover" src={COVER} alt="cover" />
        </div>
      </div>
    </div>
  );
}

export default Main;
