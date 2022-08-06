import React from 'react';
import ContactContextProvider from './ContactContext';
import MainRoutes from './components/routes/MainRoutes';

const App = () => {

  return (
    <ContactContextProvider>
      <MainRoutes />
    </ContactContextProvider>
  );
};

export default App;