import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import { ProductListingPage } from "./pages/productListingPage/ProductListingPage";
import { Cart } from "./pages/cart/Cart";
import { ProductDetail } from "./pages/productDetails/ProductDetail";
import { Wishlist } from "./pages/Wishlist";
import { Checkout } from "./pages/Checkout";
import { Profile } from "./pages/Profile/Profile";
import { Footer } from "./components/Footer/Footer";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path={`/product-listing-page/:productCategory`} element={<ProductListingPage/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/product-detail/:productId" element={<ProductDetail/>} /> 
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
