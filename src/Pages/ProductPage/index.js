import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Static list of possible products
const products = [
  { id: 1111, name: "Card" },
  { id: 2222, name: "Coffee Mug" },
  { id: 3333, name: "Flower Pot" },
];

const Product = () => {
  return (
    <div>
      <main>
        <div class="place-content-center" className="Main content">
          <span class="mx-10 my-10 text-gray-500">This is product!</span>
        </div>
        <div>
          {products.map((product) => (
            <p>
              <Link to={`product/${product.id}`}>{product.name}</Link>
            </p>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Product;
