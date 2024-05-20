import React from 'react';

function RegisterForm({ setIsLogin }) {
  return (
    <div className="bg-white p-8 rounded shadow-lg w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Register Pencari Kost</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Masukan nama anda
          </label>
          <div className="mt-1">
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>
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
        <div>
          <button type="submit" className="w-full py-2 bg-yellow-500 text-white font-bold rounded">
            Register
          </button>
        </div>
      </form>
      <p className="mt-4 text-center">
        Already have an account? <a href="#" onClick={() => setIsLogin(true)} className="text-blue-500 hover:underline">Login</a>
      </p>
    </div>
  );
}

export default RegisterForm;
