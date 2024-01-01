import { useNavigate } from "react-router-dom";
import { useECommerce } from "../../context/ECommerceContext";
import { WishlistCard } from "../../components/wishlistCard/WishlistCard";
import { emptyWishlist } from "../../assest/Images";
import styles from "./Wishlist.module.css";

export const Wishlist = () => {
  const { state } = useECommerce();
  const { wishlist } = state;
  const navigate = useNavigate();
  console.log(wishlist);
  return (
    <div>
      {wishlist.length === 0 && (
        <div className={styles.emptyWishlistContainer}>
          <div className={styles.emptyWishlist}>
            <img
              src={emptyWishlist}
              alt="wishlist is empty"
              className={styles.emptyWishlistImage}
            />
            <h2>Your wishlist is empty!</h2>
            <p>Save your favourite items so you don't lose sight of them.</p>
            <button onClick={() => navigate("/product-listing-page/all")} className={styles.button}>
              Add Products to wishlist
            </button>
          </div>
        </div>
      )}
      <div className={styles.container}>
        {wishlist.map((product) => (
          <WishlistCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
