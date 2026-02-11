import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {" "}
      <div className=" px-10 py-2 text-xl bg-(--c2) flex justify-between items-center">
        <Link to="/" className="font-semibold font-2xl">
          Media Search
        </Link>
        <div className="flex gap-5  items-center">
          <Link
            className="text-base font-medium bg-(--c4) text-(--c1) px-4 py-2 rounded"
            to="/"
          >
            Search
          </Link>
          <Link
            className="text-base font-medium bg-(--c4) text-(--c1) px-4 py-2 rounded"
            to="/collection"
          >
            Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
