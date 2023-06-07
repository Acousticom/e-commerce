import React from "react";
import { useECommerce } from "../context/ECommerceContext";
import { address } from "../data/filterData";

export const Checkout = () => {
  const { dispatch, state } = useECommerce();
  const { selectedAddress, cart, totalMrp, totalPrice } = state;
  const discountPrice = totalMrp - totalPrice;
//   const handleCheckoutClick = () => {
//     handleCheckout(selectedAddress, totalPrice);
//   };
  return (
    <div>
      <h1>Select Address</h1>
      {address.map((user) => (
        <label key={user.id}>
          <input
            type="radio"
            name="user"
            value={user}
            onChange={() => dispatch({ type: "SELECT_ADDRESS", payload: user })}
          />
          <h2>{user.name}</h2>
          <p>{user.address}</p>
          <p>
            Phone Number: +1 <span>{user.contact}</span>
          </p>
        </label>
      ))}
      <h1>Order Details</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <strong>Name: {product.category}</strong>
            <p>Quantity: {product.quantity}</p>
            <p>Price: ₹{product.price}</p>
          </li>
        ))}
      </ul>
      <p>
        Price: <span>₹{totalMrp}</span>
      </p>
      <p>
        Discount: <span>-₹{discountPrice}</span>
      </p>
      <h2>
        Total Amount:<span>₹{totalPrice}</span>
      </h2>
      <h1>Deliver To</h1>
      {selectedAddress.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.address}</p>
          <p>
            Phone Number: +1 <span>{user.contact}</span>
          </p>{" "}
        </div>
      ))}
      <button>Place Order</button>
    </div>
  );
};
