
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
        <div class="flex justify-around items-center mt-20 h-full w-full">
          <div class="flex-col items-center">
            <span class="uppercase text-bold text-2xl text-gray-500">
              Here is a list of a few products:
            </span>
          <div class="space-y-8 mt-5 uppercase text-blue-600">
            {products.map((product) => (
              <p>
                <Link to={`product/${product.id}`}>{product.name}</Link>
              </p>
            ))}
          </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
