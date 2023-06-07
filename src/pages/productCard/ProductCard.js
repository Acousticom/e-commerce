import React from "react";
import "../productCard/ProductCard.css";
import { useECommerce } from "../../context/ECommerceContext";
import { useParams, useNavigate } from "react-router-dom";
import { BsFillHeartFill, RiHeartAddLine } from "../../assest/icons";
import { getIsInProducts } from "../../utils";
export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { state, removeWishlistHandler, addToWishlistHandler } = useECommerce();
  const { wishlist } = state;
  const { productId } = product;
  const isInWishlist = getIsInProducts(wishlist, productId);
  return (
    <div>
      <li
        key={product.id}
        className="product-card"
        onClick={() => navigate(`/product-detail/${productId}`)}
      >
        <img src={product.image} alt="" />
        <div className="productCardDescription">
          <h3>{product.productName}</h3>
          <p>{product.rating}⭐</p>
          <p>{product.description}</p>
          <h3>₹ {product.price}</h3>
          <h3 className="mrp">₹ {product.mrp}</h3>
          <p>{product.discountDisplayLabel}</p>
        </div>
      </li>

      {isInWishlist ? (
        <button onClick={() => removeWishlistHandler(productId)}>
          <BsFillHeartFill size="18" />
        </button>
      ) : (
        <button onClick={() => addToWishlistHandler(product)}>
          <RiHeartAddLine size="18" />
        </button>
      )}
    </div>
  );
};
