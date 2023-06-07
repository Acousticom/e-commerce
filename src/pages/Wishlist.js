import { useNavigate } from "react-router-dom";
import { useECommerce } from "../context/ECommerceContext";
import { WishlistCard } from "../components/WishlistCard";
import { emptyWishlist } from "../assest/Images";

export const Wishlist = () => {
  const { state } = useECommerce();
  const { wishlist } = state;
  const navigate = useNavigate();
  console.log(wishlist);
  return (
    <div>
      {wishlist.length === 0 && (
        <div>
          <img src={emptyWishlist} alt="wishlist is empty" />
          <h1>Your wishlist is empty!</h1>
          <p>Save your favourite items so you don't lose sight of them.</p>
          <button onClick={() => navigate("/product-listing-page/all")}>
            Add Products to wishlist
          </button>
        </div>
      )}
      {wishlist.map((product) => (
            <WishlistCard key={product.id} product={product} />
          ))}
    </div>
  );
};
