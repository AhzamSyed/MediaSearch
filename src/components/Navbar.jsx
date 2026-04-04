import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-c2 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="font-semibold text-2xl text-c4 hover:text-c3 transition"
        >
          Media Search
        </Link>
        <div className="flex gap-5 items-center">
          <Link
            className="text-base font-medium text-c4 px-4 py-2 rounded hover:bg-c3 transition"
            to="/"
          >
            Search
          </Link>
          <Link
            className="text-base font-medium text-c4 px-4 py-2 rounded hover:bg-c3 transition"
            to="/collection"
          >
            Collection
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
