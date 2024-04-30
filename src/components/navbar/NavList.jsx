import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      {/* Home */}
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      {/* All Product */}
      <li>
        <Link to={"/allproduct"}>All Product</Link>
      </li>

      {/* Signup */}
      <li>
        <Link to={"/signup"}>Signup</Link>
      </li>

      {/* User */}
      <li>
        <Link to={"/"}>Shubham</Link>
      </li>

      {/* Admin */}
      {/* <li>
                <Link to={'/'}>Admin</Link>
            </li> */}

      {/* logout */}
      {/* <li>
                logout
            </li> */}

      {/* Cart */}
      <li>
        <Link to={"/cart"}>Cart(0)</Link>
      </li>
    </ul>
  );
};

export default NavList;
