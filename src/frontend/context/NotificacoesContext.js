import React, { createContext, useState, useContext } from 'react';

const NotificacoesContext = createContext();

export const NotificacoesProvider = ({ children }) => {
  const [notificacoes, setNotificacoes] = useState([
    { id: '1', text: 'Bem-vindo ao Green!', expanded: false },
  ]);

  const adicionarNotificacao = (text) => {
    const novaNotificacao = {
      id: Date.now().toString(),
      text,
      expanded: false,
    };
    setNotificacoes((prev) => [novaNotificacao, ...prev]);
  };

  return (
    <NotificacoesContext.Provider value={{ notificacoes, adicionarNotificacao }}>
      {children}
    </NotificacoesContext.Provider>
  );
};

export const useNotificacoes = () => useContext(NotificacoesContext);
