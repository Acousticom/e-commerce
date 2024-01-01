import React from "react";
import "../productDetails/ProductDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { useECommerce } from "../../context/ECommerceContext";
import { getIsInProducts } from "../../utils";
import { BsFillHeartFill, RiHeartAddLine } from "../../assest/icons";
export const ProductDetail = () => {
  const {
    state,
    productsData,
    removeWishlistHandler,
    addToWishlistHandler,
    addToCartHandler,
  } = useECommerce();
  const { productId } = useParams();

  const { wishlist, cart } = state;

  const productDetail = productsData.find(
    (product) => product.productId === Number(productId)
  );
  const isInWishlist = getIsInProducts(wishlist, productId);
  const isInCart = getIsInProducts(cart, productId);
  const navigate = useNavigate();
  return (
    <div className="productDetailsWrapper">
      <div className="productDetailsContainer">
        <div className="productDetailsProductImage">
          <img src={productDetail?.image} alt="" />
        </div>
        <div className="productDetailsProductDiscription">
          <h1 className="lineHeight">{productDetail?.brand}</h1>
          <h2>{productDetail?.productName}</h2>
          <div className="productDetailsLineHeight ">
            <p>⭐ {productDetail?.rating}</p>
            <div className="productDetailsPricing">
              <h3>₹ {productDetail?.price}</h3>
              <h3 className="mrp">₹ {productDetail?.mrp}</h3>
              <p className="discountDisplayLabel">
                {productDetail?.discountDisplayLabel}
              </p>
            </div>
          </div>

          <p>{productDetail?.description}</p>
          {productDetail?.fastDelivery ? (
            <p>Fastest Delivery</p>
          ) : (
            <p>Fastest Delivery Not Available</p>
          )}
          <p>Delivery Time: {productDetail?.deliveryTime}</p>

          {isInCart ? (
            <button className="addToCartBtn" onClick={() => navigate("/cart")}>
              Go to Cart
            </button>
          ) : (
            <button
              className="addToCartBtn"
              onClick={() => addToCartHandler(productDetail)}
            >
              Add to Cart
            </button>
          )}
          {isInWishlist ? (
            <button
              className="wishlistBtn"
              onClick={() => removeWishlistHandler(productId)}
            >
              <BsFillHeartFill /> Remove from Wishlist
            </button>
          ) : (
            <button
              className="wishlistBtn"
              onClick={() => addToWishlistHandler(productDetail)}
            >
              <RiHeartAddLine /> Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
