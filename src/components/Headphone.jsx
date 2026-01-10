import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import headphone_image from "../assets/Image/Headphone";
import Footer from "./Footer";

function Headphone({ search = "" }) {
  const navigate = useNavigate();

  // Build products array with details
  const products = headphone_image.map((img, index) => ({
    name: `Headphone ${index + 1}`,
    price: 25,
    image: img,
    category: "headphone",
    detail: `High-quality Headphone ${index + 1} with crisp sound and comfortable fit.`,
  }));

  const [ratings, setRatings] = useState(Array(products.length).fill(0));

  const handleRating = (index, value) => {
    const updated = [...ratings];
    updated[index] = value;
    setRatings(updated);
  };

  // Filter products by search
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="w-full bg-gray-200 dark:bg-gray-900 text-black dark:text-white py-10 px-5 transition-colors rounded">
        <div className="mb-[-20px] mt-[-40px] pb-6 pt-6">
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
                  <h3 className="text-sm sm:text-base font-semibold truncate dark:text-gray-100">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Price: ${product.price}
                  </p>
                </div>

                {/* Button & Stars */}
                <div className="flex items-center justify-between px-4 pb-4 pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent double click
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
                No headphones found
              </p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Headphone;
