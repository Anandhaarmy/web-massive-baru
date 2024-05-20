import React, { useState } from 'react';
import logo from './assets/logo.png'; // Import the logo image
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const [isLogin, setIsLogin] = useState(true); // State to track if it's login form or register form

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center">
      <div className="mb-6 text-center">
        <img src={logo} alt="KostCozy Logo" className="mx-auto h-32 w-auto" />
        <h1 className="text-5xl font-bold mt-4 text-orange-500">Welcome to KostCozy</h1>
        <p className="text-gray-700">Please enter your email, we'll send you OTP on your email address</p>
      </div>
      {isLogin ? (
        <LoginForm setIsLogin={setIsLogin} />
      ) : (
        <RegisterForm setIsLogin={setIsLogin} />
      )}
    </div>
  );
}

export default App;
