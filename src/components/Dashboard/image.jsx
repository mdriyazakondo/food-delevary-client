const image = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mt-8">
      <h3 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Add New Product
      </h3>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="font-semibold text-gray-700">Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            className="w-full border border-blue-400 outline-none py-2 px-3 rounded-md text-gray-700 mt-2 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="font-semibold text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Enter category"
            className="w-full border border-blue-400 outline-none py-2 px-3 rounded-md text-gray-700 mt-2 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="font-semibold text-gray-700">Price ($)</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            className="w-full border border-blue-400 outline-none py-2 px-3 rounded-md text-gray-700 mt-2 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="font-semibold text-gray-700">Product Image</label>
          <input
            type="file"
            accept="image/*"
            className="w-full mt-2"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            placeholder="Enter product description"
            rows="4"
            className="w-full border border-blue-400 outline-none py-2 px-3 rounded-md text-gray-700 mt-2 focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Add Product 
          </button>
        </div>
      </form>
    </div>
  );
};

export default image;
