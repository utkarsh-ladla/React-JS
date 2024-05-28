import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-900 flex items-center justify-between px-4 py-2">
      <div className="text-xl font-bold text-white">asos</div>
      <ul className="flex space-x-8">
        <li className="text-gray-300 hover:text-white">WOMEN</li>
        <li className="text-gray-300 hover:text-white">MEN</li>
        <li className="relative">
          <input
            type="text"
            placeholder="Search for items and brands"
            className="bg-gray-800 rounded-md pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 w-full"
          />
          <svg
            className="absolute right-3 top-3 w-5 h-5 text-gray-300 hover:text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </li>
        <li className="text-gray-300 hover:text-white">Q</li>
      </ul>
    </nav>
  );
}

export default Navbar;
