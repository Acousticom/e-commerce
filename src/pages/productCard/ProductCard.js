import React from "react";
import "../productCard/ProductCard.css";
import { useECommerce } from "../../context/ECommerceContext";
import { useParams, useNavigate } from "react-router-dom";
import { BsFillHeartFill, RiHeartAddLine } from "../../assest/icons";
import { getIsInProducts } from "../../utils";
export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {
    state,
    removeWishlistHandler,
    addToWishlistHandler,
    addToCartHandler,
  } = useECommerce();
  const { wishlist, cart } = state;
  const { productId } = product;
  const isInWishlist = getIsInProducts(wishlist, productId);
  const isInCart = getIsInProducts(cart, productId);
  return (
    <div className="product-card">
      <li
        key={product.id}
        onClick={() => navigate(`/product-detail/${productId}`)}
      >
        <img src={product.image} alt="" />
        <div className="productCardDescription">
          <div className="brandRating">
            <h3>{product.brand}</h3>

            <p>{product.rating}⭐</p>
          </div>

          <h4>{product.productName}</h4>
          <div className="lineHeight">
            <div className="pricing">
              <h3>₹ {product.price}</h3>
              <h3 className="mrp">₹ {product.mrp}</h3>
            </div>

            <p className="discountDisplayLabel">
              {product.discountDisplayLabel}
            </p>
          </div>
        </div>
      </li>

      {isInWishlist ? (
        <button
          className="wishlistButton"
          onClick={() => removeWishlistHandler(productId)}
        >
          <BsFillHeartFill size="20" />
        </button>
      ) : (
        <button
          className="wishlistButton"
          onClick={() => addToWishlistHandler(product)}
        >
          <RiHeartAddLine size="20" />
        </button>
      )}
      {isInCart ? (
        <button className="addToCartButton" onClick={() => navigate("/cart")}>
          Go to Cart
        </button>
      ) : (
        <button
          className="addToCartButton"
          onClick={() => addToCartHandler(product)}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};
