import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Nivas Khoj</Link>
        </span>
        <span className="flex space-x-2">
          <Link
            to="/sign-in"
            className="flex items-center text-cyan-600 px-3 py-2 font-bold bg-white rounded hover:bg-gray-100 hover:text-green-500"
          >
            //new changes have been commited
            SIGN IN
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
