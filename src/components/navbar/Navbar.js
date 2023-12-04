import { NavLink, useNavigate } from "react-router-dom";
import "../navbar/Navbar.css";
import { Searchbar } from "../searchBar/Searchbar.js";
import { MdOutlineShoppingCart, RiAccountCircleLine } from "../../assest/icons.js";
import { AiOutlineHeart } from "../../assest/icons.js";

const Navbar = () => {
  const navigate  = useNavigate();
  return (
    <header>
      <nav>
        <div className="brand-name">
          <h1 onClick={() => navigate("/")}>Clothify</h1>
        </div>
        <div className="nav-items">
          <Searchbar />
          <button>Login</button>
          <NavLink to="/wishlist"><AiOutlineHeart size="28"/></NavLink>
          <NavLink to="/cart"><MdOutlineShoppingCart size="28"/></NavLink>
          <NavLink to="/profile"><RiAccountCircleLine size="28"/></NavLink>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
