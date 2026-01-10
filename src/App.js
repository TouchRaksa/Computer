import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import ProductSection from "./components/Productsection";
import Buy from "./components/Buy";
import Contect from "./components/Contect";
import Login from "./components/Login";

import Laptop from "./components/Laptop";
import Mouse from "./components/Mouse";
import Keyboard from "./components/Keyboard";
import Desktop from "./components/Desktop";
import Headphone from "./components/Headphone";
import Search from "./components/Search";

// 🔐 Admin pages
import AddProduct from "./admin/AddProduct";
import AddCategory from "./admin/AddCategory";

function App() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">

        <Navbar
          search={search}
          setSearch={setSearch}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* MAIN CONTENT */}
        <div className="pt-[64px]">
          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ProductSection search={search} />
                </>
              }
            />

            {/* USER PAGES */}
            <Route path="/buy" element={<Buy />} />
            <Route path="/about" element={<Contect />} />
            <Route path="/login" element={<Login />} />

            {/* CATEGORY PAGES */}
            <Route path="/laptop" element={<Laptop search={search} />} />
            <Route path="/mouse" element={<Mouse search={search} />} />
            <Route path="/keyboard" element={<Keyboard search={search} />} />
            <Route path="/desktop" element={<Desktop search={search} />} />
            <Route path="/headphone" element={<Headphone search={search} />} />

            {/* SEARCH */}
            <Route path="/productsearch" element={<Search search={search} />} />

            {/* 🔐 ADMIN ROUTES */}
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/admin/add-category" element={<AddCategory />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
