import React from 'react';
import googleIcon from '../assets/google-icon.png';
import facebookIcon from '../assets/facebook-icon.png';

function LoginForm({ setIsLogin }) {
  return (
    <div className="bg-white p-8 rounded shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Login Pencari Kost</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Masukan email anda
          </label>
          <div className="mt-1">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Masukan password anda
          </label>
          <div className="mt-1">
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
        </div>
        <div>
          <button type="submit" className="w-full py-2 bg-yellow-500 text-white font-bold rounded">
            Sign In
          </button>
        </div>
      </form>
      <p className="mt-4 text-center">
        Don't have an account? <a href="#" onClick={() => setIsLogin(false)} className="text-blue-500 hover:underline">Sign Up</a>
      </p>
      <div className="mt-4 flex justify-center items-center space-x-4">
        <p>Or login using</p>
        <div className="flex space-x-4">
          <a href="#">
            <img src={googleIcon} alt="Google" className="w-8 h-8" />
          </a>
          <a href="#">
            <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
