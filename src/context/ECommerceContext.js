import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { productReducer, initialState } from "../reducer/productReducer";
import { useNavigate } from "react-router-dom";

const ECommerceContext = createContext();

const ECommerceProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [productsCategories, setProductsCategories] = useState([]);

  const [state, dispatch] = useReducer(productReducer, initialState);
  const navigate = useNavigate();

  const removeWishlistHandler = (id) => {
    const updatedWishlist = state.wishlist.filter(
      (product) => product.productId !== Number(id)
    );
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: updatedWishlist });
  };
  const addToWishlistHandler = (product) => {
    // user
    //   ? dispatch({ type: "ADD_TO_WISHLIST", payload: product })
    //   : navigate("/login");
    dispatch({ type: "ADD_TO_WISHLIST", payload: product })
  };

  const addToCartHandler = (product) => {
    // user
    //   ? dispatch({ type: "ADD_TO_CART", payload: product })
    //   : navigate("/login");
    dispatch({ type: "ADD_TO_CART", payload: product })
  };

  const getProductsData = async () => {
    try {
      dispatch({ type: "ISLOADING_TRUE" });
      const res = await fetch("/api/products");
      const { products } = await res.json();
      dispatch({ type: "ISLOADING_FALSE" });
      setProductsData(products);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);

  const getProductsCategories = async () => {
    try {
      const res = await fetch("/api/categories");
      const { categories } = await res.json();
      setProductsCategories(categories);
    } catch (error) {}
  };
  useEffect(() => {
    getProductsCategories();
  }, []);

  return (
    <ECommerceContext.Provider
      value={{ productsData, productsCategories, state, dispatch,removeWishlistHandler,addToWishlistHandler, addToCartHandler }}
    >
      {children}
    </ECommerceContext.Provider>
  );
};

const useECommerce = () => useContext(ECommerceContext);

export { useECommerce, ECommerceProvider };
