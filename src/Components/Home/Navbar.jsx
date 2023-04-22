import { useState } from "react";
import { logout } from "../Auth";
import { Link } from "react-router-dom";
import { searchResults } from "../../Fetch";

const Navbar = ({ isLoggedIn, setGifs, searchText, setSearchText }) => {
  const handleSearch = async (e) => {
    e.preventDefault();
    if (e.key == "Enter") {
      await searchResults(setGifs, searchText, 0);
    }
  };

  return (
    <div className="flex flex-wrap place-items-center justify-between bg-sky-900 text-white w-screen px-5 xl:px-12 py-6 items-center">
      {/* search bar */}
      <p className="text-2xl">Giphy</p>

      <div className="lg:flex hidden items-center space-x-1 bg-white py-1 px-2 rounded w-1/4 h-9">
        <input
          disabled={!isLoggedIn}
          className="outline-none text-black"
          type="text"
          placeholder={isLoggedIn ? "Search" : "Login to search"}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={handleSearch}
        />
      </div>

      {/* Login button */}
      <div className="hidden xl:flex items-center space-x-5 items-center">
        {isLoggedIn ? (
          <button
            onClick={logout}
            className="bg-white text-black active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button
              component={Link}
              to="/login"
              className="bg-white text-black active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            >
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
