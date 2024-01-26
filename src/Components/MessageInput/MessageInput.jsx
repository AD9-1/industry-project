import "./MessageInput.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCamera,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

function MessageInput() {
  return (
    <div className="whatapp-input">
      <FontAwesomeIcon icon={faPlus} className="icon" />
      <input type="text" className="input-field" placeholder="Type a message" />
      <FontAwesomeIcon icon={faCamera} className="icon" />
      <FontAwesomeIcon icon={faMicrophone} className="icon" />
    </div>
  );
}

export default MessageInput;
