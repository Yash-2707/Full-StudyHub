import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      if (data.success) {
        console.log("Signup successful:", data.accessToken);
        navigate('/login');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative max-w-lg p-6 rounded-3xl shadow-xl border-2 border-[#3fcaca] glow-effect">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSignup} className="flex flex-col items-center">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4 w-full">
            <label className="block text-gray-200 text-sm font-medium mb-2">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#3fcaca] rounded-lg text-black bg-gray-100 focus:outline-none focus:border-[#3fcaca] transition-colors"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-200 text-sm font-medium mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#3fcaca] rounded-lg text-black bg-gray-100 focus:outline-none focus:border-[#3fcaca] transition-colors"
              required
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-200 text-sm font-medium mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border-2 border-[#3fcaca] rounded-lg text-black bg-gray-100 focus:outline-none focus:border-[#3fcaca] transition-colors"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-[#3fcaca] text-white rounded-lg hover:bg-[#2f9d9d] transition-colors"
          >
            Sign Up
          </button>
          <a href="#" className="mt-3 text-sm text-gray-400 hover:text-gray-300">
            Already have an account? Login here.
          </a>
        </form>
      </div>
    </div>
  )
}

export default SignIn;
