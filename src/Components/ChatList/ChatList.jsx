/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import "./ChatList.scss"

const ChatList = () => {
  const [fontSize, setFontSize] = useState(16); // Initial font size

  const handleFontSizeChange = (newSize) => {
    
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`; // Set font size for the root HTML element
  };

  const chatRooms = [
    {
      id: "1",
      name: "Chat Room 1",
      imageUrl: "https://unsplash.it/100/100?image=1005",
      lastMessage: "Hello, how are you?",
      time: "10 mins ago",
    },
    {
      id: "2",
      name: "Chat Room 2",
      imageUrl: "https://unsplash.it/100/100?image=1020",
      lastMessage: "Meeting tomorrow at 10",
      time: "1 hour ago",
    },
    {
      id: "3",
      name: "Chat Room 3",
      imageUrl: "https://unsplash.it/100/100?image=1045",
      lastMessage: "Great job on the project!",
      time: "2 hours ago",
    },
    {
        id: "4",
        name: "Chat Room 1",
        imageUrl: "https://unsplash.it/100/100?image=1005",
        lastMessage: "Hello, how are you?",
        time: "10 mins ago",
      },
      {
        id: "5",
        name: "Chat Room 2",
        imageUrl: "https://unsplash.it/100/100?image=1020",
        lastMessage: "Meeting tomorrow at 10",
        time: "1 hour ago",
      },
      {
        id: "6",
        name: "Chat Room 3",
        imageUrl: "https://unsplash.it/100/100?image=1045",
        lastMessage: "Great job on the project!",
        time: "2 hours ago",
      },
      {
        id: "7",
        name: "Family Chat",
        imageUrl: "https://unsplash.it/100/100?image=1050",
        lastMessage: "Planning a family gathering",
        time: "3 hours ago",
      },
      {
        id: "8",
        name: "Sister's Chat",
        imageUrl: "https://unsplash.it/100/100?image=1060",
        lastMessage: "How's school going?",
        time: "1 day ago",
      },
      {
        id: "2",
        name: "Chat Room 2",
        imageUrl: "https://unsplash.it/100/100?image=1020",
        lastMessage: "Meeting tomorrow at 10",
        time: "1 hour ago",
      },
      {
        id: "3",
        name: "Chat Room 3",
        imageUrl: "https://unsplash.it/100/100?image=1045",
        lastMessage: "Great job on the project!",
        time: "2 hours ago",
      },
      {
          id: "4",
          name: "Chat Room 1",
          imageUrl: "https://unsplash.it/100/100?image=1005",
          lastMessage: "Hello, how are you?",
          time: "10 mins ago",
        },
        {
          id: "5",
          name: "Chat Room 2",
          imageUrl: "https://unsplash.it/100/100?image=1020",
          lastMessage: "Meeting tomorrow at 10",
          time: "1 hour ago",
        },
        {
          id: "6",
          name: "Chat Room 3",
          imageUrl: "https://unsplash.it/100/100?image=1045",
          lastMessage: "Great job on the project!",
          time: "2 hours ago",
        },
        {
          id: "7",
          name: "Family Chat",
          imageUrl: "https://unsplash.it/100/100?image=1050",
          lastMessage: "Planning a family gathering",
          time: "3 hours ago",
        },
        {
          id: "8",
          name: "Sister's Chat",
          imageUrl: "https://unsplash.it/100/100?image=1060",
          lastMessage: "How's school going?",
          time: "1 day ago",
        }
  ];

  // Example function to handle going to a chat room
  const goToChatRoom = (roomId) => {
    console.log(`Going to room: ${roomId}`);
    // Implement navigation logic here
  };

  return (
    <div className="chat-list-container">
      <div className="w-full mx-auto bg-white shadow-lg rounded-lg ">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2">Chats</div>
          <div>
            <label htmlFor="fontSize" className="text-gray-600">Adjust Font Size:</label>
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
                <li key={room.id} className="py-4 flex items-center justify-between cursor-pointer hover:bg-gray-100" onClick={() => goToChatRoom(room.id)}>
                  <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full" src={room.imageUrl} alt="Profile picture"/>
                    <div className="ml-3">
                      <p className="text-lg font-medium text-gray-900">{room.name}</p> 
                      <p className="text-lg text-gray-500">{room.lastMessage}</p> 
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
