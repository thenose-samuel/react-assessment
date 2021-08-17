import React from "react";
import Products from "./index";
//Static list of possible products
const products = [
  {
    id: 1111,
    name: "Card",
    description:
      "Present your beloved one with lots of love and laughter on their birthday with a Birthday Greeting Card. Spread the happiness and love in their life on their special day.",
    },
  {
    id: 2222,
    name: "Coffee Mug",
    description:
      "This product is designed keeping in mind of traditional clay cups with latest design twist. It is designed so that you can have a good grip while sipping green tea, tea, coffee, soup or hot cocoa.",
    },
  {
    id: 3333,
    name: "Flower Pot",
    description:
      "Light in weight, easily stock-able, with large drain holes and are cost effective for the grower.",
    },
];

const ProductDetails = ({ match }) => {
  let description = "Select a product to view description";
  for (let i = 0; i < products.length; ++i) {
    if (products[i].id == match.params.id) description = products[i].description;
  }
  return (
    <div>
      <main>
        <span>{description}</span>
      </main>
    </div>
  );
};
export default ProductDetails;
