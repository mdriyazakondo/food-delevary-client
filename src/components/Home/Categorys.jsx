import React, { useEffect, useState } from "react";
import Category from "./Category";

const Categorys = () => {
  const [menus, setMenus] = useState([]);
  const [filteredMenus, setFilteredMenus] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("salad");

  // Fetch menu data
  useEffect(() => {
    fetch("/data/menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data))
      .catch((error) => console.error("Error loading menu:", error));
  }, []);

  // Filter menus when selectedCategory changes
  useEffect(() => {
    const filtered = menus.filter((item) => item.category === selectedCategory);
    setFilteredMenus(filtered);
  }, [menus, selectedCategory]);

  // Get unique categories for buttons
  const categories = [...new Set(menus.map((item) => item.category))];

  return (
    <section className="max-w-[1500px] mx-auto my-16 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Menu</h2>

      {/* Category Buttons */}
      <div className="flex justify-start flex-wrap gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 cursor-pointer py-2 rounded-full font-medium transition-colors ${
              selectedCategory === cat
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMenus.slice(0, 6).map((item) => (
          <Category key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Categorys;
