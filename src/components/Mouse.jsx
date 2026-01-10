import { useNavigate } from "react-router-dom";
import { useState } from "react";
import mouse_image from "../assets/Image/Mouse";
import Footer from "./Footer";

function Mouse({ search = "" }) {
  const navigate = useNavigate();

  const productNames = [
    "Logitech MX Master 3",
    "Razer DeathAdder V2",
    "Corsair Dark Core RGB",
    "SteelSeries Rival 3",
    "Logitech G502 Hero",
    "Microsoft Surface Mouse",
    "HP X4000b Bluetooth Mouse",
    "Apple Magic Mouse 2",
    "Roccat Kone Pro",
    "Logitech M185",
    "Glorious Model O",
    "BenQ Zowie EC2",
  ];

  const productPrices = [100, 70, 80, 50, 80, 60, 40, 110, 90, 20, 50, 70];

  const productDetails = [
    "High-precision wireless mouse with ergonomic design.",
    "Gaming mouse with fast response and high DPI.",
    "RGB gaming mouse with wireless charging support.",
    "Lightweight mouse for esports performance.",
    "Advanced gaming mouse with customizable buttons.",
    "Slim Bluetooth mouse for daily use.",
    "Compact wireless mouse with long battery life.",
    "Apple multi-touch mouse with sleek design.",
    "Ultra-light gaming mouse with optical sensor.",
    "Affordable wireless mouse for office use.",
    "Honeycomb lightweight gaming mouse.",
    "Professional esports mouse with precision tracking.",
  ];

  const minLength = Math.min(
    mouse_image.length,
    productNames.length,
    productPrices.length
  );

  const products = mouse_image.slice(0, minLength).map((img, index) => ({
    name: productNames[index],
    price: productPrices[index],
    detail: productDetails[index] || "No product details available.",
    image: img,
    category: "mouse",
  }));

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

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
            <p className="col-span-full text-center text-xl text-gray-500">
              No mouse found
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Mouse;
