import "./App.css";
import ChatList from "./Components/ChatList/ChatList";
import Header from "./Components/Header/Header";
import MessageInput from "./Components/MessageInput/MessageInput";

function App() {
  return (
    <div className="App">
      <ChatList />
      <div className="bottom-bar">
        <button className="voice-assistant-button">
          <i className="fas fa-microphone"></i> Voice Assistant
        </button>
      </div>
    </div>
  );
}

export default App;
