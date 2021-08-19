import React from "react";
import logo from "../res/logo.jpg";
const Nav = () => {
  return (
    <nav class="bg-white flex justify-between items-center shadow-lg  px-5 py-5">
      <div>
        <a href="/">
          <div class="flex items-center space-x-2">
            <img src={logo} width="60px" alt="logo" />
            <span class="text-gray-800 text-3xl font-bold">
              Its12 Giftworld
            </span>
          </div>
        </a>
      </div>
      <div class="space-x-10 text-gray-500 font-bold text-lg">
        <a href="/" class="text-gray-500 hover:text-gray-900">
          Home
        </a>
        <a href="/categories" class="text-gray-500 hover:text-gray-900">
          Categories
        </a>
        <a href="/product" class="text-gray-500 hover:text-gray-900">
          Products
        </a>
        <a href="/pincode" class="text-gray-500 hover:text-gray-900">
          Pincode
        </a>
        <a href="/account" class="text-gray-500 hover:text-gray-900">
          Account
        </a>
      </div>
    </nav>
  );
};
export default Nav;
