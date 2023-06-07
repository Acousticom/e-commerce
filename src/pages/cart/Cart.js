import { useNavigate } from "react-router-dom";
import "../cart/Cart.css"
import { useECommerce } from "../../context/ECommerceContext";
import { useEffect } from "react";
import { emptyCart } from "../../assest/Images";
import { CartCard } from "../../components/cartCard/CartCard";

export const Cart = () => {
  const { state, dispatch } = useECommerce();
  const { cart, totalPrice, totalMrp } = state;
  const navigate = useNavigate();

  useEffect(() => {
    const updatedTotalPrice = cart?.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
    const updatedTotalMrp = cart?.reduce(
      (acc, curr) => acc + curr.mrp * curr.quantity,
      0
    );
    dispatch({
      type: "TOTAL_PRICE",
      payload: { updatedTotalPrice, updatedTotalMrp },
    });
  }, [cart]);
  const discountPrice = totalMrp - totalPrice;
  return (
    <div className="cart">
      {cart.length === 0 && (
        <div>
          <img src={emptyCart} alt="empty cart" />
          <h1>Your shopping bag is empty!</h1>
          <p>
            Looks like you haven't added anything to your bag. Let's change
            that.
          </p>
          <button onClick={() => navigate("/product-listing-page/all")}>
            Back to shopping
          </button>
        </div>
      )}
      {cart.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}

      {cart.length > 0 && (
        <div className="priceDetails">
          <h2>Price Details</h2>
          <p>
            Price: <span>₹{totalMrp}</span>{" "}
          </p>
          <p>
            Discount: <span>-₹{discountPrice}</span>
          </p>
          <h2>
            Total Amount:<span>₹{totalPrice}</span>{" "}
          </h2>
          <button onClick={() => navigate("/checkout")}>Checkout</button>
        </div>
      )}
    </div>
  );
};
