import { MdOutlineStarBorder } from "react-icons/md";

const Category = ({ item }) => {
  return (
    <div key={item._id} className="bg-white rounded-lg shadow-md p-4  group">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover  mb-4 group-hover:scale-105 transition-transform duration-300"
      />
      <div className="flex items-center justify-between my-3">
        <h3 className="text-xl font-bold  text-gray-700">{item.name}</h3>
        <p className="px-5 py-1 bg-blue-100 text-blue-600 rounded-full font-medium uppercase">
          {item.category}
        </p>
      </div>
      <p className="text-gray-500 mt-1">{item.recipe.slice(0, 110)}...</p>
      <div className="flex items-center justify-between">
        <p className="text-blue-600 font-medium mt-2">
          Price: ${item.price.toFixed(2)}
        </p>
        <p className="text-blue-600 font-medium mt-2 flex items-center ">
       <MdOutlineStarBorder /> {Number(item.price).toFixed(2)}
        </p>
      </div>
      <button className="py-2 bg-blue-600 text-white font-semibold w-full rounded-md mt-4 cursor-pointer">
        Add To Cart
      </button>
    </div>
  );
};

export default Category;
