import React from "react";
import { useECommerce } from "../context/ECommerceContext";
import { useNavigate } from "react-router-dom";
import { getIsInProducts } from "../utils";
import {BsFillHeartFill,RiHeartAddLine} from "../assest/icons"
// import { toast } from "react-toastify";
export const WishlistCard = ({ product }) => {
  const { dispatch, state, removeWishlistHandler } = useECommerce();
  const { wishlist, cart } = state;
  const navigate = useNavigate();
  const {
    id,
    productName,
    price,
    mrp,
    brand,
    image,
    discountDisplayLabel,
    productId,
  } = product;
  const cartHandler = (id) => {
    const product = wishlist.find((product) => product.productId === id);
    const updatedWishlist = wishlist.filter(
      (product) => product.productId !== id
    );

    dispatch({
      type: "ADD_TO_CART_FROM_WISHLIST",
      payload: { product, updatedWishlist },
    });
    // toast.success("Add to cart")
  };
  const isInWishlist = getIsInProducts(wishlist, productId);
  const isInCart = cart.some(
    (product) => product.productId === Number(productId)
  );

  return (
    <div>
      <div
        className="cardContainer"
        onClick={() => navigate(`/product-detail/${productId}`)}
      >
        <img src={image} alt="" />
        <strong>{brand}</strong>
        <p>{productName}</p>
        <p className="price">₹{price}</p>
        <p className="mrp">{mrp}</p>
        <p className="discountDisplayLabel">{discountDisplayLabel}</p>
      </div>

      {isInCart ? (
        <button className="cartButton" onClick={() => navigate("/cart")}>
          Go to cart
        </button>
      ) : (
        <button className="cartButton" onClick={() => cartHandler(productId)}>
          Add to Cart
        </button>
      )}

      {isInWishlist ? (
        <button
        //   className={classes.removeWishlistButton}
          onClick={() => removeWishlistHandler(productId)}
        >
          <BsFillHeartFill size="18" />
        </button>
      ) : (
        <button
          onClick={() =>
            dispatch({ type: "ADD_TO_WISHLIST", payload: product })
          }
        >
          <RiHeartAddLine size="18" />
        </button>
      )}
    </div>
  );
};

