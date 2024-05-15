/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { useState } from "react";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Loader from "../../components/loader/Loader";

const Login = () => {
  const { loading, setLoading } = useGlobalContext();
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleUserLogin = async () => {
    // validation apply
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );

      try {
        const q = query(
          collection(fireDB, "user"),
          where("uid", "==", users?.user?.uid)
        );

        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");
          setLoading(false);
          if (user.role === "user") navigate("/user-dashboard");
          else navigate("/admin-dashboard");
        });
        return () => data;
      } catch (error) {
        console.log(error);
        toast.error(error.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Login Failed");
    }
  };

  return (
    <div className="bg-yellow-800 flex justify-center items-center h-screen">
      {loading && <Loader />}
      <div className="login_Form bg-white px-1 lg:px-7 py-10">
        <div className="mb-5">
          <h2 className="text-center text-4xl font-bold text-black ">Login</h2>
        </div>

        <div className="mb-3">
          <input
            type="email"
            placeholder="Email Address"
            value={userLogin.email}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                email: e.target.value,
              });
            }}
            className="bg-gray-50 border border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400"
          />
        </div>

        {/* Input Three  */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            value={userLogin.password}
            onChange={(e) => {
              setUserLogin({
                ...userLogin,
                password: e.target.value,
              });
            }}
            className="bg-gray-50 border border-gray-400 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-400"
          />
        </div>

        {/* Signup Button  */}
        <div className="mb-5">
          <button
            type="button"
            onClick={handleUserLogin}
            className="bg-orange-800 hover:bg-orange-600 w-full text-white text-center py-2 font-bold rounded-md"
          >
            Login
          </button>
        </div>

        <div>
          <h2 className="text-black text-center">
            Don't Have an account
            <Link className=" text-orange-800 ml-3" to={"/signup"}>
              Signup
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
