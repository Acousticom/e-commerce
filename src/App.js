import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { ProductListingPage } from "./pages/productListingPage/ProductListingPage";
import { Cart } from "./pages/cart/Cart";
import { ProductDetail } from "./pages/productDetails/ProductDetail";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Checkout } from "./pages/checkout/Checkout";
import { Profile } from "./pages/Profile/Profile";
import Layout from "./layout/Layout";
import Login from "./pages/login/Login";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import SignupForm from "./components/authentication/signupForm/SignupForm";
import NotFound from "./pages/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path={`/product-listing-page/:productCategory`}
            element={<ProductListingPage />}
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product-detail/:productId"
            element={<ProductDetail />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
