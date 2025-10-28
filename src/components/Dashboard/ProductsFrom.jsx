import React, { useState } from "react";
import axios from "axios";

const ProductsForm = () => {
  const [image, setImage] = useState(null);

  const handleImageFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please first select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert(res.data.message);
      console.log("Upload success", res.data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpload}>
        <label className="font-semibold text-gray-700">Product Image</label>
        <input
          type="file"
          accept="image/*"
          className="mt-2 border w-[300px] block py-2 pl-3 rounded-sm cursor-pointer"
          onChange={handleImageFile}
        />
        {image && (
          <div>
            <img
              src={URL.createObjectURL(image)}
              alt=""
              className="w-32 h-32 mt-2"
            />
          </div>
        )}
        <button
          className="py-2 px-4 bg-blue-600 text-white font-semibold mt-4 cursor-pointer"
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default ProductsForm;
