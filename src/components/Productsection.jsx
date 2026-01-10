import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import Footer from "./Footer";

import laptop_images from "../assets/Image/Laptop";
import { desktop_images } from "../assets/Image/Desktop";
import headphone_images from "../assets/Image/Headphone";
import keyboard_images from "../assets/Image/Keyboard";
import mouse_images from "../assets/Image/Mouse";

const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

function ProductSection() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const allProducts = useMemo(() => {
    return [
      ...laptop_images.map((img, i) => ({
        name: `Laptop ${i + 1}`,
        price: 500 + i * 50,
        image: img,
        category: "Laptop",
      })),
      ...desktop_images.map((img, i) => ({
        name: `Desktop ${i + 1}`,
        price: 250 + i * 20,
        image: img,
        category: "Desktop",
      })),
      ...headphone_images.map((img, i) => ({
        name: `Headphone ${i + 1}`,
        price: 25,
        image: img,
        category: "Headphone",
      })),
      ...keyboard_images.map((img, i) => ({
        name: `Keyboard ${i + 1}`,
        price: 50,
        image: img,
        category: "Keyboard",
      })),
      ...mouse_images.map((img, i) => ({
        name: `Mouse ${i + 1}`,
        price: 20,
        image: img,
        category: "Mouse",
      })),
    ];
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("products");
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      const random = shuffle(allProducts);
      sessionStorage.setItem("products", JSON.stringify(random));
      setProducts(random);
    }
  }, [allProducts]);

  return (
    <div>
      <div className="bg-gray-200 dark:bg-gray-900 py-10 px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              onClick={() => navigate("/buy", { state: p })}
              className="bg-white dark:bg-gray-700 rounded-lg shadow hover:scale-105 transition cursor-pointer"
            >
              <div className="p-4 flex justify-center">
                <img src={p.image} className="max-h-[180px] object-contain" />
              </div>
              {/* Product info */}
              <div className="px-4 pb-2 flex-1">
                <h3 className="text-sm sm:text-base font-semibold truncate">
                  {p.category}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                  Price: ${p.price}
                </p>
                <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded text-sm">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductSection;
