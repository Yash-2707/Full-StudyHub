import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="p-5 flex justify-between items-center text-[#3fcaca] bg-[rgb(26, 20, 20)] border-b-2 border-[#3fcaca]">
      <div className="logo font-extrabold text-3xl drop-shadow-[0_0_5px_rgba(63,202,202,0.75)] ml-10">
        Study <span className="text-red-600 drop-shadow-[0_0_5px_rgba(255,0,0,0.75)]">Hub</span>
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex space-x-6 text-xl ml-10 gap-10">
          <li>
            <Link
              to="/"
              className="hover:text-red-500 drop-shadow-[0_0_5px_rgba(63,202,202,0.75)]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/material"
              className="hover:text-red-500 drop-shadow-[0_0_5px_rgba(63,202,202,0.75)]"
            >
              Material
            </Link>
          </li>
          <li>
            <Link
              to="/community"
              className="hover:text-red-500 drop-shadow-[0_0_5px_rgba(63,202,202,0.75)]"
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              to="/roadmaps"
              className="hover:text-red-500 drop-shadow-[0_0_5px_rgba(63,202,202,0.75)]"
            >
              Roadmaps
            </Link>
          </li>
        </ul>
      </div>

      {/* Login/Sign-In Buttons */}
      <div className="space-x-4 pr-8">
        <Link to="/signin">
          <button className="p-2 bg-[#4285f4] text-black hover:bg-[#357ae8] transition duration-300 shadow-[0_0_10px_rgba(0,0,255,0.6)] rounded-2xl">
            SignIn
          </button>
        </Link>
        <Link to="/login">
          <button className="p-2 bg-[#4caf50] text-black hover:bg-[#388e3c] transition duration-300 shadow-[0_0_10px_rgba(0,255,0,0.6)] rounded-2xl">
            Login

        
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
