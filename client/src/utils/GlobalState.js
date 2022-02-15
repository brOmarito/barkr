import React, { createContext, useContext, useState } from 'react';

const ChatRoomContext = createContext();

export const useChatRoomContext = () => useContext(ChatRoomContext);

export const ChatRoomProvider = ({ children }) => {
  const [chatRoom, setChatRoom] = useState()

  const changeRoom = (roomId) => {

    setChatRoom(roomId);
    localStorage.setItem('CurrentChatRoom', roomId)
  };

  const getRoom = () => {
    const currentRoom = localStorage.getItem('CurrentChatRoom')
    setChatRoom(currentRoom)
  }

  const defaultroom = 'testroom'

  return (
    <ChatRoomContext.Provider
      value={{ chatRoom, changeRoom, getRoom, defaultroom }}
    >
      {children}
    </ChatRoomContext.Provider>
  );
};
