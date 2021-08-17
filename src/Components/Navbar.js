import React from "react";

const Nav = () => {
  return (
    <nav class="bg-white flex justify-between shadow-lg  px-5 py-5">
      <div>
        <a href="/">
          <span class="text-gray-800 text-3xl font-bold">Its12 Giftworld</span>
        </a>
      </div>
      <div class="space-x-10 text-gray-500 font-bold">
        <a href="/" class="text-gray-500 hover:text-gray-900">
          Home
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-900">
          Categories
        </a>
        <a href="/product" class="text-gray-500 hover:text-gray-900">
          Products
        </a>
        <a href="#" class="text-gray-500 hover:text-gray-900">
          Account
        </a>
      </div>
    </nav>
  );
};
export default Nav;
