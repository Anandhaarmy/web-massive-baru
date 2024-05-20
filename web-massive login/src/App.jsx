import React, { useState } from 'react';
import Login from './components/login';
import RegisterForm from './components/registerform';

function App() {
  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    setRegistered(true);
  };

  return (
    <div className="App">
      {registered ? (
        <Login />
      ) : (
        <RegisterForm onRegister={handleRegister} />
      )}
    </div>
  );
}

export default App;
