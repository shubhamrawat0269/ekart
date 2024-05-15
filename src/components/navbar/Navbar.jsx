import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import NavList from "./NavList";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  return (
    <nav className="bg-yellow-50">
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-[2rem] ">
        {/* left  */}
        <div className="flex flex-col lg:flex-row items-center gap-4 left py-3 lg:py-0">
          <Link to={"/"}>
            <h1 className=" font-bold lg:text-3xl text-5xl text-center">
              E-Kart
            </h1>
          </Link>
          <div className="right flex justify-center mb-4 lg:mb-0">
            <NavList user={user} dispatchLogout={logout}/>
          </div>
        </div>

        {/* Search Bar  */}
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
