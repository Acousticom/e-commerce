import { Link, useNavigate } from "react-router-dom";
import { useECommerce } from "../../context/ECommerceContext";
import "../home/Home.css";

export const Home = () => {
  const { productsCategories } = useECommerce();
  const navigate=useNavigate()
  return (
    <div className="home">
      <div>
        <Link to="/product-listing-page/all">
          <img
            className="heroImage"
            src="https://images-static.nykaa.com/uploads/eab8444c-6773-4c5e-a7e4-3a08cf417250.jpg?tr=w-1200,cm-pad_resize"
            alt=""
          />
        </Link>
        <div className="label">
          <h1 >SALE</h1>
          <p>The most awaiting sale is here to elevate your wardrobe.</p>
        </div>

        <div className="saleImageContainer">
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683903949/E-comm%20ATTIREX/Sale-Banner-2_rifmbx.jpg"
            alt=""
            className="saleImage"
            onClick={()=>navigate("/product-listing-page/all")}
          />
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683903022/E-comm%20ATTIREX/Sale-Banner-1_mzj7ko.gif"
            alt=""
            className="saleImage"
            onClick={()=>navigate("/product-listing-page/all")}
          />
          <img
            src="https://res.cloudinary.com/dptfwcnro/image/upload/v1683903950/E-comm%20ATTIREX/Sale-Banner-3_si788m.jpg"
            alt=""
            className="saleImage"
            onClick={()=>navigate("/product-listing-page/all")}
          />
        </div>
      </div>
      <div  className="label">
        <h1>Shop By Category</h1>
        <p>
          We find the best suppliers and makers of fashion and fancy products.
        </p>
      </div>

      <div className="categoryList">
        {" "}
        {productsCategories.map((category) => (
          <li>
            <Link to={`/product-listing-page/${category.categoryName}`}>
              <img src={category.image} className="categoryImage" alt=""/>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};
