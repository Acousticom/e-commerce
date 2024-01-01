import React from "react";
import { useECommerce } from "../../context/ECommerceContext";
import { useNavigate } from "react-router-dom";
import { getIsInProducts } from "../../utils";
import { BsFillHeartFill, RiHeartAddLine } from "../../assest/icons";
import styles from "./WishlistCard.module.css";
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
    <div className={styles.cardContainer}>
      <div
        onClick={() => navigate(`/product-detail/${productId}`)}
      >
        <img src={image} alt="" className={styles.image} />
        <div className={styles.productDetails}>
          <p>
            <strong>{brand}</strong>
          </p>

          <p className={styles.lineHeight}>{productName}</p>
          <div className={styles.priceList}>
            <p className="price">₹{price}</p>
            <p className="mrp">₹{mrp}</p>
            <p className="discountDisplayLabel">{discountDisplayLabel}</p>
          </div>
        </div>
      </div>

      {isInCart ? (
        <button className={styles.cartButton} onClick={() => navigate("/cart")}>
          Go to cart
        </button>
      ) : (
        <button className={styles.cartButton} onClick={() => cartHandler(productId)}>
          Add to Cart
        </button>
      )}

      {isInWishlist ? (
        <button
          className={styles.addToWishlistBtn}
          onClick={() => removeWishlistHandler(productId)}
        >
          <BsFillHeartFill size="18" color="#fc7684"/>
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
