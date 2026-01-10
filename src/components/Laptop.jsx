import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import laptop_image from "../assets/Image/Laptop";
import Footer from "./Footer";

function Laptop({ search = "" }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLaptopPage = location.pathname === "/laptop";

  // Build products
  const products = laptop_image.map((img, index) => ({
    name: `Laptop ${index + 1}`,
    price: 500 + index * 50,
    image: img,
    category: "laptop",
    detail:
      "High performance laptop suitable for work, study, and gaming. Durable design with long battery life.",
  }));

  const filteredProducts = isLaptopPage
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  return (
    <div>
      <div className="w-full bg-gray-200 dark:bg-gray-900 text-black dark:text-white py-10 px-5 mt-[-20px] transition-colors">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filteredProducts.map((product, index) => (
            <div
              key={index}
              onClick={() =>
                navigate("/buy", {
                  state: {
                    image: product.image,
                    name: product.name,
                    price: product.price,
                    detail: product.detail,
                  },
                })
              }
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:scale-105 transition-transform flex flex-col cursor-pointer"
            >
              {/* Image */}
              <div className="w-full flex justify-center items-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto max-h-[200px] object-contain"
                />
              </div>

              {/* Product info */}
              <div className="px-4 pb-2 flex-1">
                <h3 className="text-sm sm:text-base font-semibold truncate">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Price: ${product.price}
                </p>
              </div>

              {/* Button */}
              <div className="px-4 pb-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/buy", {
                      state: {
                        image: product.image,
                        name: product.name,
                        price: product.price,
                        detail: product.detail,
                      },
                    });
                  }}
                  className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-800 text-xs sm:text-sm w-full"
                >
                  Details
                </button>
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <p className="col-span-full text-center text-gray-500 text-xl">
              No laptops found
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Laptop;
