import { NavLink, useNavigate } from "react-router-dom";
import "../navbar/Navbar.css";
import { Searchbar } from "../searchBar/Searchbar.js";
import {
  MdOutlineShoppingCart,
  RiAccountCircleLine,
} from "../../assest/icons.js";
import { AiOutlineHeart } from "../../assest/icons.js";
import { useAuth } from "../../context/authContext.js";
import { useECommerce } from "../../context/ECommerceContext.js";
import BrandLogo from "../brandLogo/BrandLogo.jsx";
const Navbar = () => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { noOfItemsInWishlist, noOfItemsInCart } = useECommerce();
  return (
    <header>
      <nav>
        <div className="navbar">
          <div
            onClick={() => navigate("/")}
            style={{
              cursor: "pointer",
            }}
          >
            <BrandLogo />
          </div>
          <div className="nav-items">
            <div className="searchBarHome">
              {" "}
              <Searchbar />
            </div>
            {!token && (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
            <div className="navList">
              <div className="navLink">
                <NavLink to="/wishlist">
                  <AiOutlineHeart size="28" color="black" />
                  {noOfItemsInWishlist > 0 && (
                    <p className="productLength">{noOfItemsInWishlist}</p>
                  )}
                </NavLink>
              </div>
              <div className="navLink">
                <NavLink to="/cart">
                  <MdOutlineShoppingCart size="28" color="black" />
                  {noOfItemsInCart > 0 && (
                    <p className="productLength">{noOfItemsInCart}</p>
                  )}
                </NavLink>
              </div>

              <div className="navLink">
                <NavLink to="/profile">
                  <RiAccountCircleLine size="28" color="black" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* responsive navbar for mobile*/}
        <div className="responsiveNavbar">
          <div className="nav-items">
            <div
              onClick={() => navigate("/")}
              style={{
                cursor: "pointer",
              }}
            >
              <BrandLogo />
            </div>
            <div className="navList">
              <div className="navLink">
                <NavLink to="/wishlist">
                  <AiOutlineHeart size="24" color="black" />
                  {noOfItemsInWishlist > 0 && (
                    <p className="productLength">{noOfItemsInWishlist}</p>
                  )}
                </NavLink>
              </div>
              <div className="navLink">
                <NavLink to="/cart">
                  <MdOutlineShoppingCart size="24" color="black" />
                  {noOfItemsInCart > 0 && (
                    <p className="productLength">{noOfItemsInCart}</p>
                  )}
                </NavLink>
              </div>
              <div className="navLink">
                <NavLink to="/profile">
                  <RiAccountCircleLine size="24" color="black" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="searchBarHome">
            {" "}
            <Searchbar />
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
