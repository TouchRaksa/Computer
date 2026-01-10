import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

function Detail() {
  const location = useLocation();
  const { image, name, price } = location.state || {}; // get data from navigate state
  const [rating, setRating] = useState(0);

  if (!image || !name || !price) {
    return <p className="text-center mt-20 text-xl">No product details found!</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img src={image} alt={name} className="w-full h-auto object-contain rounded-lg shadow-lg" />
        </div>

        <div className="md:w-1/2 flex flex-col justify-between">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <p className="text-2xl text-blue-600 mb-4">Price: ${price}</p>

          <div className="flex items-center mb-4 space-x-1">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className={`cursor-pointer ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                onClick={() => setRating(i + 1)}
              />
            ))}
          </div>

          <p className="mb-6">
            This is a detailed description of <strong>{name}</strong>. You can add more info here, like specifications, features, or warranty.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-800">
            Add to Cart
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Detail;
