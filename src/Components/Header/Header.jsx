import React from "react";
import "./Header.scss";
import cameraIcon from "../../assets/video-solid.svg";
import callIcon from "../../assets/phone-solid.svg";
import backarrow from "../../assets/arrow-left-solid.svg";
import { SlOptionsVertical } from "react-icons/sl";
import { NavLink } from "react-router-dom";
const Header = ({ roomName, roomAvatar }) => {
  return (
    <div className="wa-header">
      <div className="wa-header__back">
        <NavLink to="/chat">
          <img src={backarrow} />
        </NavLink>
      </div>
      <div className="wa-header__image"><img src={roomAvatar}/></div>
      <div className="wa-header__info">
        <div className="wa-header__info__name">
          <p>{roomName}</p>
        </div>
        <div className="wa-header__info__time">
          <p>Last seen 3:58 pm</p>
        </div>
      </div>

      <div className="wa-header__icons">
        <img className="wa-header__icons__video" src={cameraIcon}></img>
      </div>

      <div className="wa-header__icons">
        <img className="wa-header__icons__call" src={callIcon}></img>
      </div>
      <div className="wa-header__icons option">
        <SlOptionsVertical size={35} />
      </div>
    </div>
  );
};

export default Header;
