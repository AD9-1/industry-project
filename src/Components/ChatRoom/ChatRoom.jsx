import React from "react";
import MessageBody from "../MessageBody/MessageBody";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";

const ChatRoom = ({ chatRooms }) => {
  const { roomId } = useParams();
  const singleChat = chatRooms.filter((room) => room.id === roomId);
  console.log(singleChat[0]);
  return (
    <div>
      <Header
        roomName={singleChat[0].name}
        roomAvatar={singleChat[0].imageUrl}
      />
      <MessageBody roomLastMessage={singleChat[0].lastMessage} />
    </div>
  );
};

export default ChatRoom;
