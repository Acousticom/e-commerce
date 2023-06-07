import React from "react";
import { useECommerce } from "../context/ECommerceContext";

export const CartCard = ({ product }) => {
  const { state, dispatch } = useECommerce();
  const { cart } = state;

  const removefromCartHandler = (id) => {
    const updatedCart = cart.filter((product) => product.productId !== id);
    dispatch({ type: "REMOVE_FROM_CART", payload: updatedCart });
  };
  const moveWishlistHandler = (id) => {
    const updatedCart = cart.filter((product) => product.productId !== id);
    const product = cart.find((product) => product.productId === id);
    dispatch({
      type: "MOVE_TO_WISHLIST_FROM_CART",
      payload: { updatedCart, product },
    });
  };
  const decreaseQuantityHandler = (id) => {
    const updatedCart = cart.map((product) =>
      product.productId === id
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    dispatch({
      type: "DECREASE_CART_PRODUCT_QUANTITY",
      payload: updatedCart,
    });
  };

  const increaseQuantityHandler = (id) => {
    const updatedCart = cart.map((product) =>
      product.productId === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    dispatch({
      type: "DECREASE_CART_PRODUCT_QUANTITY",
      payload: updatedCart,
    });
  };

  return (
    <div>
      <img src={product?.image} alt="" />
      <p>{product?.productName}</p>
      <p>₹{product?.price}</p>
      <p>{product?.mrp}</p>
      <p>{product?.discountDisplayLabel}</p>
      <button
        onClick={() => decreaseQuantityHandler(product?.productId)}
        disabled={product?.quantity <= 1}
      >
        -
      </button>
      <span>{product?.quantity}</span>
      <button onClick={() => increaseQuantityHandler(product.productId)}>
        +
      </button>
      <button onClick={() => removefromCartHandler(product?.productId)}>
        Remove from Cart
      </button>
      <button onCanPlay={() => moveWishlistHandler(product?.productId)}>
        Move to Wishlist
      </button>
    </div>
  );
};
