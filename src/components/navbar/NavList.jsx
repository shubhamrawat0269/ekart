import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="flex gap-[2rem] text-gray-700 space-x-3 font-medium text-md px-5 ">
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
        <Link to={"/user-dashboard"}>Shubham</Link>
      </li>

      {/* Admin */}
      <li>
        <Link to={"/admin-dashboard"}>Admin</Link>
      </li>

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
