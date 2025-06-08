import React, { createContext, useState } from 'react';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const adicionarPost = (imagem, descricao) => {
    const novoPost = {
      id: Date.now(),
      imagem,
      descricao,
    };
    setPosts(prev => [novoPost, ...prev]);
  };

  return (
    <PostContext.Provider value={{ posts, adicionarPost }}>
      {children}
    </PostContext.Provider>
  );
};
