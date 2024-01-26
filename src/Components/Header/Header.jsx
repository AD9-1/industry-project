import React from "react";
import "./Header.scss";
import cameraIcon from "../../assets/video-solid.svg";
import callIcon from "../../assets/phone-solid.svg";
import backarrow from "../../assets/arrow-left-solid.svg";
const Header = () => {
  return (
    <div className="wa-header">
      <div className="wa-header__back">
        <img src={backarrow}/>
      </div>
      <div className="wa-header__image"></div>
      <div className="wa-header__info">
        <div className="wa-header__info__name">
          <p>Jayme</p>
        </div>
        <div className="wa-header__info__time"><p>Last seen 3:58pm</p></div>
      </div>

      <div className="wa-header__icons">
        <img className="wa-header__icons__video" src={cameraIcon}></img>
      </div>

      <div className="wa-header__icons">
        <img className="wa-header__icons__call"src={callIcon}></img>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
