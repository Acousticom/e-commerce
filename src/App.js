import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import { ProductListingPage } from "./pages/productListingPage/ProductListingPage";
import { Cart } from "./pages/cart/Cart";
import { ProductDetail } from "./pages/productDetails/ProductDetail";
import { Wishlist } from "./pages/Wishlist";
import { Checkout } from "./pages/checkout/Checkout";
import { Profile } from "./pages/Profile/Profile";
import { Footer } from "./components/Footer/Footer";
import Layout from "./layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route
            path={`/product-listing-page/:productCategory`}
            element={<ProductListingPage />}
          />
          <Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
