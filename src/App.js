import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatList from "./Components/ChatList/ChatList";
import ChatRoom from "./Components/ChatRoom/ChatRoom";
<<<<<<< HEAD
import VoiceAssistantBar from "./Components/VoiceAssistantBar/VoiceAssistantBar.jsx";
=======
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
>>>>>>> b81828beca4d4bd884aba43950c7cb5686a98310

function App() {
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
  ];
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUpPage/>}/>
          <Route path="/chat" element={<ChatList chatRooms={chatRooms} />} />
          <Route
            path="/chatroom/:roomId"
            element={<ChatRoom chatRooms={chatRooms} />}
          />
        </Routes>
      </BrowserRouter>
      <VoiceAssistantBar/>
    </div>
  );
}

export default App;
