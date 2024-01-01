import React from "react";
import "../cartCard/CartCard.css";
import { useECommerce } from "../../context/ECommerceContext";
import toast from "react-hot-toast";

export const CartCard = ({ product }) => {
  const { state, dispatch } = useECommerce();
  const { cart } = state;

  const removefromCartHandler = (id) => {
    const updatedCart = cart.filter((product) => product.productId !== id);
    dispatch({ type: "REMOVE_FROM_CART", payload: updatedCart });
    toast.success("Product removed from cart")
  };

  const moveWishlistHandler = (id) => {
    console.log(id)
    const updatedCart = cart.filter((product) => product.productId !== id);
    const product = cart.find((product) => product.productId === id);
    dispatch({
      type: "MOVE_TO_WISHLIST_FROM_CART",
      payload: { updatedCart, product },
    });
    toast.success("Moved to wishlist")
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
    toast.success("Quantity decreased")
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
    toast.success("Quantity increased")
  };

  return (
    <div className="cartCardWrapper">
      <div className="cartCardcontainer">
        <div className="cartCardImage">
          <img src={product?.image} alt="" />
        </div>
        <div className="descriptionContainer">
          <div className="cartCardProductDescription">
            <div className="lineHeight">
              <h3 style={{lineHeight:"15px"}}>{product?.productName}</h3>
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
              <button onClick={() => removefromCartHandler(product?.productId)} className="removeFromCart">
                Remove from Cart
              </button>
              <button onClick={() => moveWishlistHandler(product?.productId)} className="moveTowishlist">
                Move to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
