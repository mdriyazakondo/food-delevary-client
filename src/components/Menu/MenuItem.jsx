import React, { useEffect, useState } from "react";
import Category from "../Home/Category";

const MenuItem = () => {
  const [menus, setMenus] = useState([]);
  const [filteredMenus, setFilteredMenus] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("salad");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("/data/menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data))
      .catch((error) => console.error("Error loading menu:", error));
  }, []);

  useEffect(() => {
    let filtered = menus.filter((item) => item.category === selectedCategory);

    if (sortOrder === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredMenus(filtered);
  }, [menus, selectedCategory, sortOrder]);

  const categories = [...new Set(menus.map((item) => item.category))];

  return (
    <section className="max-w-[1500px] mx-auto my-4 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Menu</h2>

      <div className="flex justify-between items-center flex-wrap mb-6 gap-4">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === cat
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border-2 border-blue-600 px-3 py-2 rounded-md"
        >
          <option value="">Sort By Price</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
        </select>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMenus.length > 0 ? (
          filteredMenus.map((item) => <Category key={item._id} item={item} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No menu items found.
          </p>
        )}
      </div>
    </section>
  );
};

export default MenuItem;
