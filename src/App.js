import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoutesApp from './routes/RoutesApp';
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <ToastContainer autoClose={3000} />
          <RoutesApp />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
