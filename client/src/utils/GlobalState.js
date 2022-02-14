import { createContext, useState } from "react";

const [chatRoom, setChatRoom] = useState();


ChatRoomContext = createContext({ chatRoom, setChatRoom });

const ChatRoomContextProvider = ({ children }) => {
  return (
    <ChatRoomContext.Provider value={{ chatRoom, setChatRoom }}>
      {...children}
    </ChatRoomContext.Provider>
  );
};

export { ChatRoomContext, ChatRoomContextProvider };