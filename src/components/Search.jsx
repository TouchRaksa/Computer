import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import Footer from "./Footer";

function Search({ search = "" }) {
  const navigate = useNavigate();

  const products = useMemo(() => {
    return JSON.parse(sessionStorage.getItem("products")) || [];
  }, []);

  const filtered = search.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase()) ||
          p.price.toString().includes(search)
      )
    : products;

  return (
    <div>
      <div className="bg-gray-200 dark:bg-gray-900 py-10 px-5 mt[-20px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.length ? (
            filtered.map((p, i) => (
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
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-xl">
              No products found
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
