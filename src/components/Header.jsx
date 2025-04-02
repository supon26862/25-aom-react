import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col">
      <nav className="border-b-2 p-6">
        <ul className="flex gap-4 justify-end font-bold text-xl">
          <li>
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Owner" className="">
              Owner
            </Link>
          </li>
        </ul>
      </nav>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
