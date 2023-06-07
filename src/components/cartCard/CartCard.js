import React from "react";
import "../cartCard/CartCard.css";
import { useECommerce } from "../../context/ECommerceContext";

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
    <div className="cartCardWrapper">
      <h1>My Cart</h1>
      <div className="cartCardcontainer">
        <div className="cartCardImage">
          <img src={product?.image} alt="" />
        </div>
        <div className="descriptionButton">
          <div className="cartCardProductDescription">
            <div className="lineHeight">
              <h3>{product?.productName}</h3>
              <div className="pricing">
                <p>₹{product?.price}</p>
                <p className="mrp">₹{product?.mrp}</p>
              </div>

              <p className="discountDisplayLabel">
                {product?.discountDisplayLabel}
              </p>
            </div>
          </div>
          <div className="cartCardButtons">
            <div className="quantityButtonContainer">
              <button
                onClick={() => decreaseQuantityHandler(product?.productId)}
                disabled={product?.quantity <= 1}
              >
                -
              </button>
              <span>{product?.quantity}</span>
              <button
                onClick={() => increaseQuantityHandler(product.productId)}
              >
                +
              </button>
            </div>
            <div className="buttonsContainer">
              <button onClick={() => removefromCartHandler(product?.productId)}>
                Remove from Cart
              </button>
              <button onCanPlay={() => moveWishlistHandler(product?.productId)}>
                Move to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
