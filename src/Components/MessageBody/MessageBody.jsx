import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlus,
  faCamera,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import "./MessageBody.scss";
library.add(fas);
const MessageBody = () => {
  return (
    <div className="chat-container">
      <div className="chat">
        <div className="message">
          <div className="text">
            Hello! How are you?<div className="time">10:30 AM</div>
          </div>
        </div>

        <div className="message outgoing">
          <div className="text">
            I'm good, thank you!<div className="time">10:35 AM</div>
          </div>
        </div>
      </div>
      <div className="whatapp-input">
        <FontAwesomeIcon icon={faPlus} className="icon" />
        <input
          type="text"
          className="input-field"
          placeholder="Type a message"
        />
        <FontAwesomeIcon icon={faCamera} className="icon" />
        <FontAwesomeIcon icon={faMicrophone} className="icon" />
      </div>
    </div>
  );
};

export default MessageBody;
