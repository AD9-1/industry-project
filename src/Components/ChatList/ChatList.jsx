
import React, { useState } from "react";
import "./ChatList.scss";
import { useNavigate } from "react-router-dom";

const ChatList = ({chatRooms}) => {
  const [fontSize, setFontSize] = useState(16); // Initial font size
  const navigate = useNavigate();
  const handleFontSizeChange = (newSize) => {
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`; // Set font size for the root HTML element
  };

  const goToChatRoom = (roomId) => {
    navigate(`/chatroom/${roomId}`);
  };

  return (
    <div className="chat-list-container">
      <div className="w-full mx-auto bg-white shadow-lg rounded-lg ">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">Chats</div>
          <div>
            <label htmlFor="fontSize" className="text-gray-600">
              Adjust Font Size:
            </label>
            <input
              type="range"
              id="fontSize"
              name="fontSize"
              min="12"
              max="32" // You can adjust the max value as needed
              value={fontSize}
              onChange={(e) => handleFontSizeChange(parseInt(e.target.value))}
            />
          </div>
          <div className="text-gray-700" style={{ fontSize: `${fontSize}px` }}>
            <ul className="divide-y divide-gray-200">
              {chatRooms.map((room) => (
                <li
                  key={room.id}
                  className="py-4 flex items-center justify-between cursor-pointer hover:bg-gray-100"
                  onClick={() =>
                    goToChatRoom(room.id)
                  }
                >
                  <div className="flex items-center">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={room.imageUrl}
                      alt="Profile picture"
                    />
                    <div className="ml-3">
                      <p className="text-lg font-medium text-gray-900">
                        {room.name}
                      </p>
                      <p className="text-lg text-gray-500">
                        {room.lastMessage}
                      </p>
                    </div>
                  </div>
                  <div>
                    <span className="text-lg text-gray-500">{room.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
