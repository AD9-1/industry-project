import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./MessageBody.scss";
import MessageInput from "../MessageInput/MessageInput";
library.add(fas);
const MessageBody = ({roomLastMessage}) => {
  return (
    <div className="chat-container">
      <div className="chat">
        <div className="message">
          <div className="text">
            {roomLastMessage}<div className="time">10:30 AM</div>
          </div>
        </div>

        <div className="message outgoing">
          <div className="text">
            I'm good, thank you!<div className="time">10:35 AM</div>
          </div>
        </div>
      </div>
      <MessageInput />
    </div>
  );
};

export default MessageBody;
