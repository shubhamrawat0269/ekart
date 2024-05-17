import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";
import { addProductPageList } from "../../dummy";
import { useGlobalContext } from "../../hooks/useGlobalContext";

const AddProductPage = () => {
  const { loading, setLoading } = useGlobalContext();
  const navigate = useNavigate();

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Add Product Function
  const addProductFunction = async () => {
    if (
      product.title == "" ||
      product.price == "" ||
      product.productImageUrl == "" ||
      product.category == "" ||
      product.description == ""
    ) {
      return toast.error("all fields are required");
    }

    setLoading(true);
    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, product);
      toast.success("Add product successfully");
      navigate("/admin-dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Add product failed");
    }
  };

  return (
    <div>
      <div className="bg-yellow-800 flex justify-center items-center h-screen">
        {loading && <Loader />}
        {/* Login Form  */}
        <div className="bg-white px-1 lg:px-7 py-10">
          {/* Top Heading  */}
          <div className="mb-5">
            <h2 className="text-center text-4xl font-bold text-black ">
              Add Product
            </h2>
          </div>

          {/* Input One  */}
          <div className="mb-3">
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={(e) => {
                setProduct({
                  ...product,
                  title: e.target.value,
                });
              }}
              placeholder="Product Title"
              className="bg-gray-50 border border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400"
            />
          </div>

          {/* Input Two  */}
          <div className="mb-3">
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: e.target.value,
                });
              }}
              placeholder="Product Price"
              className="bg-gray-50 border border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400"
            />
          </div>

          {/* Input Three  */}
          <div className="mb-3">
            <input
              type="text"
              name="productImageUrl"
              value={product.productImageUrl}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl: e.target.value,
                });
              }}
              placeholder="Product Image Url"
              className="bg-gray-50 border border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400"
            />
          </div>

          {/* Input Four  */}
          <div className="mb-3">
            <select
              value={product.category}
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value,
                });
              }}
              className="bg-gray-50 border border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400"
            >
              <option disabled>Select Product Category</option>
              {addProductPageList.map((value, index) => {
                const { name } = value;
                return (
                  <option
                    className=" first-letter:uppercase"
                    key={index}
                    value={name}
                  >
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Input Five  */}
          <div className="mb-3">
            <textarea
              value={product.description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value,
                });
              }}
              name="description"
              placeholder="Product Description"
              rows="5"
              className="bg-gray-50 border border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400"
            ></textarea>
          </div>

          {/* Add Product Button  */}
          <div className="mb-3">
            <button
              onClick={addProductFunction}
              type="button"
              className="bg-orange-800 hover:bg-orange-600 w-full text-white text-center py-2 font-bold rounded-md"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
