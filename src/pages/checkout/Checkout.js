import React from "react";
import { useECommerce } from "../../context/ECommerceContext";
import { address } from "../../data/filterData";
import styles from "./Checkout.module.css";

export const Checkout = () => {
  const { dispatch, state } = useECommerce();
  const { selectedAddress, cart, totalMrp, totalPrice } = state;
  const discountPrice = totalMrp - totalPrice;

  return (
    <div className={styles.container}>
      <div className={styles.addressContainer}>
        <h2>Select Address</h2>
        {address.map((user) => (
          <div className={styles.addressListContainer}>
            <div className={styles.addressList}>
              <label key={user.id} className={styles.label}>
                <input
                  type="radio"
                  name="user"
                  value={user}
                  onChange={() =>
                    dispatch({ type: "SELECT_ADDRESS", payload: user })
                  }
                />
              
              <div>
                <h3 className={styles.lineHeight}>{user.name}</h3>
                <p>{user.address}</p>
                <p className={styles.lineHeight}>
                  Phone Number: +1 <span>{user.contact}</span>
                </p>
              </div>
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.orderDetailsContainer}>
        <h2 className={styles.textAlign}>Order Details</h2>
          {cart.map((product) => (
            <div key={product.id} className={styles.list}>
              <strong>Name: {product.category}</strong>
              <p>Quantity: {product.quantity}</p>
              <p>Price: ₹{product.price}</p>
            </div>
          ))}
          <div>
        <p className="flexClass">
          Price: <span>₹{totalMrp}</span>
        </p>
        <p className="flexClass">
          Discount: <span className="discount">-₹{discountPrice}</span>
        </p>
        <h3 className="flexClass">
          Total Amount:<span>₹{totalPrice}</span>
        </h3>
        </div>
        <h2 className={styles.textAlign}>Deliver To</h2>
        {selectedAddress.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.address}</p>
            <p>
              Phone Number: +1 <span>{user.contact}</span>
            </p>{" "}
          </div>
        ))}
        <button className={styles.button}>Place Order</button>
      </div>
    </div>
  );
};
