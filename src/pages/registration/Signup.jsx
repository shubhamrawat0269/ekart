import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../hooks/useGlobalContext";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../components/loader/Loader";
import toast from "react-hot-toast";
import { Eye } from "lucide-react";

const Signup = () => {
  const { loading, setLoading } = useGlobalContext();
  const navigate = useNavigate();

  // User signup state
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const [passwordType, setPasswordType] = useState(true);

  const handleUserSignup = async () => {
    // validation
    if (userSignup.name === "" || userSignup.email === "") {
      toast.error("All Fields are required");
      return;
    }

    setLoading(true);

    try {
      //1.  creating a user with given information of email and password
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );

      //2. create user object
      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      //3. create user Reference
      const userRefrence = collection(fireDB, "user");

      // 4. Add User Detials
      addDoc(userRefrence, user);

      setUserSignup({
        name: "",
        email: "",
        password: "",
      });

      toast.success("Signup Successfully");

      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.success(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="bg-yellow-800  flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className="bg-white px-3 lg:px-7 py-10 shadow-lg">
        {/* Top Heading  */}
        <div className="mb-5">
          <h2 className="text-center text-4xl font-bold text-black">Signup</h2>
        </div>

        {/* Input One  */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Full Name"
            value={userSignup.name}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                name: e.target.value,
              });
            }}
            className="bg-gray-50 border border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400"
          />
        </div>

        {/* Input Two  */}
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email Address"
            value={userSignup.email}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                email: e.target.value,
              });
            }}
            className="bg-gray-50 border border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400"
          />
        </div>

        {/* Input Three  */}
        <div className="mb-5 relative">
          <input
            type={passwordType ? "password" : "text"}
            placeholder="Password"
            value={userSignup.password}
            onChange={(e) => {
              setUserSignup({
                ...userSignup,
                password: e.target.value,
              });
            }}
            className="bg-gray-50 border border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400"
          />
          <div
            className="absolute right-3 top-2 cursor-pointer"
            onClick={() => setPasswordType(!passwordType)}
          >
            <Eye color="gray" />
          </div>
        </div>

        {/* Signup Button  */}
        <div className="mb-5">
          <button
            type="button"
            onClick={handleUserSignup}
            className="bg-orange-800 hover:bg-orange-600 w-full text-white text-center py-2 font-bold rounded-md"
          >
            Signup
          </button>
        </div>

        <div>
          <h2 className="text-black text-center">
            Have an account
            <Link
              className=" text-orange-800 ml-3 hover:text-orange-500"
              to={"/login"}
            >
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
