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
    <div className="container">
      <div>
        <img src={productDetail?.image} alt="" />
      </div>
      <h2>{productDetail?.brand}</h2>
      <h3>{productDetail?.productName}</h3>
      <p>{productDetail?.rating}⭐</p>
      <p>{productDetail?.description}</p>
      <h3>₹ {productDetail?.price}</h3>
      <h3>₹ {productDetail?.mrp}</h3>
      {productDetail?.fastDelivery ? (
        <p>Fastest Delivery</p>
      ) : (
        <p>Fastest Delivery Not Available</p>
      )}
      <p>Delivery Time: {productDetail?.deliveryTime}</p>

      
        {isInWishlist ? (
          <button onClick={() => removeWishlistHandler(productId)}>
            <BsFillHeartFill />
            <p>Remove from Wishlist</p>
          </button>
        ) : (
          <button onClick={() => addToWishlistHandler(productDetail)}>
            <RiHeartAddLine />
            <p>Add to Wishlist</p>
          </button>
        )}
        {isInCart ? (
          <button onClick={() => navigate("/cart")}>Go to Cart</button>
        ) : (
          <button onClick={() => addToCartHandler(productDetail)}>
            Add to Cart
          </button>
        )}
      
    </div>
  );
};
