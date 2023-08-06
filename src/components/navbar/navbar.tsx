import React from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import CartAndAccount from "./cartAndAccount";
import Categories from "./categories";

const Navbar = () => {
  return (
    <div className="bg-white flex">
      <div className="p-3 w-1/4">
        <Logo />
      </div>

      <div className="p-3 w-1/2">
        <SearchBar />
        <Categories />
      </div>
      <div className="p-3 w-1/4">
        <CartAndAccount />
      </div>
    </div>
  );
};

export default Navbar;
