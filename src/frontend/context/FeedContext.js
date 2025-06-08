// src/context/FeedContext.js
import React, { createContext, useState } from 'react';

export const FeedContext = createContext();

export const FeedProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  return (
    <FeedContext.Provider>
      {children}
    </FeedContext.Provider>
  );
};
